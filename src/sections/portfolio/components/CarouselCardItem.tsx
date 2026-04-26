import type { CarouselCard } from "./PortfolioCarousel.js";

type Props = {
  card: CarouselCard;
};

function CarouselCardItem({ card }: Props) {
  return (
    <article
      className="bg-white overflow-hidden group"
      style={{
        flex: "0 0 calc(33.333% - 12px)",
        borderRadius: "16px",
        border: "1.5px solid #edf2f5",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 10px 28px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "4/3",
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          transition: "transform 0.3s",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          padding: "14px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <h4
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "var(--color-livia-navy-blue)",
          }}
        >
          {card.title}
        </h4>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.75rem",
            color: "var(--color-livia-navy-blue)",
            opacity: 0.6,
          }}
        >
          {card.subtitle}
        </p>
      </div>
    </article>
  );
}

export default CarouselCardItem;
