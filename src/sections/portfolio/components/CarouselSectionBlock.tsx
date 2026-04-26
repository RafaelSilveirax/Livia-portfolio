import { useState, useRef, type RefCallback } from "react";
import type { CarouselSection } from "./PortfolioCarousel.js";
import CarouselCardItem from "./CarouselCardItem.js";
import CarouselDots from "./CarouselDots.js";
import CarouselNav from "./CarouselNav.js";

const VISIBLE = 3;

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
  const [page, setPage] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(section.cards.length / VISIBLE);

  function goTo(nextPage: number) {
    const clamped = Math.max(0, Math.min(nextPage, totalPages - 1));
    setPage(clamped);
    onPause();
  }

  function handlePrev() {
    goTo(page - 1);
    onPrev();
  }

  function handleNext() {
    goTo(page + 1);
    onNext();
  }

  return (
    <div className="bg-white rounded-3xl px-8 pt-8 pb-7 shadow-[0_14px_30px_rgba(36,52,71,0.13),inset_0_-40px_36px_-8px_rgba(36,52,71,0.10)]">
      <div className="flex flex-col gap-1.5 mb-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-serif text-[22px] font-bold text-livia-navy-blue">
            {section.title}
          </h3>
          <CarouselNav
            sectionTitle={section.title}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>

        <div className="flex items-center w-full">
          <div className="w-[100px] h-[3px] rounded-full bg-livia-turquoise shrink-0" />
          <div className="flex-1 h-[3px] bg-livia-navy-blue/15" />
        </div>
      </div>

      <div ref={wrapRef} className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex gap-[18px] transition-transform duration-350 ease-in-out"
          style={{
            transform: `translateX(calc(-${page * 100}% - ${page * 18}px))`,
          }}
          onPointerDown={onPause}
          onTouchStart={onPause}
        >
          {section.cards.map((card) => (
            <CarouselCardItem key={card.id} card={card} />
          ))}
        </div>
      </div>

      <CarouselDots
        count={totalPages}
        activeIndex={page}
        onDotClick={goTo}
      />
    </div>
  );
}

export default CarouselSectionBlock;
