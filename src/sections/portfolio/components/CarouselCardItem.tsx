import type { CarouselCard } from "./PortfolioCarousel.js";

type Props = {
  card: CarouselCard;
  cardW: number;
  onOpen: () => void;
};

const IMG_RATIO = 268 / 364;

function CarouselCardItem({ card, cardW, onOpen }: Props) {
  const imgH = Math.round(cardW * IMG_RATIO);

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className="group flex-none bg-white rounded-2xl border-[1.5px] border-[#edf2f5] overflow-hidden cursor-pointer transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-livia-turquoise"
      style={{ width: cardW }}
    >
      <img
        src={card.image}
        alt={card.title}
        loading="lazy"
        decoding="async"
        className="w-full object-cover object-center transition-transform duration-300"
        style={{ height: imgH }}
      />
      <div className="flex flex-col gap-1 px-4 py-3.5">
        <h4 className="font-serif text-[1.05rem] font-semibold text-livia-navy-blue">
          {card.title}
        </h4>
        <p className="font-sans text-xs text-livia-navy-blue/60">
          {card.subtitle}
        </p>
      </div>
    </article>
  );
}

export default CarouselCardItem;
