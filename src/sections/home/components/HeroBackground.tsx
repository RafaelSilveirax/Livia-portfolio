import BackgroundLivia from "../../../assets/background_livia.png";

function HeroBackground() {
  return (
    <img
      src={BackgroundLivia}
      alt="Livia Ballai pintando mural artístico"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover object-[center_35%] z-0 max-[768px]:object-[60%_25%] min-[2000px]:object-[center_20%]"
      fetchPriority="high"
    />
  );
}

export default HeroBackground;
