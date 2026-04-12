function HeroCard() {
  return (
    <div className="flex flex-col gap-3 max-w-[520px] p-10 rounded-[20px] backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-[768px]:max-w-full max-[768px]:p-8">
      <p className="font-montserrat font-semibold tracking-[0.12em] uppercase text-white/85 text-base">
        Designer & Ilustradora
      </p>

      <h1 className="font-playfair font-bold text-[clamp(3rem,6vw,5rem)] text-livia-turquoise leading-[1.05]">
        Livia Ballai
      </h1>

      <p className="font-montserrat text-base text-white/85">
        Visual Arts • Illustration • Character Design
      </p>

      <a
        href="#portfolio"
        className="font-montserrat font-semibold text-[0.95rem] px-8 py-[0.9rem] mt-4 rounded-full bg-white text-livia-turquoise transition-[transform,opacity] duration-300 ease-in-out hover:opacity-90 hover:-translate-y-[3px] max-[768px]:w-full max-[768px]:text-center"
      >
        Ver Portfólio
      </a>
    </div>
  );
}

export default HeroCard;
