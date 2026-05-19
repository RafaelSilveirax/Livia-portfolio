import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import { useImageLoader } from "../hooks/useImageLoader.js";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock.js";
import IconButton from "./IconButton.js";
import type { CarouselCard } from "./PortfolioCarousel.js";

type Props = {
  cards: CarouselCard[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

function PortfolioModal({ cards, index, onClose, onNavigate }: Props) {
  const card = index !== null ? cards[index] ?? null : null;
  const loaded = useImageLoader(card?.image ?? null);

  const isOpen = card !== null && loaded !== null;
  const canPrev = index !== null && index > 0;
  const canNext = index !== null && index < cards.length - 1;

  const goPrev = () => canPrev && onNavigate(index! - 1);
  const goNext = () => canNext && onNavigate(index! + 1);

  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && canPrev) onNavigate(index! - 1);
      else if (e.key === "ArrowRight" && canNext) onNavigate(index! + 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, canPrev, canNext, index, onClose, onNavigate]);

  if (!isOpen) return null;

  const displayCard = cards.find((c) => c.image === loaded.src) ?? card;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={displayCard.title}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-livia-navy-blue/70 backdrop-blur-sm animate-[fadeIn_0.18s_ease-out] p-4"
      onClick={onClose}
    >
      <IconButton
        label="Item anterior"
        disabled={!canPrev}
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="max-lg:hidden absolute left-4 top-1/2 -translate-y-1/2 z-10"
      >
        <IoChevronBack size={18} aria-hidden="true" />
      </IconButton>

      <IconButton
        label="Próximo item"
        disabled={!canNext}
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="max-lg:hidden absolute right-4 top-1/2 -translate-y-1/2 z-10"
      >
        <IoChevronForward size={18} aria-hidden="true" />
      </IconButton>

      <article
        className="bg-white rounded-2xl border-[1.5px] border-[#edf2f5] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          label="Fechar"
          size="sm"
          onClick={onClose}
          className="absolute top-3 right-3 z-10"
        >
          <IoClose size={18} aria-hidden="true" />
        </IconButton>

        <img
          src={loaded.src}
          alt={displayCard.title}
          className="block bg-[#f5f7f9] max-w-[85vw] max-h-[calc(90vh-80px)] w-auto h-auto"
          style={{ aspectRatio: loaded.ratio }}
        />

        <div className="flex items-center gap-3 px-5 py-4 shrink-0">
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <h4 className="font-serif text-[1.15rem] font-semibold text-livia-navy-blue">
              {displayCard.title}
            </h4>
            <p className="font-sans text-xs text-livia-navy-blue/60">
              {displayCard.subtitle}
            </p>
          </div>

          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <IconButton
              label="Item anterior"
              size="sm"
              disabled={!canPrev}
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
            >
              <IoChevronBack size={16} aria-hidden="true" />
            </IconButton>
            <IconButton
              label="Próximo item"
              size="sm"
              disabled={!canNext}
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
            >
              <IoChevronForward size={16} aria-hidden="true" />
            </IconButton>
          </div>
        </div>
      </article>
    </div>,
    document.body,
  );
}

export default PortfolioModal;
