import PortfolioCarousel from "./components/PortfolioCarousel.js";
import { portfolioSections } from "./data.js";
import { useFadeIn } from "../../hooks/useFadeIn.js";

function Portfolio() {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in" id="portfolio">
      <PortfolioCarousel sections={portfolioSections} />
    </div>
  );
}

export default Portfolio;
