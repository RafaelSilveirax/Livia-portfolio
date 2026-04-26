import AboutHighlights from "./components/AboutHighlights.js";
import AboutDecorativeBox from "./components/AboutDecorativeBox.js";
import { useFadeIn } from "../../hooks/useFadeIn.js";

function About() {
  const leftRef = useFadeIn();
  const rightRef = useFadeIn();

  return (
    <section
      className="flex items-center bg-livia-navy-blue"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">
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
