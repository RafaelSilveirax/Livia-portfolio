import styles from "./home.module.css";
import liviaFundo from "../../assets/backgroundmain.jpeg";

function Home() {
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

export default Home;
