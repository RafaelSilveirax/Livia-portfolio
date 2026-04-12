type Props = {
  sectionTitle: string;
  onPrev: () => void;
  onNext: () => void;
};

function CarouselNav({ sectionTitle, onPrev, onNext }: Props) {
  return (
    <div className="flex gap-2 items-center justify-end mt-3 max-[900px]:hidden">
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Voltar em ${sectionTitle}`}
        className="w-8 h-8 rounded-full border border-[color-mix(in_srgb,var(--color-livia-navy-blue)_35%,transparent)] bg-white text-livia-navy-blue cursor-pointer font-montserrat transition-[transform,background] duration-200 hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--color-livia-turquoise)_30%,white)]"
      >
        ←
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={`Avançar em ${sectionTitle}`}
        className="w-8 h-8 rounded-full border border-[color-mix(in_srgb,var(--color-livia-navy-blue)_35%,transparent)] bg-white text-livia-navy-blue cursor-pointer font-montserrat transition-[transform,background] duration-200 hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--color-livia-turquoise)_30%,white)]"
      >
        →
      </button>
    </div>
  );
}

export default CarouselNav;
