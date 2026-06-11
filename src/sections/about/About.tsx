import AboutIntro from "./components/AboutIntro.js";
import AboutStats from "./components/AboutStats.js";
import AboutSkills from "./components/AboutSkills.js";
import { useFadeIn } from "../../hooks/useFadeIn.js";

function About() {
  const introRef = useFadeIn();
  const statsRef = useFadeIn();
  const skillsRef = useFadeIn();

  return (
    <section
      id="about"
      className="flex items-center min-h-svh section-gradient py-24 max-md:py-16"
    >
      <div className="flex flex-col gap-14 max-w-page mx-auto px-6 w-full max-md:gap-10">
        <div ref={introRef} className="fade-in">
          <AboutIntro />
        </div>

        <div ref={statsRef} className="fade-in">
          <AboutStats />
        </div>

        <div ref={skillsRef} className="fade-in">
          <AboutSkills />
        </div>
      </div>
    </section>
  );
}

export default About;
