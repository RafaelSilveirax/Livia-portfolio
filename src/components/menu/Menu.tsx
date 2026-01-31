import { useState } from "react";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import logoBalai from "../../assets/logo-balai.png";
import styles from "./Menu.module.css";

const sections = ["about", "portfolio", "contact"];
export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <img src={logoBalai} alt="Logo Livia" className={styles.logo} />

        <div className={styles.links}>
          {sections.map((sec) => (
            <button
              className={styles.linkButton}
              key={sec}
              onClick={() => scrollTo(sec)}
            >
              {sec}
            </button>
          ))}
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/l%C3%ADvia-ballai-9b650b1a2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin className="text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/livia_zab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IoLogoInstagram className="text-4xl" />
            </a>
          </div>
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ""}`}
      >
        <div className={styles.mobileLinks}>
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
          <a
            href="https://www.linkedin.com/in/l%C3%ADvia-ballai-9b650b1a2/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin className="text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/livia_zab/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <IoLogoInstagram className="text-4xl" />
          </a>
        </div>
      </div>
    </nav>
  );
}
