import styles from "./AboutSection.module.css";

const highlights = [
  "Designer & ilustradora",
  "Graduanda em Artes Visuais – UFF",
  "Foco em ilustração, concept art e design visual",
  "Experiência em projetos autorais e comerciais",
];

export function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.divider} aria-hidden="true" />
          <ul className={styles.list}>
            {highlights.map((item) => (
              <li key={item} className={styles.listItem}>
                <span className={styles.icon} aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12.5L9.2 16.5L19 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={styles.description}>
            Apaixonada por narrativa visual, personagens e composição. Busco
            criar imagens expressivas que conectam estética, conceito e emoção.
          </p>
        </div>
        <div className={styles.card} aria-hidden="true">
          <div className={styles.cardGlow} />
        </div>
      </div>
    </section>
  );
}
