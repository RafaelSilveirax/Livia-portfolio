import { IoArrowDown } from "react-icons/io5";
import HeroBackground from "./components/HeroBackground.js";
import HeroBlobs from "./components/HeroBlobs.js";
import HeroCard from "./components/HeroCard.js";
import { scrollToSection } from "../../lib/utils.js";

function Home() {
  return (
    <section id="home" className="relative w-full min-h-svh overflow-hidden">
      <HeroBackground />

      <div className="absolute inset-0 z-1 hero-overlay" />

      <div className="relative z-3 flex items-center justify-center min-h-svh w-full max-w-page mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <HeroCard />
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("about");
        }}
        className="btn-pill-cta hero-rise absolute bottom-10 left-1/2 -translate-x-1/2 z-3 max-md:bottom-6"
        style={{ animationDelay: "0.7s" }}
      >
        Sobre mim
        <span className="btn-pill-cta__icon" aria-hidden="true">
          <IoArrowDown className="w-4 h-4" />
        </span>
      </a>
    </section>
  );
}

export default Home;
