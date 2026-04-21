type Props = {
  count: number;
  activeIndex: number;
  onDotClick?: (index: number) => void;
};

function CarouselDots({ count, activeIndex, onDotClick }: Props) {
  return (
    <div className="flex justify-center gap-[0.4rem] mt-5" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          onClick={() => onDotClick?.(i)}
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "9999px",
            display: "inline-block",
            cursor: onDotClick ? "pointer" : "default",
            transition: "background 0.2s, transform 0.2s",
            transform: i === activeIndex ? "scale(1.2)" : "scale(1)",
            background:
              i === activeIndex
                ? "var(--color-livia-turquoise)"
                : "color-mix(in srgb, var(--color-livia-navy-blue) 20%, transparent)",
          }}
        />
      ))}
    </div>
  );
}

export default CarouselDots;
