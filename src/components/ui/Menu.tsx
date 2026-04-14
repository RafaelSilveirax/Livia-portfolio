import { cn } from "../../lib/utils.js";
import { useMenuState } from "./useMenuState.js";
import NavLinks from "./NavLinks.js";
import SocialLinks from "./SocialLinks.js";
import MobileMenu from "./MobileMenu.js";

function Menu() {
  const { isOpen, scrolled, navigateTo, toggleMenu } = useMenuState();

  return (
    <nav className="fixed top-0 w-full z-50 max-[820px]:pt-0">
      <div
        className={cn(
          "absolute inset-0 glass-nav max-[820px]:glass-nav shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-opacity duration-500",
          !isOpen && "max-[820px]:hidden",
        )}
        style={{ opacity: scrolled && !isOpen ? 0 : 1 }}
      />

      <div
        className={cn(
          "relative max-w-[1200px] mx-auto px-4 flex items-center justify-end transition-all duration-500 max-[820px]:py-3 max-[820px]:px-4",
          scrolled ? "pt-9 py-4" : "pt-0 py-0",
        )}
      >
        <div className="flex w-full gap-4 font-montserrat text-white max-[820px]:hidden">
          <NavLinks onNavigate={navigateTo} scrolled={scrolled} />
          <SocialLinks
            className={cn(
              "flex items-center gap-12 px-8 h-[54px] transition-all duration-500",
              scrolled && "glass-nav shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-lg",
            )}
            linkClassName="text-white transition-colors duration-200 flex items-center hover:text-livia-turquoise"
          />
        </div>

        <button
          className={cn(
            "hidden max-[820px]:flex glass-mobile border border-white/30 rounded-lg p-[10px_11px] cursor-pointer text-white flex-col gap-[5px] items-center justify-center menu-btn",
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
