import { useState, useEffect } from "react";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoBehance,
} from "react-icons/io5";
import { cn } from "../../lib/utils.js";

const sections = ["home", "about", "portfolio", "contact"];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/l%C3%ADvia-ballai-9b650b1a2/",
    icon: <IoLogoLinkedin size={24} />,
    label: "LinkedIn",
  },
  {
    href: "https://www.behance.net/liviaballaf10d",
    icon: <IoLogoBehance size={24} />,
    label: "Behance",
  },
  {
    href: "https://www.instagram.com/livia_zab/",
    icon: <IoLogoInstagram size={24} />,
    label: "Instagram",
  },
];

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
      {/* ── Barra principal ── */}
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-end max-[820px]:p-0">
        {/* Links desktop */}
        <div className="flex w-full gap-4 font-montserrat text-white max-[820px]:hidden">
          <div className="glass-nav border-b border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-lg flex w-full justify-around items-center h-[54px] px-8">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={(e) => { e.preventDefault(); scrollTo(sec); }}
                className="text-white text-sm transition-colors duration-200 font-semibold uppercase tracking-[0.05em] hover:text-livia-turquoise"
              >
                {sec}
              </a>
            ))}
          </div>

          <div className="glass-nav border-b border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-lg flex items-center gap-12 h-[54px] px-8">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white transition-colors duration-200 flex items-center hover:text-livia-turquoise"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Hamburguer — aparece só no mobile */}
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

      {/* ── Painel mobile ── */}
      <div
        id="mobile-menu"
        className={cn(
          "absolute top-full left-0 right-0 transition-[transform,opacity] duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
        aria-hidden={!isOpen}
      >
        <div className="mx-6 mt-2 mb-4 px-6 py-5 flex flex-col gap-5 glass-mobile border border-white/12 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
          {/* Links de navegação */}
          <div className="flex flex-col gap-1">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={(e) => { e.preventDefault(); scrollTo(sec); }}
                className="border-b border-white/8 last:border-b-0 text-white font-montserrat text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-left py-[0.65rem] transition-[color,opacity] duration-200 hover:text-livia-turquoise hover:opacity-90"
              >
                {sec}
              </a>
            ))}
          </div>

          <div className="h-px bg-white/10" />

          {/* Redes sociais */}
          <div className="flex gap-5 items-center">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/75 transition-colors duration-200 flex items-center hover:text-livia-turquoise"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
