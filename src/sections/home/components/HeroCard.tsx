import { scrollToSection } from "../../../lib/utils.js";

function HeroCard() {
  return (
    <div className="flex flex-col gap-3 max-w-[520px] p-10 rounded-3xl backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-md:max-w-full max-md:p-8">
      <p className="font-sans text-base font-semibold uppercase tracking-[0.12em] text-white/85">
        Designer & Ilustradora
      </p>

      <h1 className="font-serif text-[5rem] max-sm:text-[4.5rem] font-bold leading-[1.05] text-livia-turquoise">
        Livia Ballai
      </h1>

      <p className="font-sans text-base text-white/85">
        Visual Arts • Illustration • Character Design
      </p>

      <a
        href="#portfolio"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("portfolio");
        }}
        className="btn-primary mt-4 self-start px-8 py-[0.9rem] text-[0.95rem] bg-white text-livia-turquoise hover:bg-livia-turquoise hover:text-white max-md:self-stretch max-md:text-center"
      >
        Ver Portfólio
      </a>
    </div>
  );
}

export default HeroCard;
