import type { CarouselCard } from "./PortfolioCarousel.js";

type Props = {
  card: CarouselCard;
};

function CarouselCardItem({ card }: Props) {
  return (
    <article
      className="bg-white rounded-[18px] overflow-hidden border border-[color-mix(in_srgb,var(--color-livia-turquoise)_40%,transparent)] flex-none w-87 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_5px_color-mix(in_srgb,var(--color-livia-navy-blue)_25%,transparent)] group"
      style={{ scrollSnapAlign: "start" }}
    >
      <div
        className="h-49 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${card.image})` }}
        aria-hidden="true"
      />
      <div className="flex flex-col gap-[0.15rem] px-[1.1rem] pt-4 pb-[1.2rem] text-livia-navy-blue">
        <h4 className="font-playfair text-[1.1rem] font-semibold">
          {card.title}
        </h4>
        <p className="font-montserrat text-[0.85rem] opacity-70">
          {card.subtitle}
        </p>
      </div>
    </article>
  );
}

export default CarouselCardItem;
