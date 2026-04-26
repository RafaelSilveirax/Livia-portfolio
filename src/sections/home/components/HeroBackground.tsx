import { useEffect, useRef } from "react";
import BackgroundLivia from "../../../assets/background_livia.png";

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
    <img
      ref={imgRef}
      src={BackgroundLivia}
      alt="Livia Ballai pintando mural artístico"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover object-[center_35%] z-0 max-[768px]:object-[60%_25%] min-[2000px]:object-[center_20%]"
      style={{ willChange: "transform" }}
      fetchPriority="high"
    />
  );
}

export default HeroBackground;
