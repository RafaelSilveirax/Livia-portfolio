import { useState, useRef, useEffect } from "react";
import type { CarouselSection } from "./PortfolioCarousel.js";
import CarouselCardItem from "./CarouselCardItem.js";
import CarouselDots from "./CarouselDots.js";
import CarouselNav from "./CarouselNav.js";

const CARD_W_LG = 364;
const CARD_W_SM = 324;
const GAP = 18;
const SM_BP = 600;
const PADDING = 64;

function getCardW(vw: number) {
  return vw < SM_BP ? CARD_W_SM : CARD_W_LG;
}

function calcVisible(containerW: number, cardW: number) {
  return Math.max(1, Math.min(3, Math.floor((containerW + GAP) / (cardW + GAP))));
}

type Props = {
  section: CarouselSection;
};

function CarouselSectionBlock({ section }: Props) {
  const [page, setPage] = useState(0);
  const trackWrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(1);
  const [cardW, setCardW] = useState(CARD_W_LG);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const containerW = (vw >= 1200 ? 1200 : vw * 0.92) - PADDING;
      const cw = getCardW(vw);
      setCardW(cw);
      setVisible(calcVisible(containerW, cw));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => { setPage(0); }, [visible]);

  const totalPages = Math.ceil(section.cards.length / visible);

  function goTo(nextPage: number) {
    setPage(Math.max(0, Math.min(nextPage, totalPages - 1)));
  }

  const slideW = cardW + GAP;
  const trackW = section.cards.length * cardW + (section.cards.length - 1) * GAP;
  const windowW = visible * cardW + (visible - 1) * GAP;
  const maxOffset = Math.max(0, trackW - windowW);
  const offset = Math.min(page * visible * slideW, maxOffset);

  return (
    <div className="bg-white rounded-3xl px-8 pt-8 pb-7 w-full shadow-[0_14px_30px_rgba(36,52,71,0.13),inset_0_-40px_36px_-8px_rgba(36,52,71,0.10)]">
      <div className="flex flex-col gap-1.5 mb-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-serif text-[22px] font-bold text-livia-navy-blue">
            {section.title}
          </h3>
          <CarouselNav
            sectionTitle={section.title}
            onPrev={() => goTo(page - 1)}
            onNext={() => goTo(page + 1)}
            canPrev={page > 0}
            canNext={page < totalPages - 1}
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-[100px] h-[3px] rounded-full bg-livia-turquoise shrink-0" />
          <div className="flex-1 h-[3px] bg-livia-navy-blue/15" />
        </div>
      </div>

      <div
        ref={trackWrapRef}
        className="overflow-hidden mx-auto"
        style={{ width: windowW }}
      >
        <div
          className="flex gap-[18px] transition-transform duration-350 ease-in-out"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {section.cards.map((card) => (
            <CarouselCardItem key={card.id} card={card} />
          ))}
        </div>
      </div>

      <CarouselDots count={totalPages} activeIndex={page} onDotClick={goTo} />
    </div>
  );
}

export default CarouselSectionBlock;
