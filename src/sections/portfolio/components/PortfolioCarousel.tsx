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
      className="bg-[color-mix(in_srgb,var(--color-livia-turquoise)_18%,white)] py-14 pb-18 overflow-visible"
      id="portfolio"
    >
      <div className="w-[min(1200px,100%)] mx-auto px-6 grid gap-10 overflow-visible">
        <div className="flex items-center justify-center gap-3 mb-[0.2rem]">
          <span
            className="text-livia-turquoise text-[clamp(1.6rem,2.5vw,2.2rem)]"
            aria-hidden="true"
          >
            ✦
          </span>
          <h2 className="font-playfair font-bold text-[clamp(2rem,3vw,3rem)] text-livia-navy-blue lowercase tracking-[0.06em]">
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
