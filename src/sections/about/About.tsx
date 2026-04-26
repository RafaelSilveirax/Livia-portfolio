import AboutHighlights from "./components/AboutHighlights.js";
import AboutDecorativeBox from "./components/AboutDecorativeBox.js";

function About() {
  return (
    <section className="min-h-screen bg-livia-navy-blue flex items-center" id="about">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <AboutHighlights />
        <AboutDecorativeBox />
      </div>
    </section>
  );
}

export default About;
