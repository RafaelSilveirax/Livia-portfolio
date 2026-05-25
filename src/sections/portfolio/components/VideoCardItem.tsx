import type { VideoCard } from "./PortfolioCarousel.js";

type Props = {
  card: VideoCard;
  cardW: number;
};

const VIDEO_RATIO = 16 / 9;

function VideoCardItem({ card, cardW }: Props) {
  const mediaH = Math.round(cardW * VIDEO_RATIO);

  return (
    <article
      className="flex-none bg-white rounded-2xl border-[1.5px] border-[#edf2f5] overflow-hidden transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
      style={{ width: cardW }}
    >
      <div style={{ height: mediaH }} className="w-full bg-black">
        <lite-youtube
          videoid={card.videoId}
          playlabel={`Assistir vídeo: ${card.title}`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex flex-col gap-1 px-4 py-3.5">
        <h4 className="font-serif text-[1.05rem] font-semibold text-livia-navy-blue">
          {card.title}
        </h4>
        <p className="font-sans text-xs text-livia-navy-blue/60">
          {card.subtitle}
        </p>
      </div>
    </article>
  );
}

export default VideoCardItem;
