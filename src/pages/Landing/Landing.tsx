import Menu from "../../components/ui/Menu.js";
import Home from "../../sections/home/Home.js";
import About from "../../sections/about/About.js";
import Portfolio from "../../sections/portfolio/Portfolio.js";

export function Landing() {
  return (
    <main className="flex flex-col bg-background text-foreground">
      <Menu />
      <Home />
      <About />
      <Portfolio />
      <div id="contact" className="relative -top-20 h-0" aria-hidden="true" />
    </main>
  );
}
