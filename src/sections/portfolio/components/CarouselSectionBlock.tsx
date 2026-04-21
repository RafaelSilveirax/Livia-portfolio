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
    <div
      className="bg-white rounded-3xl overflow-hidden max-w-full"
      style={{
        padding: "1.4rem 1.8rem 1.6rem",
        border: "1px solid color-mix(in srgb, #3a9dab 30%, transparent)",
        boxShadow:
          "0 14px 30px color-mix(in srgb, #294155 15%, transparent), inset 0 -40px 36px -8px rgba(41,65,85,0.10)",
      }}
    >
      {/* Header: title + nav */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginBottom: "1.2rem",
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
              fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
              color: "#294155",
            }}
          >
            {section.title}
          </h3>
          <CarouselNav
            sectionTitle={section.title}
            onPrev={onPrev}
            onNext={onNext}
          />
        </div>
        {/* Divider: teal + gray */}
        <div
          style={{
            width: "100%",
            height: "3px",
            borderRadius: "9999px",
            background:
              "linear-gradient(to right, #3a9dab 128px, rgba(41,65,85,0.15) 128px)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Cards track */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          ref={trackRef}
          className="[scrollbar-width:thin] [scrollbar-color:rgba(41,65,85,0.3)_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-[rgba(41,65,85,0.3)] [&::-webkit-scrollbar-thumb]:rounded-full"
          style={{
            display: "flex",
            gap: "18px",
            overflowX: "auto",
            paddingBottom: "0.3rem",
            scrollSnapType: "x mandatory",
          }}
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
