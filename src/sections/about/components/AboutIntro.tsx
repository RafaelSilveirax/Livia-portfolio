import { IoArrowDown, IoLocationOutline } from "react-icons/io5";
import BrandStamp from "../../../components/ui/BrandStamp.js";
import { scrollToSection } from "../../../lib/utils.js";

function AboutIntro() {
  return (
    <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center gap-12 max-lg:grid-cols-1 max-lg:gap-10">
      {/* Editorial — texto */}
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

        {/* Separador com a paleta da marca */}
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

      {/* Cartão de identidade — eco do Hero */}
      <div className="glass-card-accent flex flex-col items-center gap-5 rounded-3xl p-8 text-center max-lg:mx-auto max-lg:max-w-sm">
        <BrandStamp />

        <div className="flex flex-col gap-1">
          <p className="font-serif text-2xl font-semibold text-white">
            Livia Ballai
          </p>
          <p className="text-eyebrow">Designer &amp; Ilustradora</p>
        </div>

        <div className="flex items-center gap-2 font-sans text-sm text-white/55">
          <IoLocationOutline
            className="w-4 h-4 text-livia-turquoise"
            aria-hidden="true"
          />
          Niterói, RJ · Brasil
        </div>

        <div className="glass-tag flex items-center gap-2 rounded-full px-4 py-1.5">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-livia-turquoise opacity-70 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-livia-turquoise" />
          </span>
          <span className="font-sans text-xs font-medium text-white/80">
            Disponível para projetos
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
