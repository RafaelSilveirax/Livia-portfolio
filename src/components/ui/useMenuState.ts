import { useState, useEffect } from "react";
import { scrollToSection } from "../../lib/utils.js";
import { navSections } from "./menuData.js";

const DESKTOP_BREAKPOINT = "(min-width: 821px)";

export function useMenuState() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_BREAKPOINT);

    function handleChange(e: MediaQueryListEvent) {
      if (e.matches) setIsOpen(false);
    }

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navSections.map((s) => s.id);

    function onScroll() {
      let mostVisible = sectionIds[0];
      let maxVisible = 0;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        if (visible > maxVisible) {
          maxVisible = visible;
          mostVisible = id;
        }
      }

      if (mostVisible) setActiveSection(mostVisible);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function navigateTo(section: string) {
    scrollToSection(section);
    setActiveSection(section);
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return { isOpen, scrolled, navigateTo, toggleMenu, activeSection };
}
