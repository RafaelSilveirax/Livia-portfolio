import { lazy, Suspense } from "react";
import Menu from "../../components/ui/Menu.js";
import Home from "../../sections/home/Home.js";
import { useSnapScroll } from "../../hooks/useSnapScroll.js";

const About = lazy(() => import("../../sections/about/About.js"));
const Portfolio = lazy(() => import("../../sections/portfolio/Portfolio.js"));
const Contact = lazy(() => import("../../sections/contact/Contact.js"));

const SKIP_LINK_CLASS =
  "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] " +
  "focus:bg-white focus:text-livia-navy-blue focus:font-sans focus:font-semibold " +
  "focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg";

export function Landing() {
  useSnapScroll("scroll-container");

  return (
    <main
      id="scroll-container"
      className="flex flex-col bg-background text-foreground"
    >
      <a href="#home" className={SKIP_LINK_CLASS}>
        Skip to main content
      </a>
      <Menu />
      <Home />
      <Suspense fallback={<div style={{ minHeight: "100svh" }} />}>
        <About />
        <Portfolio />
        <Contact />
      </Suspense>
    </main>
  );
}
