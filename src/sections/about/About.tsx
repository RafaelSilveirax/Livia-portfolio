import AboutHighlights from "./components/AboutHighlights.js";
import AboutDecorativeBox from "./components/AboutDecorativeBox.js";

function About() {
  return (
    <section
      className="py-14 pb-18 bg-livia-navy-blue"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 gap-12 items-center max-[900px]:grid-cols-1">
        <AboutHighlights />
        <AboutDecorativeBox />
      </div>
    </section>
  );
}

export default About;
