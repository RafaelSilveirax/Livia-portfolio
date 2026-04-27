import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { cn } from "../../../lib/utils.js";

type Props = {
  sectionTitle: string;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
};

const ARROW_BTN =
  "flex shrink-0 items-center justify-center w-[34px] h-[34px] rounded-full " +
  "border-[1.5px] transition-[background-color,border-color,color,opacity] duration-200";

function CarouselNav({ sectionTitle, onPrev, onNext, canPrev, canNext }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label={`Voltar em ${sectionTitle}`}
        className={cn(
          ARROW_BTN,
          canPrev
            ? "border-livia-navy-blue/20 bg-livia-turquoise/10 text-livia-navy-blue cursor-pointer hover:bg-livia-turquoise hover:border-livia-turquoise hover:text-white"
            : "border-livia-navy-blue/10 bg-livia-navy-blue/5 text-livia-navy-blue/25 cursor-not-allowed",
        )}
      >
        <IoChevronBack size={14} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        aria-label={`Avançar em ${sectionTitle}`}
        className={cn(
          ARROW_BTN,
          canNext
            ? "border-livia-navy-blue/20 bg-livia-turquoise/10 text-livia-navy-blue cursor-pointer hover:bg-livia-turquoise hover:border-livia-turquoise hover:text-white"
            : "border-livia-navy-blue/10 bg-livia-navy-blue/5 text-livia-navy-blue/25 cursor-not-allowed",
        )}
      >
        <IoChevronForward size={14} aria-hidden="true" />
      </button>
    </div>
  );
}

export default CarouselNav;
