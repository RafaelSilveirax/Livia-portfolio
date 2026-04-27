import CarouselSectionBlock from "./CarouselSectionBlock.js";

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

type Props = {
  sections: CarouselSection[];
};

function PortfolioCarousel({ sections }: Props) {
  return (
    <section className="bg-[color-mix(in_srgb,var(--color-livia-turquoise)_18%,white)] overflow-visible py-[100px]">
      <div className="grid gap-10 w-[min(1200px,92vw)] mx-auto">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span
            className="text-livia-turquoise text-[clamp(1.4rem,2vw,1.9rem)] leading-none"
            aria-hidden="true"
          >
            ✦
          </span>
          <h2 className="text-section-title text-livia-navy-blue lowercase tracking-[0.06em]">
            portfolio
          </h2>
        </div>

        {sections.map((section) => (
          <CarouselSectionBlock key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}

export default PortfolioCarousel;
