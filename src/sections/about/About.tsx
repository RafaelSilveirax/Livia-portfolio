import AboutHighlights from "./components/AboutHighlights.js";
import AboutDecorativeBox from "./components/AboutDecorativeBox.js";
import { useFadeIn } from "../../hooks/useFadeIn.js";

function About() {
  const leftRef = useFadeIn();
  const rightRef = useFadeIn();

  return (
    <section id="about" className="flex items-center bg-livia-navy-blue py-24">
      <div className="grid grid-cols-2 gap-16 max-w-page mx-auto px-6 items-start max-lg:grid-cols-1 max-lg:gap-12">
        <div ref={leftRef} className="fade-in">
          <AboutHighlights />
        </div>
        <div ref={rightRef} className="fade-in">
          <AboutDecorativeBox />
        </div>
      </div>
    </section>
  );
}

export default About;
