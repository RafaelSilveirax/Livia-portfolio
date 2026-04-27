import { cn } from "../../lib/utils.js";
import { useMenuState } from "./useMenuState.js";
import NavLinks from "./NavLinks.js";
import SocialLinks from "./SocialLinks.js";
import MobileMenu from "./MobileMenu.js";

const SOCIAL_LINK_CLASS =
  "flex items-center text-white transition-colors duration-200 hover:text-livia-turquoise";

function Menu() {
  const { isOpen, scrolled, navigateTo, toggleMenu, activeSection } =
    useMenuState();

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div
        className={cn(
          "absolute inset-0 glass-nav shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-opacity duration-500",
          !isOpen && "max-nav:hidden",
        )}
        style={{ opacity: scrolled && !isOpen ? 0 : 1 }}
      />

      <div
        className={cn(
          "relative mx-auto flex items-center justify-end max-w-page px-4 transition-all duration-500",
          "max-nav:py-3",
          scrolled ? "py-4 pt-5" : "py-0",
        )}
      >
        <div className="flex w-full gap-4 font-sans text-white max-nav:hidden">
          <NavLinks
            onNavigate={navigateTo}
            scrolled={scrolled}
            activeSection={activeSection}
          />
          <SocialLinks
            className={cn(
              "flex items-center gap-12 h-[54px] px-8 transition-all duration-500",
              scrolled &&
                "glass-nav rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.15)]",
            )}
            linkClassName={SOCIAL_LINK_CLASS}
          />
        </div>

        <button
          type="button"
          className={cn(
            "menu-btn glass-mobile hidden max-nav:flex flex-col items-center justify-center gap-[5px]",
            "border border-white/30 rounded-lg p-[10px_11px] cursor-pointer text-white",
            isOpen && "menu-btn-open",
          )}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onNavigate={navigateTo} />
    </nav>
  );
}

export default Menu;
