import { useState, useEffect } from "react";
import { cn } from "../../lib/utils.js";
import NavLinks from "./NavLinks.js";
import SocialLinks from "./SocialLinks.js";
import MobileMenu from "./MobileMenu.js";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 821px)");

    function handleChange(e: MediaQueryListEvent) {
      if (e.matches) setIsOpen(false);
    }

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  function scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }

  return (
    <nav className="fixed top-0 w-full z-50 pt-5 max-[820px]:pt-0">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-end max-[820px]:p-0">
        <div className="flex w-full gap-4 font-montserrat text-white max-[820px]:hidden">
          <NavLinks onNavigate={scrollTo} />
          <SocialLinks
            className="glass-nav border-b border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-lg flex items-center gap-12 h-[54px] px-8"
            linkClassName="text-white transition-colors duration-200 flex items-center hover:text-livia-turquoise"
          />
        </div>

        <button
          className={cn(
            "hidden max-[820px]:flex glass-nav border border-white/30 rounded-lg p-[10px_11px] cursor-pointer text-white flex-col gap-[5px] items-center justify-center menu-btn",
            isOpen && "menu-btn-open"
          )}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onNavigate={scrollTo} />
    </nav>
  );
}

export default Menu;
