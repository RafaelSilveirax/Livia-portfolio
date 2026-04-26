type Props = {
  sectionTitle: string;
  onPrev: () => void;
  onNext: () => void;
};

const ARROW_BTN =
  "flex shrink-0 items-center justify-center w-[34px] h-[34px] rounded-full " +
  "border-[1.5px] border-livia-navy-blue/20 bg-livia-turquoise/10 text-livia-navy-blue " +
  "cursor-pointer transition-[background-color,border-color,color] duration-200 " +
  "hover:bg-livia-turquoise hover:border-livia-turquoise hover:text-white";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  const points = direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6";
  return (
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
      <polyline points={points} />
    </svg>
  );
}

function CarouselNav({ sectionTitle, onPrev, onNext }: Props) {
  return (
    <div className="flex gap-2 items-center max-lg:hidden">
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Voltar em ${sectionTitle}`}
        className={ARROW_BTN}
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={`Avançar em ${sectionTitle}`}
        className={ARROW_BTN}
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}

export default CarouselNav;
