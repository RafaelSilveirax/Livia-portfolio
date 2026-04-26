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

  function handleDotClick(index: number) {
    goTo(index);
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "24px",
        padding: "32px 32px 28px",
        boxShadow:
          "0 14px 30px rgba(36,52,71,0.13), inset 0 -40px 36px -8px rgba(36,52,71,0.10)",
      }}
    >
      {/* Header: title + nav */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "22px",
              color: "#294155",
            }}
          >
            {section.title}
          </h3>
          <CarouselNav
            sectionTitle={section.title}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <div
            style={{
              width: "100px",
              height: "3px",
              borderRadius: "9999px",
              background: "var(--color-livia-turquoise)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              flex: 1,
              height: "3px",
              background: "rgba(36,52,71,0.15)",
            }}
          />
        </div>
      </div>

      {/* Cards track — clipped container */}
      <div ref={wrapRef} style={{ overflow: "hidden", width: "100%" }}>
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "18px",
            transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
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
        onDotClick={handleDotClick}
      />
    </div>
  );
}

export default CarouselSectionBlock;
