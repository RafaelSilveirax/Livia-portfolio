import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { CarouselCard } from "./PortfolioCarousel.js";

type Props = {
  card: CarouselCard | null;
  onClose: () => void;
};

function PortfolioModal({ card, onClose }: Props) {
  const [ratio, setRatio] = useState<number | null>(null);

  useEffect(() => {
    if (!card) {
      setRatio(null);
      return;
    }
    const img = new Image();
    img.onload = () => setRatio(img.naturalWidth / img.naturalHeight);
    img.src = card.image;
  }, [card]);

  useEffect(() => {
    if (!card) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    const mainEl = document.querySelector("main");
    const prevMainOverflow = mainEl?.style.overflow ?? "";
    const prevBodyOverflow = document.body.style.overflow;
    if (mainEl) mainEl.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      if (mainEl) mainEl.style.overflow = prevMainOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [card, onClose]);

  if (!card) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={card.title}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-livia-navy-blue/70 backdrop-blur-sm animate-[fadeIn_0.18s_ease-out] p-4"
      onClick={onClose}
    >
      <article
        className="bg-white rounded-2xl border-[1.5px] border-[#edf2f5] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] relative flex flex-col"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-livia-navy-blue hover:bg-white transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <img
          src={card.image}
          alt={card.title}
          className="block bg-[#f5f7f9]"
          style={{
            maxWidth: "85vw",
            maxHeight: "calc(90vh - 80px)",
            width: "auto",
            height: "auto",
            aspectRatio: ratio ?? undefined,
          }}
        />

        <div className="flex flex-col gap-1 px-5 py-4 shrink-0">
          <h4 className="font-serif text-[1.15rem] font-semibold text-livia-navy-blue">
            {card.title}
          </h4>
          <p className="font-sans text-xs text-livia-navy-blue/60">
            {card.subtitle}
          </p>
        </div>
      </article>
    </div>,
    document.body,
  );
}

export default PortfolioModal;
