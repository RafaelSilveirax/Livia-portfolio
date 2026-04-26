import { cn } from "../../../lib/utils.js";

type Props = {
  count: number;
  activeIndex: number;
  onDotClick?: (index: number) => void;
};

function CarouselDots({ count, activeIndex, onDotClick }: Props) {
  return (
    <div className="flex justify-center gap-1.5 mt-5" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          onClick={() => onDotClick?.(i)}
          className={cn(
            "inline-block w-[7px] h-[7px] rounded-full transition-[background-color,transform] duration-200",
            onDotClick ? "cursor-pointer" : "cursor-default",
            i === activeIndex
              ? "bg-livia-turquoise scale-120"
              : "bg-livia-navy-blue/20",
          )}
        />
      ))}
    </div>
  );
}

export default CarouselDots;
