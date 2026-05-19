import { useEffect, useRef } from "react";
import BgJpg1080 from "../../../assets/background_livia-1080w.jpg";
import BgJpg1920 from "../../../assets/background_livia-1920w.jpg";
import BgJpg3440 from "../../../assets/background_livia-3440w.jpg";
import BgWebp1080 from "../../../assets/background_livia-1080w.webp";
import BgWebp1920 from "../../../assets/background_livia-1920w.webp";
import BgWebp3440 from "../../../assets/background_livia-3440w.webp";

function HeroBackground() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    function handleScroll() {
      if (!imgRef.current || !container) return;
      const scrollY = container.scrollTop;
      if (scrollY < window.innerHeight) {
        imgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    }

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${BgWebp1080} 1080w, ${BgWebp1920} 1920w, ${BgWebp3440} 3440w`}
        sizes="100vw"
      />
      <source
        type="image/jpeg"
        srcSet={`${BgJpg1080} 1080w, ${BgJpg1920} 1920w, ${BgJpg3440} 3440w`}
        sizes="100vw"
      />
      <img
        ref={imgRef}
        src={BgJpg1920}
        alt="Livia Ballai pintando mural artístico"
        width={1920}
        height={1080}
        className="absolute inset-0 z-0 w-full h-full object-cover object-[center_35%] will-change-transform max-md:object-[60%_25%] min-[2000px]:object-[center_20%]"
        fetchPriority="high"
      />
    </picture>
  );
}

export default HeroBackground;
