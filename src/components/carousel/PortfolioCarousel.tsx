import { useEffect, useMemo, useRef } from "react";
import styles from "./PortfolioCarousel.module.css";

export type CarouselCard = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
};

export type CarouselSection = {
  id: string;
  title: string;
  cards: CarouselCard[];
};

export type CarouselProps = {
  sections: CarouselSection[];
};

export function PortfolioCarousel({ sections }: CarouselProps) {
  const trackRefs = useRef(new Map<string, HTMLDivElement | null>());
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      sections.forEach((section) => {
        const track = trackRefs.current.get(section.id);
        if (!track) {
          return;
        }
        const maxScroll = track.scrollWidth - track.clientWidth;
        const nextScroll = track.scrollLeft + 1;
        track.scrollLeft = nextScroll >= maxScroll ? 0 : nextScroll;
      });
    }, 30);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion, sections]);

  function handleScroll(sectionId: string, direction: "left" | "right") {
    const track = trackRefs.current.get(sectionId);
    if (!track) {
      return;
    }
    const offset = direction === "left" ? -320 : 320;
    track.scrollBy({ left: offset, behavior: "smooth" });
  }

  return (
    <section className={styles.wrapper} id="portfolio">
      <div className={styles.container}>
        <div className={styles.portfolioHeader}>
          <span className={styles.portfolioMark} aria-hidden="true">
            ✦
          </span>
          <h2 className={styles.portfolioTitle}>portfolio</h2>
        </div>
        {sections.map((section) => (
          <div key={section.id} className={styles.section}>
            <div className={styles.header}>
              <div className={styles.headerTitle}>
                <h2 className={styles.title}>{section.title}</h2>
                <span className={styles.divider} aria-hidden="true" />
              </div>
              <div className={styles.nav}>
                <button
                  type="button"
                  className={styles.navButton}
                  onClick={() => handleScroll(section.id, "left")}
                  aria-label={`Voltar em ${section.title}`}
                >
                  ←
                </button>
                <button
                  type="button"
                  className={styles.navButton}
                  onClick={() => handleScroll(section.id, "right")}
                  aria-label={`Avançar em ${section.title}`}
                >
                  →
                </button>
              </div>
            </div>
            <div className={styles.carousel}>
              <div
                className={styles.track}
                ref={(node) => {
                  trackRefs.current.set(section.id, node);
                }}
              >
                {section.cards.map((card) => (
                  <article key={card.id} className={styles.card}>
                    <div
                      className={styles.image}
                      style={{ backgroundImage: `url(${card.image})` }}
                      aria-hidden="true"
                    />
                    <div className={styles.cardBody}>
                      <div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardSubtitle}>{card.subtitle}</p>
                      </div>
                      <span className={styles.cardArrow} aria-hidden="true">
                        →
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className={styles.dots} aria-hidden="true">
              {section.cards.map((card) => (
                <span key={card.id} className={styles.dot} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
