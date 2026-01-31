import styles from "./HeroSection.module.css";
import liviaFundo from "../../assets/liviafundo.png";

export function HeroSection() {
  return (
    <section
      className={styles.hero}
      id="portfolio"
      style={{ backgroundImage: `url(${liviaFundo})` }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.kicker}>Designer & Ilustradora</p>
          <h1 className={styles.title}>Livia Ballai</h1>
          <p className={styles.subtitle}>
            Visual Arts • Illustration • Character Design
          </p>
          <button className={styles.cta}>Ver Portfólio</button>
        </div>
      </div>
    </section>
  );
}
