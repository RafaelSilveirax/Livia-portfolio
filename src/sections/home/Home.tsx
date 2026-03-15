import styles from "./home.module.css";
import HomeBackground from "../../assets/home-background.png";

function Home() {
  return (
    <section
      className={styles.hero}
      id="portfolio"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(0, 0, 0, 0.6), transparent), url(${HomeBackground})`,
      }}
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

export default Home;
