import HeroBackground from "./components/HeroBackground.js";
import HeroCard from "./components/HeroCard.js";

function Home() {
  return (
    <section className="relative w-full min-h-svh overflow-hidden" id="home">
      <HeroBackground />

      <div className="absolute inset-0 z-1 hero-overlay" />

      <div className="relative z-2 w-full max-w-7xl mx-auto px-[clamp(1.5rem,5vw,4rem)] min-h-svh flex items-center max-[768px]:justify-center">
        <HeroCard />
      </div>
    </section>
  );
}

export default Home;
