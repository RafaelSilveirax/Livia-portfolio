import BackgroundLivia from "../../assets/background_livia.png";
import HeroCard from "./components/HeroCard.js";

function Home() {
  return (
    <section className="relative w-full min-h-svh overflow-hidden" id="home">
      <img
        src={BackgroundLivia}
        alt="Livia Ballai pintando mural artístico"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] z-0 max-[768px]:object-[60%_25%] min-[2000px]:object-[center_20%]"
        fetchPriority="high"
      />

      <div className="absolute inset-0 z-1 hero-overlay" />

      <div className="relative z-2 w-full max-w-7xl mx-auto px-[clamp(1.5rem,5vw,4rem)] min-h-svh flex items-center max-[768px]:items-end max-[768px]:pb-16">
        <HeroCard />
      </div>
    </section>
  );
}

export default Home;
