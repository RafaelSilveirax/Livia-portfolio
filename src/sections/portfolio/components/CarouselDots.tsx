type Props = {
  count: number;
};

function CarouselDots({ count }: Props) {
  return (
    <div className="flex justify-center gap-[0.4rem] mt-5" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="w-[9px] h-[9px] rounded-full bg-livia-turquoise"
        />
      ))}
    </div>
  );
}

export default CarouselDots;
