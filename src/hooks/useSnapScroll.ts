import { useEffect } from "react";

const DURATION = 550;
const EDGE = 8;
const ALIGN_TOL = 4;
const COOLDOWN = 150;
const SETTLE_DELAY = 120;
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

    function geom(): Geom[] {
      const top0 = c.scrollTop;
      return SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { top: 0, height: 0 };
        const r = el.getBoundingClientRect();
        return { top: r.top + top0, height: r.height };
      });
    }

    function anchorIndex(secs: Geom[], S: number): number {
      let idx = 0;
      for (let i = 0; i < secs.length; i++) {
        if (secs[i]!.height > 0 && secs[i]!.top <= S + EDGE) idx = i;
      }
      return idx;
    }

    const isTall = (g: Geom) => g.height > vh() + EDGE;

    function gestureTarget(S: number, dir: 1 | -1): number | null {
      const secs = geom();
      const i = anchorIndex(secs, S);
      const a = secs[i]!;

      if (dir === 1) {
        if (isTall(a) && a.top + a.height > S + vh() + EDGE) return null;
        const next = secs[i + 1];
        return next && next.height > 0 ? next.top : null;
      }

      if (isTall(a) && a.top < S - EDGE) return null;
      if (S > a.top + EDGE) return a.top;
      const prev = secs[i - 1];
      return prev ? prev.top : null;
    }

    function settleTarget(S: number, dir: 1 | -1): number | null {
      const secs = geom();

      for (const g of secs) {
        if (g.height > 0 && Math.abs(g.top - S) <= ALIGN_TOL) return null;
      }

      const i = anchorIndex(secs, S);
      const a = secs[i]!;

      if (
        isTall(a) &&
        S >= a.top - EDGE &&
        S <= a.top + a.height - vh() + EDGE
      ) {
        return null;
      }

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

    function onWheel(e: WheelEvent) {
      if (Math.abs(e.deltaY) < WHEEL_MIN) return;
      const dir: 1 | -1 = e.deltaY > 0 ? 1 : -1;
      const target = gestureTarget(c.scrollTop, dir);
      if (target === null) return;
      e.preventDefault();
      if (isAnimating || isCooling()) return;
      animateTo(target);
    }

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
        touchDecision = "native";
      }
    }

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
