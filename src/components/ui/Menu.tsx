import { useState, useEffect } from "react";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoBehance,
} from "react-icons/io5";
import styles from "./Menu.module.css";

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
    <nav className={styles.nav}>
      {/* ── Barra principal ── */}
      <div className={styles.inner}>
        {/* Links desktop */}
        <div className={styles.links}>
          <div className={styles.linksPages}>
            {sections.map((sec) => (
              <button
                className={styles.linkButton}
                key={sec}
                onClick={() => scrollTo(sec)}
              >
                {sec}
              </button>
            ))}
          </div>

          <div className={styles.socials}>
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                className={styles.socialLink}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Hamburguer — aparece só no mobile */}
        <button
          className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ""}`}
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
        className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.mobilePanelInner}>
          {/* Links de navegação */}
          <div className={styles.mobileLinks}>
            {sections.map((sec) => (
              <button
                className={styles.mobileLinkButton}
                key={sec}
                onClick={() => scrollTo(sec)}
              >
                {sec}
              </button>
            ))}
          </div>

          <div className={styles.mobileDivider} />

          {/* Redes sociais */}
          <div className={styles.mobileSocials}>
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                className={styles.mobileSocialLink}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
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
