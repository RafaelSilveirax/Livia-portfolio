import AboutHeader from "./components/AboutHeader.js";
import AboutStats from "./components/AboutStats.js";
import AboutBio from "./components/AboutBio.js";
import AboutSkills from "./components/AboutSkills.js";
import { useFadeIn } from "../../hooks/useFadeIn.js";

function About() {
  const headerRef = useFadeIn();
  const statsRef = useFadeIn();
  const bioRef = useFadeIn();
  const skillsRef = useFadeIn();

  return (
    <section
      id="about"
      className="flex items-center min-h-svh bg-livia-navy-blue py-24 max-md:py-16"
    >
      <div className="flex flex-col gap-12 max-w-page mx-auto px-6 w-full max-md:gap-10">
        <div ref={headerRef} className="fade-in">
          <AboutHeader />
        </div>

        <div ref={statsRef} className="fade-in">
          <AboutStats />
        </div>

        <div ref={bioRef} className="fade-in">
          <AboutBio />
        </div>

        <div ref={skillsRef} className="fade-in">
          <AboutSkills />
        </div>
      </div>
    </section>
  );
}

export default About;
