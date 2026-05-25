import { useEffect } from "react";

const DURATION = 850;
const EDGE_TOLERANCE = 4;
const EASING = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const SECTION_IDS = ["home", "about", "portfolio", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

export function useSnapScroll(containerId: string) {
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    let isAnimating = false;
    let cooldown = false;

    function animateTo(target: number) {
      isAnimating = true;
      cooldown = true;

      const start = container!.scrollTop;
      const distance = target - start;
      const startTime = performance.now();

      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / DURATION, 1);
        container!.scrollTop = start + distance * EASING(progress);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          isAnimating = false;
          setTimeout(() => {
            cooldown = false;
          }, 200);
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
      const viewportMid = container!.clientHeight / 2;
      let active: SectionId = "home";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= viewportMid) active = id;
      }
      return active;
    }

    function shouldYieldToNative(direction: 1 | -1): boolean {
      const el = document.getElementById(currentSection());
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const viewportH = container!.clientHeight;
      if (rect.height <= viewportH + 1) return false;

      if (direction === 1) {
        return rect.bottom > viewportH + EDGE_TOLERANCE;
      }
      return rect.top < -EDGE_TOLERANCE;
    }

    function nextSectionTop(direction: 1 | -1): number | null {
      const section = currentSection();
      const idx = SECTION_IDS.indexOf(section);
      const nextIdx = idx + direction;
      if (nextIdx < 0 || nextIdx >= SECTION_IDS.length) return null;
      return topOf(SECTION_IDS[nextIdx]!);
    }

    function onWheel(e: WheelEvent) {
      const direction: 1 | -1 = e.deltaY > 0 ? 1 : -1;

      if (shouldYieldToNative(direction)) {
        return;
      }

      if (isAnimating || cooldown) {
        e.preventDefault();
        return;
      }

      const target = nextSectionTop(direction);
      if (target !== null) {
        e.preventDefault();
        animateTo(target);
      }
    }

    let touchStartY = 0;

    function onTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0]?.clientY ?? 0;
    }

    function onTouchEnd(e: TouchEvent) {
      if (isAnimating || cooldown) return;
      const dy = touchStartY - (e.changedTouches[0]?.clientY ?? 0);
      if (Math.abs(dy) < 40) return;
      const direction: 1 | -1 = dy > 0 ? 1 : -1;

      if (shouldYieldToNative(direction)) return;

      const target = nextSectionTop(direction);
      if (target !== null) animateTo(target);
    }

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [containerId]);
}
