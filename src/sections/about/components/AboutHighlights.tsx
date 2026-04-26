function AboutHighlights() {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-montserrat font-semibold tracking-[0.18em] uppercase text-livia-turquoise text-xs">
        Quem sou eu
      </p>

      <h2 className="font-playfair font-bold text-[clamp(2rem,3vw,3rem)] text-white leading-tight">
        About Me
      </h2>

      <div
        className="w-16 h-0.5 rounded-full bg-livia-turquoise"
        aria-hidden="true"
      />

      <p className="font-playfair italic text-white/90 text-[1.15rem] leading-relaxed">
        "Arte que conecta, design que comunica."
      </p>

      <p className="font-montserrat font-normal text-white/65 text-[0.97rem] leading-[1.8]">
        Sou Livia Ballai, designer gráfica e ilustradora baseada em Niterói, RJ.
        Trabalho na interseção entre arte e design, criando identidades visuais,
        ilustrações e personagens que contam histórias únicas.
      </p>

      <p className="font-montserrat font-normal text-white/65 text-[0.97rem] leading-[1.8]">
        Com experiência em{" "}
        <span className="text-white/90 font-medium">
          Graphic Design, Illustration e Character Design
        </span>
        , desenvolvo projetos que vão desde branding e design editorial até
        ilustrações digitais para produtos, jogos e mídias sociais.
      </p>

      <div className="flex flex-wrap gap-2 mt-2">
        {[
          "Photoshop",
          "Illustrator",
          "Procreate",
          "Figma",
          "Character Design",
          "Branding",
        ].map((tag) => (
          <span
            key={tag}
            className="font-montserrat text-[0.7rem] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full text-livia-turquoise"
            style={{
              background:
                "color-mix(in srgb, var(--color-livia-turquoise) 10%, transparent)",
              border:
                "1px solid color-mix(in srgb, var(--color-livia-turquoise) 28%, transparent)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AboutHighlights;
