import styles from "./home.module.css";
import HomeBackground from "../../assets/home-background.png";

function Home() {
  return (
    <section className={styles.hero} id="portfolio">
      <img
        src={HomeBackground}
        alt="Livia Ballai pintando mural artístico"
        className={styles.hero__img}
        fetchPriority="high"
      />

      <div className={styles.hero__overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Livia Ballai</h1>
          <p className={styles.kicker}>Designer & Ilustradora</p>

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
