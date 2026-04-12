import { useEffect, useRef } from "react";


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

function PortfolioCarousel({ sections }: CarouselProps) {
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
    <section className="bg-livia-navy-blue py-14 pb-[4.5rem] overflow-visible" id="portfolio">
      <div className="w-[min(1200px,100%)] mx-auto px-6 grid gap-10 overflow-visible">
        {/* Header do portfolio */}
        <div className="flex items-center justify-center gap-[0.4rem] text-livia-turquoise font-montserrat lowercase tracking-[0.08em] mb-[0.2rem]">
          <span className="text-[0.9rem]" aria-hidden="true">✦</span>
          <h2 className="text-[clamp(1.3rem,2.2vw,1.9rem)]">portfolio</h2>
        </div>

        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-[24px] p-[1.2rem_1.8rem_1.6rem] border border-[color-mix(in_srgb,var(--color-livia-turquoise)_30%,transparent)] overflow-hidden max-w-full shadow-[0_14px_30px_color-mix(in_srgb,var(--color-livia-navy-blue)_20%,transparent),inset_0_-28px_28px_color-mix(in_srgb,var(--color-livia-navy-blue)_18%,transparent)] max-[900px]:p-[1.5rem_1.3rem_1.8rem]"
          >
            {/* Header da seção */}
            <div className="flex items-start justify-between gap-6 mb-[1.3rem]">
              <div className="flex flex-col gap-2 w-full">
                <h3 className="font-playfair text-[clamp(1.55rem,2.4vw,2.4rem)] text-livia-navy-blue">
                  {section.title}
                </h3>
                {/* Divisor */}
                <span
                  className="flex items-center w-full before:content-[''] before:w-32 before:h-[3px] before:rounded-full before:bg-livia-turquoise after:content-[''] after:h-[3px] after:flex-1 after:bg-[color-mix(in_srgb,var(--color-livia-navy-blue)_18%,transparent)]"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Carrossel */}
            <div className="overflow-hidden w-full bg-white">
              <div
                ref={(node) => { trackRefs.current.set(section.id, node); }}
                className="flex w-full min-w-0 gap-5 overflow-x-auto scroll-snap-x-mandatory pb-[0.35rem] scrollbar-thin scrollbar-color-[color-mix(in_srgb,var(--color-livia-navy-blue)_40%,transparent)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-thumb]:bg-[color-mix(in_srgb,var(--color-livia-navy-blue)_40%,transparent)] [&::-webkit-scrollbar-thumb]:rounded-full"
                style={{ scrollSnapType: "x mandatory" }}
                onPointerDown={() => pauseAutoScroll(section.id)}
                onTouchStart={() => pauseAutoScroll(section.id)}
                onWheel={() => pauseAutoScroll(section.id)}
                onScroll={() => pauseAutoScroll(section.id)}
              >
                {section.cards.map((card) => (
                  <article
                    key={card.id}
                    className="bg-white rounded-[18px] overflow-hidden border border-[color-mix(in_srgb,var(--color-livia-turquoise)_40%,transparent)] flex-none w-[348px] scroll-snap-start"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div
                      className="h-[196px] bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${card.image})` }}
                      aria-hidden="true"
                    />
                    <div className="flex flex-col gap-[0.15rem] px-[1.1rem] pt-4 pb-[1.2rem] font-montserrat text-livia-navy-blue">
                      <h4 className="text-base font-semibold">{card.title}</h4>
                      <p className="text-[0.85rem] opacity-80">{card.subtitle}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-[0.4rem] mt-5" aria-hidden="true">
              {section.cards.map((card) => (
                <span
                  key={card.id}
                  className="w-[9px] h-[9px] rounded-full bg-livia-turquoise"
                />
              ))}
            </div>

            {/* Nav buttons */}
            <div className="flex gap-2 items-center justify-end mt-3 max-[900px]:hidden">
              <button
                type="button"
                onClick={() => handleScroll(section.id, "left")}
                aria-label={`Voltar em ${section.title}`}
                className="w-8 h-8 rounded-full border border-[color-mix(in_srgb,var(--color-livia-navy-blue)_35%,transparent)] bg-white text-livia-navy-blue cursor-pointer font-montserrat transition-[transform,background] duration-200 hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--color-livia-turquoise)_30%,white)]"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => handleScroll(section.id, "right")}
                aria-label={`Avançar em ${section.title}`}
                className="w-8 h-8 rounded-full border border-[color-mix(in_srgb,var(--color-livia-navy-blue)_35%,transparent)] bg-white text-livia-navy-blue cursor-pointer font-montserrat transition-[transform,background] duration-200 hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--color-livia-turquoise)_30%,white)]"
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

export default PortfolioCarousel;
