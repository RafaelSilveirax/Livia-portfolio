import { useEffect, useRef } from "react";
import CarouselSectionBlock from "./CarouselSectionBlock.js";

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

type Props = {
  sections: CarouselSection[];
};

function PortfolioCarousel({ sections }: Props) {
  const trackRefs = useRef(new Map<string, HTMLDivElement | null>());
  const pauseUntilRef = useRef(new Map<string, number>());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let intervalId: number | undefined;

    function startScroll() {
      if (intervalId !== undefined) return;
      intervalId = window.setInterval(() => {
        const now = Date.now();
        sections.forEach((section) => {
          const pausedUntil = pauseUntilRef.current.get(section.id);
          if (pausedUntil && now < pausedUntil) return;
          const track = trackRefs.current.get(section.id);
          if (!track) return;
          const maxScroll = track.scrollWidth - track.clientWidth;
          if (maxScroll <= 0) return;
          const nextScroll = track.scrollLeft + 1;
          if (nextScroll >= maxScroll) {
            track.scrollTo({ left: 0, behavior: "auto" });
          } else {
            track.scrollLeft = nextScroll;
          }
        });
      }, 30);
    }

    function stopScroll() {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }
    }

    function handleMotionChange() {
      mq.matches ? stopScroll() : startScroll();
    }

    if (!mq.matches) startScroll();
    mq.addEventListener("change", handleMotionChange);

    return () => {
      stopScroll();
      mq.removeEventListener("change", handleMotionChange);
    };
  }, [sections]);

  function handleScroll(sectionId: string, direction: "left" | "right") {
    const track = trackRefs.current.get(sectionId);
    if (!track) return;
    pauseUntilRef.current.set(sectionId, Date.now() + 2000);
    const offset = direction === "left" ? -320 : 320;
    track.scrollBy({ left: offset, behavior: "smooth" });
  }

  function pauseAutoScroll(sectionId: string) {
    pauseUntilRef.current.set(sectionId, Date.now() + 2000);
  }

  return (
    <section
      className="bg-[color-mix(in_srgb,var(--color-livia-turquoise)_18%,white)] overflow-visible"
      style={{ padding: "100px 0 100px" }}
      id="portfolio"
    >
      <div
        style={{
          width: "min(1200px, 92vw)",
          margin: "0 auto",
          display: "grid",
          gap: "40px",
        }}
      >
        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "8px",
          }}
        >
          <span
            style={{
              color: "var(--color-livia-turquoise)",
              fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            ✦
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 3vw, 3rem)",
              color: "var(--color-livia-navy-blue)",
              textTransform: "lowercase",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            portfolio
          </h2>
        </div>

        {sections.map((section) => (
          <CarouselSectionBlock
            key={section.id}
            section={section}
            trackRef={(node) => {
              trackRefs.current.set(section.id, node);
            }}
            onPause={() => pauseAutoScroll(section.id)}
            onPrev={() => handleScroll(section.id, "left")}
            onNext={() => handleScroll(section.id, "right")}
          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioCarousel;
