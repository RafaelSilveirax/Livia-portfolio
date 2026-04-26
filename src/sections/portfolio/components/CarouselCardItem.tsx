import type { CarouselCard } from "./PortfolioCarousel.js";

type Props = {
  card: CarouselCard;
};

function CarouselCardItem({ card }: Props) {
  return (
    <article className="group flex-[0_0_calc(33.333%-12px)] bg-white rounded-2xl border-[1.5px] border-[#edf2f5] overflow-hidden cursor-pointer transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]">
      <div
        className="w-full aspect-4/3 bg-cover bg-center bg-no-repeat overflow-hidden transition-transform duration-300"
        style={{ backgroundImage: `url(${card.image})` }}
        aria-hidden="true"
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
