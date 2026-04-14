import { scrollToSection } from "../../../lib/utils.js";

function HeroCard() {
  return (
    <div className="flex flex-col gap-3 max-w-[520px] p-10 rounded-[20px] backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-[768px]:max-w-full max-[768px]:p-8">
      <p className="font-montserrat font-semibold tracking-[0.12em] uppercase text-white/85 text-base">
        Designer & Ilustradora
      </p>

      <h1 className="font-playfair font-bold text-[5rem] sm:text-[5rem] max-sm:text-[4.5rem] text-livia-turquoise leading-[1.05]">
        Livia Ballai
      </h1>

      <p className="font-montserrat text-base text-white/85">
        Visual Arts • Illustration • Character Design
      </p>

      <a
        href="#portfolio"
        onClick={(e) => { e.preventDefault(); scrollToSection("portfolio"); }}
        className="font-montserrat font-semibold text-[0.95rem] px-8 py-[0.9rem] mt-4 rounded-full bg-white text-livia-turquoise transition-[transform,background-color,color] duration-300 ease-in-out hover:bg-livia-turquoise hover:text-white hover:-translate-y-[3px] max-[768px]:w-full text-center"
      >
        Ver Portfólio
      </a>
    </div>
  );
}

export default HeroCard;
