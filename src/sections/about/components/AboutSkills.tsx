import {
  IoColorPaletteOutline,
  IoVideocamOutline,
  IoBrushOutline,
} from "react-icons/io5";
import type { IconType } from "react-icons";

type SkillGroup = {
  title: string;
  subtitle: string;
  Icon: IconType;
  items: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Design Gráfico",
    subtitle: "Identidade visual e comunicação",
    Icon: IoColorPaletteOutline,
    items: [
      "Photoshop",
      "Illustrator",
      "Canva",
      "Marketing",
      "Social Media",
      "Teoria das Cores",
    ],
  },
  {
    title: "Edição de Vídeo",
    subtitle: "Narrativa em movimento",
    Icon: IoVideocamOutline,
    items: [
      "After Effects",
      "Davinci Resolve",
      "CapCut",
      "Conhecimentos de IA",
    ],
  },
  {
    title: "Ilustração",
    subtitle: "Arte autoral e digital",
    Icon: IoBrushOutline,
    items: [
      "Procreate",
      "Ilustração de Livros",
      "2D Digital e Manual",
      "Background",
      "Concept Art",
      "Character Design",
    ],
  },
];

function AboutSkills() {
  return (
    <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
      {groups.map(({ title, subtitle, Icon, items }) => (
        <article
          key={title}
          className="group relative flex flex-col gap-5 p-8 rounded-2xl overflow-hidden glass-card-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(58,157,171,0.45)] max-sm:p-6"
        >
          <div
            className="absolute top-0 inset-x-0 h-0.5 rounded-t-2xl bg-linear-to-r from-livia-turquoise to-transparent"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-livia-turquoise/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            aria-hidden="true"
          />

          <header className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-livia-turquoise/15 text-livia-turquoise ring-1 ring-livia-turquoise/25 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <Icon size={22} />
              </span>
              <div className="flex flex-col">
                <h4 className="font-serif text-[1.2rem] font-semibold text-white leading-tight">
                  {title}
                </h4>
                <p className="font-sans text-[0.78rem] text-white/50 leading-tight">
                  {subtitle}
                </p>
              </div>
            </div>

            <div
              className="h-px w-full bg-linear-to-r from-livia-turquoise/40 via-white/10 to-transparent"
              aria-hidden="true"
            />
          </header>

          <ul className="flex flex-wrap gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 font-sans text-[0.82rem] leading-none text-white/80 transition-colors hover:bg-livia-turquoise/15 hover:ring-livia-turquoise/30 hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default AboutSkills;
