import BackgroundLivia from "../../assets/background_livia.png";

function Home() {
  return (
    <section className="relative w-full min-h-svh overflow-hidden" id="home">
      <img
        src={BackgroundLivia}
        alt="Livia Ballai pintando mural artístico"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] z-0 max-[768px]:object-[60%_25%] min-[2000px]:object-[center_20%]"
        fetchPriority="high"
      />

      <div className="absolute inset-0 z-1 hero-overlay" />

      <div className="relative z-2 w-full max-w-7xl mx-auto px-[clamp(1.5rem,5vw,4rem)] min-h-svh flex items-center max-[768px]:items-end max-[768px]:pb-16">
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
      </div>
    </section>
  );
}

export default Home;
