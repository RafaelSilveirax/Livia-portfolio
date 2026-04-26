const skills = [
  {
    icon: "🎨",
    title: "Graphic Design",
    description:
      "Identidades visuais, branding e design editorial com foco em comunicação clara e impactante.",
    accent: true,
  },
  {
    icon: "✏️",
    title: "Illustration",
    description:
      "Ilustrações digitais e conceituais para livros, produtos, mídias sociais e muito mais.",
    accent: false,
  },
  {
    icon: "🧬",
    title: "Character Design",
    description:
      "Criação de personagens expressivos para jogos, animação, concept art e marcas.",
    accent: false,
  },
  {
    icon: "📸",
    title: "Photography",
    description:
      "Fotografia conceitual e para redes sociais, com edição e tratamento de imagens.",
    accent: true,
  },
];

const glassCard: React.CSSProperties = {
  background:
    "color-mix(in srgb, var(--color-livia-navy-blue) 60%, transparent)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid color-mix(in srgb, white 12%, transparent)",
  boxShadow: "0 8px 32px color-mix(in srgb, black 20%, transparent)",
};

const glassCardAccent: React.CSSProperties = {
  ...glassCard,
  border:
    "1px solid color-mix(in srgb, var(--color-livia-turquoise) 30%, transparent)",
};

function AboutDecorativeBox() {
  return (
    <div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
      {skills.map((skill) => (
        <div
          key={skill.title}
          className="relative flex flex-col gap-3 p-6 rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1"
          style={skill.accent ? glassCardAccent : glassCard}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
            style={{
              background: skill.accent
                ? "linear-gradient(90deg, var(--color-livia-turquoise), transparent)"
                : "linear-gradient(90deg, color-mix(in srgb, white 20%, transparent), transparent)",
            }}
            aria-hidden="true"
          />

          <span className="text-2xl">{skill.icon}</span>

          <h4 className="font-playfair font-semibold text-white text-[1.05rem]">
            {skill.title}
          </h4>

          <p className="font-montserrat font-normal text-white/55 text-[0.82rem] leading-relaxed">
            {skill.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutDecorativeBox;
