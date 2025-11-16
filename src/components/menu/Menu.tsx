import "./Menu.css";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const sections = ["about", "portfolio", "contact"];
import logoBalai from "../../assets/logo-balai.png";
export function Menu() {
  function scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <nav className="flex justify-between items-center bg-livia-purple-dark px-6  ">
      <img src={logoBalai} alt="Logo Livia" className="h-24 w-24" />

      <div className="flex items-center gap-20 text-white font-medium ">
        <div className="flex gap-20">
          {sections.map((sec) => (
            <button
              className="hover:text-livia-purple-light transition-colors duration-500 font-family-glacial-indiferrence"
              key={sec}
              onClick={() => scrollTo(sec)}
            >
              {sec}
            </button>
          ))}
        </div>
        <div className="flex gap-2 ">
          <a
            href="https://www.linkedin.com/in/l%C3%ADvia-ballai-9b650b1a2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin className="text-5xl" />
          </a>
          <a
            href="https://www.instagram.com/livia_zab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram className="text-5xl" />
          </a>
        </div>
      </div>
    </nav>
  );
}
