import { useEffect } from "react";

const DURATION = 550;
const EDGE_TOLERANCE = 12;
const COOLDOWN = 150;

const EASING = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const SECTION_IDS = ["home", "about", "portfolio", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

export function useSnapScroll(containerId: string) {
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    let isAnimating = false;
    let cooldownUntil = 0;

    function isCooling() {
      return performance.now() < cooldownUntil;
    }

    function animateTo(target: number) {
      if (isAnimating || isCooling()) return;
      const start = container!.scrollTop;
      const distance = target - start;
      if (Math.abs(distance) < 2) return;

      isAnimating = true;
      const startTime = performance.now();

      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / DURATION, 1);
        container!.scrollTop = start + distance * EASING(progress);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          isAnimating = false;
          cooldownUntil = performance.now() + COOLDOWN;
        }
      }

      requestAnimationFrame(tick);
    }

    function topOf(id: string): number {
      const el = document.getElementById(id);
      if (!el) return 0;
      return el.getBoundingClientRect().top + container!.scrollTop;
    }

    function currentSection(): SectionId {
      const mid = container!.scrollTop + container!.clientHeight / 2;
      let best: SectionId = "home";
      for (const id of SECTION_IDS) {
        if (topOf(id) <= mid) best = id;
      }
      return best;
    }

    function shouldYieldToNative(direction: 1 | -1): boolean {
      const el = document.getElementById(currentSection());
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const vh = container!.clientHeight;
      if (rect.height <= vh + EDGE_TOLERANCE) return false;
      return direction === 1
        ? rect.bottom > vh + EDGE_TOLERANCE
        : rect.top < -EDGE_TOLERANCE;
    }

    function nextTop(direction: 1 | -1): number | null {
      const idx = SECTION_IDS.indexOf(currentSection());
      const next = idx + direction;
      if (next < 0 || next >= SECTION_IDS.length) return null;
      return topOf(SECTION_IDS[next]!);
    }

    // ── Wheel ──────────────────────────────────────────────────────────────────

    function onWheel(e: WheelEvent) {
      const dir: 1 | -1 = e.deltaY > 0 ? 1 : -1;

      if (shouldYieldToNative(dir)) return;

      e.preventDefault();

      if (isAnimating || isCooling()) return;
      if (Math.abs(e.deltaY) < 2) return;

      const target = nextTop(dir);
      if (target !== null) animateTo(target);
    }

    // ── Touch ──────────────────────────────────────────────────────────────────

    let touchStartY = 0;
    let touchLastY = 0;
    let touchLocked: "none" | "native" | "snap" = "none";

    function onTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0]?.clientY ?? 0;
      touchLastY = touchStartY;
      touchLocked = "none";
    }

    function onTouchMove(e: TouchEvent) {
      const y = e.touches[0]?.clientY ?? 0;
      touchLastY = y;

      if (isAnimating) {
        e.preventDefault();
        return;
      }

      if (touchLocked === "snap") {
        e.preventDefault();
        return;
      }

      if (touchLocked === "none" && Math.abs(touchStartY - y) >= 10) {
        const dir: 1 | -1 = touchStartY > y ? 1 : -1;
        touchLocked = shouldYieldToNative(dir) ? "native" : "snap";
        if (touchLocked === "snap") e.preventDefault();
      }
    }

    function onTouchEnd() {
      if (isAnimating || isCooling()) return;

      const dy = touchStartY - touchLastY;
      if (Math.abs(dy) < 40) return;

      const dir: 1 | -1 = dy > 0 ? 1 : -1;
      if (touchLocked === "native" && shouldYieldToNative(dir)) return;

      const target = nextTop(dir);
      if (target !== null) animateTo(target);
    }

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [containerId]);
}
