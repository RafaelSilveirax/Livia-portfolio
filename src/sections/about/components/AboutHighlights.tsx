const skillTags = [
  "Photoshop",
  "Illustrator",
  "Procreate",
  "Figma",
  "Character Design",
  "Branding",
];

function AboutHighlights() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-eyebrow">Quem sou eu</p>

      <h2 className="text-section-title text-white">About Me</h2>

      <div
        className="w-16 h-0.5 rounded-full bg-livia-turquoise"
        aria-hidden="true"
      />

      <p className="text-quote text-white/90">
        "Arte que conecta, design que comunica."
      </p>

      <p className="text-body text-white/65">
        Sou Livia Ballai, designer gráfica e ilustradora baseada em Niterói, RJ.
        Trabalho na interseção entre arte e design, criando identidades visuais,
        ilustrações e personagens que contam histórias únicas.
      </p>

      <p className="text-body text-white/65">
        Com experiência em{" "}
        <span className="text-white/90 font-medium">
          Graphic Design, Illustration e Character Design
        </span>
        , desenvolvo projetos que vão desde branding e design editorial até
        ilustrações digitais para produtos, jogos e mídias sociais.
      </p>

      <div className="flex flex-wrap gap-2 mt-2">
        {skillTags.map((tag) => (
          <span key={tag} className="tag-pill tag-turquoise text-livia-turquoise">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AboutHighlights;
