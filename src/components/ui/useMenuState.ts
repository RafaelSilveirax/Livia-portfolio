import { useState, useEffect } from "react";

const DESKTOP_BREAKPOINT = "(min-width: 821px)";

export function useMenuState() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  function navigateTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return { isOpen, scrolled, navigateTo, toggleMenu };
}
