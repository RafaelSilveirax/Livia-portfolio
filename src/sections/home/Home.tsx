import HeroBackground from "./components/HeroBackground.js";
import HeroCard from "./components/HeroCard.js";

function Home() {
  return (
    <section
      id="home"
      className="relative w-full min-h-svh overflow-hidden"
    >
      <HeroBackground />

      <div className="absolute inset-0 z-1 hero-overlay" />

      <div className="relative z-2 flex items-center min-h-svh w-full max-w-page mx-auto px-[clamp(1.5rem,5vw,4rem)] max-md:justify-center">
        <HeroCard />
      </div>
    </section>
  );
}

export default Home;
