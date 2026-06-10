import { useEffect } from "react";

const DURATION = 550; // duração da animação de snap
const EDGE = 8; // tolerância (px) para detectar bordas de seção
const ALIGN_TOL = 4; // proximidade do topo de uma seção que já conta como "encaixado"
const COOLDOWN = 150; // ignora input logo após um snap programático
const SETTLE_DELAY = 120; // silêncio de scroll (ms) antes de realinhar
const WHEEL_MIN = 2;
const TOUCH_MIN = 8;

const EASING = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const SECTION_IDS = ["home", "about", "portfolio", "contact"] as const;

type Geom = { top: number; height: number };

export function useSnapScroll(containerId: string) {
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const c = container;

    let isAnimating = false;
    let cooldownUntil = 0;
    let prevScrollTop = c.scrollTop;
    let lastDir: 1 | -1 = 1;
    let settleTimer: number | undefined;

    const isCooling = () => performance.now() < cooldownUntil;
    const vh = () => c.clientHeight;

    // Posições e alturas reais das seções (recalculadas a cada uso para
    // acompanhar lazy-load, resize e a diferença mobile/desktop).
    function geom(): Geom[] {
      const top0 = c.scrollTop;
      return SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { top: 0, height: 0 };
        const r = el.getBoundingClientRect();
        return { top: r.top + top0, height: r.height };
      });
    }

    // Seção que ocupa o topo da viewport (a "âncora" atual).
    function anchorIndex(secs: Geom[], S: number): number {
      let idx = 0;
      for (let i = 0; i < secs.length; i++) {
        if (secs[i]!.height > 0 && secs[i]!.top <= S + EDGE) idx = i;
      }
      return idx;
    }

    const isTall = (g: Geom) => g.height > vh() + EDGE;

    // Alvo para um empurrão explícito (wheel/swipe).
    // null = não fazer snap, deixar a rolagem nativa acontecer.
    function gestureTarget(S: number, dir: 1 | -1): number | null {
      const secs = geom();
      const i = anchorIndex(secs, S);
      const a = secs[i]!;

      if (dir === 1) {
        // ainda há conteúdo abaixo dentro de uma seção alta → rola nativo
        if (isTall(a) && a.top + a.height > S + vh() + EDGE) return null;
        const next = secs[i + 1];
        return next && next.height > 0 ? next.top : null;
      }

      // ainda há conteúdo acima dentro de uma seção alta → rola nativo
      if (isTall(a) && a.top < S - EDGE) return null;
      // dentro de uma seção (curta) abaixo do seu topo → sobe pro topo dela
      if (S > a.top + EDGE) return a.top;
      // já no topo da âncora → vai para a seção anterior
      const prev = secs[i - 1];
      return prev ? prev.top : null;
    }

    // Alvo depois que a rolagem (incluindo inércia) para.
    // null = a posição atual é um repouso válido.
    function settleTarget(S: number, dir: 1 | -1): number | null {
      const secs = geom();

      // já encaixado no topo de alguma seção
      for (const g of secs) {
        if (g.height > 0 && Math.abs(g.top - S) <= ALIGN_TOL) return null;
      }

      const i = anchorIndex(secs, S);
      const a = secs[i]!;

      // repousar lendo o miolo de uma seção alta é legítimo
      if (
        isTall(a) &&
        S >= a.top - EDGE &&
        S <= a.top + a.height - vh() + EDGE
      ) {
        return null;
      }

      // desalinhado (mostrando duas seções / transição de borda):
      // encaixa no sentido do movimento — nunca puxa para trás.
      if (dir === 1) {
        const next = secs[i + 1];
        return next && next.height > 0 ? next.top : a.top;
      }
      return a.top;
    }

    function animateTo(target: number) {
      if (isAnimating || isCooling()) return;
      const start = c.scrollTop;
      const distance = target - start;
      if (Math.abs(distance) < 2) return;

      isAnimating = true;
      const startTime = performance.now();

      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / DURATION, 1);
        c.scrollTop = start + distance * EASING(progress);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          isAnimating = false;
          cooldownUntil = performance.now() + COOLDOWN;
          prevScrollTop = c.scrollTop;
        }
      }

      requestAnimationFrame(tick);
    }

    // ── Wheel: snap magnético imediato; nativo dentro de seção alta ──────────
    function onWheel(e: WheelEvent) {
      if (Math.abs(e.deltaY) < WHEEL_MIN) return;
      const dir: 1 | -1 = e.deltaY > 0 ? 1 : -1;
      const target = gestureTarget(c.scrollTop, dir);
      if (target === null) return; // rolagem livre numa seção alta
      e.preventDefault();
      if (isAnimating || isCooling()) return;
      animateTo(target);
    }

    // ── Touch: seção curta = snap de uma seção; seção alta = nativo ──────────
    let touchStartY = 0;
    let touchDecision: "none" | "snap" | "native" = "none";

    function onTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0]?.clientY ?? 0;
      touchDecision = "none";
    }

    function onTouchMove(e: TouchEvent) {
      if (isAnimating) {
        e.preventDefault();
        return;
      }
      if (touchDecision === "snap") {
        e.preventDefault();
        return;
      }
      if (touchDecision === "native") return;

      const y = e.touches[0]?.clientY ?? 0;
      if (Math.abs(touchStartY - y) < TOUCH_MIN) return;

      const dir: 1 | -1 = touchStartY > y ? 1 : -1;
      const target = gestureTarget(c.scrollTop, dir);
      if (target !== null) {
        touchDecision = "snap";
        e.preventDefault();
        animateTo(target);
      } else {
        touchDecision = "native"; // seção alta → deixa rolar (settle limpa)
      }
    }

    // ── Settle: realinha quando a rolagem (incl. inércia) para ───────────────
    function onScroll() {
      const S = c.scrollTop;
      if (S > prevScrollTop + 0.5) lastDir = 1;
      else if (S < prevScrollTop - 0.5) lastDir = -1;
      prevScrollTop = S;

      if (settleTimer) window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => {
        if (isAnimating || isCooling()) return;
        const target = settleTarget(c.scrollTop, lastDir);
        if (target !== null) animateTo(target);
      }, SETTLE_DELAY);
    }

    c.addEventListener("wheel", onWheel, { passive: false });
    c.addEventListener("touchstart", onTouchStart, { passive: true });
    c.addEventListener("touchmove", onTouchMove, { passive: false });
    c.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      c.removeEventListener("wheel", onWheel);
      c.removeEventListener("touchstart", onTouchStart);
      c.removeEventListener("touchmove", onTouchMove);
      c.removeEventListener("scroll", onScroll);
      if (settleTimer) window.clearTimeout(settleTimer);
    };
  }, [containerId]);
}
