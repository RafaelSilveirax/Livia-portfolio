import { IoChevronBack, IoChevronForward } from "react-icons/io5";

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


function CarouselNav({ sectionTitle, onPrev, onNext }: Props) {
  return (
    <div className="flex gap-2 items-center max-lg:hidden">
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Voltar em ${sectionTitle}`}
        className={ARROW_BTN}
      >
        <IoChevronBack size={14} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={`Avançar em ${sectionTitle}`}
        className={ARROW_BTN}
      >
        <IoChevronForward size={14} aria-hidden="true" />
      </button>
    </div>
  );
}

export default CarouselNav;
