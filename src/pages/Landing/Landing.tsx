import Menu from "../../components/ui/Menu.js";
import Home from "../../sections/home/Home.js";
import About from "../../sections/about/About.js";
import Portfolio from "../../sections/portfolio/Portfolio.js";
import Contact from "../../sections/contact/index.js";
import { useSnapScroll } from "../../hooks/useSnapScroll.js";

export function Landing() {
  useSnapScroll("scroll-container");

  return (
    <main id="scroll-container" className="flex flex-col bg-background text-foreground">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-200 focus:bg-white focus:text-livia-navy-blue focus:font-montserrat focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Menu />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
