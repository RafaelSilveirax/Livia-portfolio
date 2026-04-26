import { cn } from "../../../lib/utils.js";

type Skill = {
  icon: string;
  title: string;
  description: string;
  accent: boolean;
};

const skills: Skill[] = [
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

function AboutDecorativeBox() {
  return (
    <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
      {skills.map(({ icon, title, description, accent }) => (
        <div
          key={title}
          className={cn(
            "relative flex flex-col gap-3 p-6 rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1",
            accent ? "glass-card-accent" : "glass-card",
          )}
        >
          <div
            className={cn(
              "absolute top-0 inset-x-0 h-0.5 rounded-t-2xl bg-linear-to-r to-transparent",
              accent ? "from-livia-turquoise" : "from-white/20",
            )}
            aria-hidden="true"
          />

          <span className="text-2xl">{icon}</span>

          <h4 className="font-serif text-[1.05rem] font-semibold text-white">
            {title}
          </h4>

          <p className="font-sans text-[0.82rem] leading-relaxed text-white/55">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutDecorativeBox;
