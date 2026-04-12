import PortfolioCarousel from "./components/PortfolioCarousel.js";
import { portfolioSections } from "./data.js";

function Portfolio() {
  return <PortfolioCarousel sections={portfolioSections} />;
}

export default Portfolio;
