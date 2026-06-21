import { IoArrowDown } from "react-icons/io5";
import { scrollToSection } from "../../../lib/utils.js";
import fotoLivia from "../../../assets/foto-livia.jpeg";

function AboutIntro() {
  return (
    <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-stretch gap-12 max-lg:grid-cols-1 max-lg:gap-10">
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-3">
          <span className="text-livia-mustard text-lg" aria-hidden="true">
            ✦
          </span>
          <p className="text-eyebrow">Sobre mim</p>
        </div>

        <h2 className="font-serif font-bold leading-[1.05] text-white text-[clamp(2.25rem,4vw,3.5rem)]">
          Design, Edição de Vídeo e{" "}
          <span className="hero-color-cycle">Ilustração</span>
        </h2>

        <p className="font-sans font-medium text-[1.02rem] leading-[1.8] text-white/70 max-w-[54ch]">
          Sou designer gráfica, ilustradora e editora de vídeo com foco em
          criação de identidades visuais, storytelling e conteúdo estratégico
          para redes sociais. Minha prática une design, narrativa e imagem em
          projetos que buscam não só comunicar, mas{" "}
          <span className="text-livia-turquoise font-semibold">
            gerar conexão
          </span>
          .
        </p>

        <div className="flex items-center gap-3 text-lg" aria-hidden="true">
          <span className="text-livia-turquoise">✦</span>
          <span className="text-livia-mustard">✦</span>
          <span className="text-livia-dark-coral">✦</span>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="btn-pill-cta"
        >
          Vamos trabalhar juntos
          <span className="btn-pill-cta__icon" aria-hidden="true">
            <IoArrowDown className="w-4 h-4" />
          </span>
        </button>
      </div>

      <div className="flex h-full flex-col items-center justify-center text-center max-lg:h-auto max-lg:mx-auto">
        <div className="photo-frame h-full w-full max-w-96 max-lg:h-auto">
          <img
            src={fotoLivia}
            alt="Livia Ballai desenhando em um tablet"
            className="aspect-square w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
