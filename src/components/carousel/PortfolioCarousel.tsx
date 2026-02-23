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
  const pauseUntilRef = useRef(new Map<string, number>());
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
      const now = Date.now();
      sections.forEach((section) => {
        const pausedUntil = pauseUntilRef.current.get(section.id);
        if (pausedUntil && now < pausedUntil) {
          return;
        }
        const track = trackRefs.current.get(section.id);
        if (!track) {
          return;
        }
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (maxScroll <= 0) {
          return;
        }
        const nextScroll = track.scrollLeft + 1;
        if (nextScroll >= maxScroll) {
          track.scrollTo({ left: 0, behavior: "auto" });
        } else {
          track.scrollLeft = nextScroll;
        }
      });
    }, 30);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion, sections]);

  function handleScroll(sectionId: string, direction: "left" | "right") {
    const track = trackRefs.current.get(sectionId);
    if (!track) {
      return;
    }
    pauseUntilRef.current.set(sectionId, Date.now() + 2000);
    const offset = direction === "left" ? -320 : 320;
    track.scrollBy({ left: offset, behavior: "smooth" });
  }

  function pauseAutoScroll(sectionId: string) {
    pauseUntilRef.current.set(sectionId, Date.now() + 2000);
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
            </div>
            <div className={styles.carousel}>
              <div
                className={styles.track}
                ref={(node) => {
                  trackRefs.current.set(section.id, node);
                }}
                onPointerDown={() => pauseAutoScroll(section.id)}
                onTouchStart={() => pauseAutoScroll(section.id)}
                onWheel={() => pauseAutoScroll(section.id)}
                onScroll={() => pauseAutoScroll(section.id)}
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
        ))}
      </div>
    </section>
  );
}
