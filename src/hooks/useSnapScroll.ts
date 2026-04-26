import { useEffect } from "react";

const DURATION = 850;
const EASING = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

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
          setTimeout(() => { cooldown = false; }, 200);
        }
      }

      requestAnimationFrame(tick);
    }

    function topOf(id: string): number {
      const el = document.getElementById(id);
      if (!el) return 0;
      return el.getBoundingClientRect().top + container!.scrollTop;
    }

    function isContactVisible(): boolean {
      const el = document.getElementById("contact");
      if (!el) return false;
      return el.getBoundingClientRect().top <= container!.clientHeight;
    }

    function isAtPortfolioTop(): boolean {
      const el = document.getElementById("portfolio");
      if (!el) return false;
      return el.getBoundingClientRect().top >= -30;
    }

    function findTarget(direction: 1 | -1): number | null {
      const scrollTop = container!.scrollTop;

      const homeTop = topOf("home");
      const aboutTop = topOf("about");
      const portfolioTop = topOf("portfolio");
      const contactTop = topOf("contact");

      const MARGIN = 30;

      const inHome = scrollTop < aboutTop - MARGIN;
      const inAbout = scrollTop >= aboutTop - MARGIN && scrollTop < portfolioTop - MARGIN;
      const inPortfolio = scrollTop >= portfolioTop - MARGIN && scrollTop < contactTop - MARGIN;
      const inContact = scrollTop >= contactTop - MARGIN;

      if (direction === 1) {
        if (inHome) return aboutTop;
        if (inAbout) return portfolioTop;
        if (inPortfolio && isContactVisible()) return contactTop;
        return null;
      } else {
        if (inContact) return portfolioTop;
        if (inPortfolio && isAtPortfolioTop()) return aboutTop;
        if (inAbout) return homeTop;
        return null;
      }
    }

    function onWheel(e: WheelEvent) {
      if (isAnimating || cooldown) {
        e.preventDefault();
        return;
      }
      const target = findTarget(e.deltaY > 0 ? 1 : -1);
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
      const target = findTarget(dy > 0 ? 1 : -1);
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
