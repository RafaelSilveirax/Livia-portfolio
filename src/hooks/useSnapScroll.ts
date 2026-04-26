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

    function isContactVisible(): boolean {
      const el = document.getElementById("contact");
      if (!el) return false;
      return el.getBoundingClientRect().top <= container!.clientHeight;
    }

    function isPortfolioVisible(): boolean {
      const el = document.getElementById("portfolio");
      if (!el) return false;
      return el.getBoundingClientRect().top <= container!.clientHeight;
    }

    function isAtTop(id: string): boolean {
      const el = document.getElementById(id);
      if (!el) return false;
      return el.getBoundingClientRect().top >= -30;
    }

    function currentSection(): string {
      const ids = ["contact", "portfolio", "about", "home"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= container!.clientHeight / 2) return id;
      }
      return "home";
    }

    function findTarget(direction: 1 | -1): number | null {
      const homeTop = topOf("home");
      const aboutTop = topOf("about");
      const portfolioTop = topOf("portfolio");
      const contactTop = topOf("contact");

      const section = currentSection();

      if (direction === 1) {
        if (section === "home") return aboutTop;
        if (section === "about" && isPortfolioVisible()) return portfolioTop;
        if (section === "portfolio" && isContactVisible()) return contactTop;
        return null;
      } else {
        if (section === "contact" && isAtTop("contact")) return portfolioTop;
        if (section === "portfolio" && isAtTop("portfolio")) return aboutTop;
        if (section === "about" && isAtTop("about")) return homeTop;
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
