import type { CarouselCard } from "./PortfolioCarousel.js";

type Props = {
  card: CarouselCard;
};

function CarouselCardItem({ card }: Props) {
  return (
    <article
      className="bg-white rounded-[18px] overflow-hidden border border-[color-mix(in_srgb,var(--color-livia-turquoise)_40%,transparent)] flex-none w-87"
      style={{ scrollSnapAlign: "start" }}
    >
      <div
        className="h-49 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${card.image})` }}
        aria-hidden="true"
      />
      <div className="flex flex-col gap-[0.15rem] px-[1.1rem] pt-4 pb-[1.2rem] font-montserrat text-livia-navy-blue">
        <h4 className="text-base font-semibold">{card.title}</h4>
        <p className="text-[0.85rem] opacity-80">{card.subtitle}</p>
      </div>
    </article>
  );
}

export default CarouselCardItem;
