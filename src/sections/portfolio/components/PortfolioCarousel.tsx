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

const PAUSE_MS = 2000;
const SCROLL_STEP_PX = 320;

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
    pauseUntilRef.current.set(sectionId, Date.now() + PAUSE_MS);
    const offset = direction === "left" ? -SCROLL_STEP_PX : SCROLL_STEP_PX;
    track.scrollBy({ left: offset, behavior: "smooth" });
  }

  function pauseAutoScroll(sectionId: string) {
    pauseUntilRef.current.set(sectionId, Date.now() + PAUSE_MS);
  }

  return (
    <section className="bg-[color-mix(in_srgb,var(--color-livia-turquoise)_18%,white)] overflow-visible py-[100px]">
      <div className="grid gap-10 w-[min(1200px,92vw)] mx-auto">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span
            className="text-livia-turquoise text-[clamp(1.4rem,2vw,1.9rem)] leading-none"
            aria-hidden="true"
          >
            ✦
          </span>
          <h2 className="text-section-title text-livia-navy-blue lowercase tracking-[0.06em]">
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
