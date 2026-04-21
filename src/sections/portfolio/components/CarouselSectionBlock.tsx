import type { RefCallback } from "react";
import type { CarouselSection } from "./PortfolioCarousel.js";
import CarouselCardItem from "./CarouselCardItem.js";
import CarouselDots from "./CarouselDots.js";
import CarouselNav from "./CarouselNav.js";

type Props = {
  section: CarouselSection;
  trackRef: RefCallback<HTMLDivElement>;
  onPause: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function CarouselSectionBlock({
  section,
  trackRef,
  onPause,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-[1.2rem_1.8rem_1.6rem] border border-[color-mix(in_srgb,var(--color-livia-turquoise)_30%,transparent)] overflow-hidden max-w-full shadow-[0_14px_30px_color-mix(in_srgb,var(--color-livia-navy-blue)_20%,transparent),inset_0_-40px_36px_-8px_color-mix(in_srgb,var(--color-livia-navy-blue)_22%,transparent)] max-[900px]:p-[1.5rem_1.3rem_1.8rem]">
      <div className="flex flex-col gap-1.5 mb-[1.3rem]">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-playfair font-bold text-[clamp(1.3rem,2vw,1.8rem)] text-livia-navy-blue">
            {section.title}
          </h3>
          <CarouselNav
            sectionTitle={section.title}
            onPrev={onPrev}
            onNext={onNext}
          />
        </div>
        <div
          className="w-full h-[3px] mt-1 rounded-full"
          style={{
            background:
              "linear-gradient(to right, #3a9dab 128px, rgba(41,65,85,0.15) 128px)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="overflow-hidden w-full bg-white">
        <div
          ref={trackRef}
          className="flex w-full min-w-0 gap-5 overflow-x-auto pb-[0.35rem] [scrollbar-width:thin] [scrollbar-color:color-mix(in_srgb,var(--color-livia-navy-blue)_40%,transparent)_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-[color-mix(in_srgb,var(--color-livia-navy-blue)_40%,transparent)] [&::-webkit-scrollbar-thumb]:rounded-full"
          style={{ scrollSnapType: "x mandatory" }}
          onPointerDown={onPause}
          onTouchStart={onPause}
          onWheel={onPause}
          onScroll={onPause}
        >
          {section.cards.map((card) => (
            <CarouselCardItem key={card.id} card={card} />
          ))}
        </div>
      </div>

      <CarouselDots count={section.cards.length} />
    </div>
  );
}

export default CarouselSectionBlock;
