type Props = {
  sectionTitle: string;
  onPrev: () => void;
  onNext: () => void;
};

const ArrowLeft = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function CarouselNav({ sectionTitle, onPrev, onNext }: Props) {
  const base: React.CSSProperties = {
    width: "34px",
    height: "34px",
    borderRadius: "9999px",
    border: "1.5px solid rgba(41,65,85,0.20)",
    background: "color-mix(in srgb, #3a9dab 10%, white)",
    color: "#294155",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s, border-color 0.2s, color 0.2s",
    flexShrink: 0,
  };

  function over(e: React.MouseEvent<HTMLButtonElement>) {
    const el = e.currentTarget;
    el.style.background = "#3a9dab";
    el.style.borderColor = "#3a9dab";
    el.style.color = "#fff";
  }

  function out(e: React.MouseEvent<HTMLButtonElement>) {
    const el = e.currentTarget;
    el.style.background = "color-mix(in srgb, #3a9dab 10%, white)";
    el.style.borderColor = "rgba(41,65,85,0.20)";
    el.style.color = "#294155";
  }

  return (
    <div className="flex gap-2 items-center max-[900px]:hidden">
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Voltar em ${sectionTitle}`}
        style={base}
        onMouseEnter={over}
        onMouseLeave={out}
      >
        <ArrowLeft />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={`Avançar em ${sectionTitle}`}
        style={base}
        onMouseEnter={over}
        onMouseLeave={out}
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default CarouselNav;
