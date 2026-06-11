import {
  IoColorPaletteOutline,
  IoVideocamOutline,
  IoBrushOutline,
} from "react-icons/io5";
import type { IconType } from "react-icons";
import { cn } from "../../../lib/utils.js";

/** Classes por cor — strings literais para o Tailwind não purgar. */
type Accent = {
  title: string;
  chip: string;
  topBar: string;
  glow: string;
  divider: string;
  item: string;
  shadow: string;
};

type SkillGroup = {
  title: string;
  subtitle: string;
  Icon: IconType;
  accent: Accent;
  items: string[];
};

const turquoise: Accent = {
  title: "text-livia-turquoise",
  chip: "bg-livia-turquoise/15 text-livia-turquoise ring-livia-turquoise/25",
  topBar: "from-livia-turquoise",
  glow: "bg-livia-turquoise/10",
  divider: "from-livia-turquoise/40",
  item: "hover:bg-livia-turquoise/15 hover:ring-livia-turquoise/30 hover:text-white",
  shadow: "hover:shadow-[0_20px_50px_-20px_rgba(58,157,171,0.45)]",
};

const mustard: Accent = {
  title: "text-livia-mustard",
  chip: "bg-livia-mustard/15 text-livia-mustard ring-livia-mustard/25",
  topBar: "from-livia-mustard",
  glow: "bg-livia-mustard/10",
  divider: "from-livia-mustard/40",
  item: "hover:bg-livia-mustard/15 hover:ring-livia-mustard/30 hover:text-white",
  shadow: "hover:shadow-[0_20px_50px_-20px_rgba(217,159,43,0.45)]",
};

const coral: Accent = {
  title: "text-livia-dark-coral",
  chip: "bg-livia-dark-coral/15 text-livia-dark-coral ring-livia-dark-coral/25",
  topBar: "from-livia-dark-coral",
  glow: "bg-livia-dark-coral/10",
  divider: "from-livia-dark-coral/40",
  item: "hover:bg-livia-dark-coral/15 hover:ring-livia-dark-coral/30 hover:text-white",
  shadow: "hover:shadow-[0_20px_50px_-20px_rgba(208,73,58,0.45)]",
};

const groups: SkillGroup[] = [
  {
    title: "Design Gráfico",
    subtitle: "Identidade visual e comunicação",
    Icon: IoColorPaletteOutline,
    accent: turquoise,
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
    accent: mustard,
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
    accent: coral,
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
      {groups.map(({ title, subtitle, Icon, accent, items }) => (
        <article
          key={title}
          className={cn(
            "group relative flex flex-col gap-5 p-8 rounded-2xl overflow-hidden glass-card-accent transition-all duration-300 hover:-translate-y-1 max-sm:p-6",
            accent.shadow,
          )}
        >
          <div
            className={cn(
              "absolute top-0 inset-x-0 h-0.5 rounded-t-2xl bg-linear-to-r to-transparent",
              accent.topBar,
            )}
            aria-hidden="true"
          />

          <div
            className={cn(
              "pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              accent.glow,
            )}
            aria-hidden="true"
          />

          <header className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex items-center justify-center w-11 h-11 rounded-xl ring-1 transition-transform duration-300 group-hover:scale-110",
                  accent.chip,
                )}
                aria-hidden="true"
              >
                <Icon size={22} />
              </span>
              <div className="flex flex-col">
                <h4
                  className={cn(
                    "font-serif text-[1.2rem] font-semibold leading-tight",
                    accent.title,
                  )}
                >
                  {title}
                </h4>
                <p className="font-sans text-[0.78rem] text-white/50 leading-tight">
                  {subtitle}
                </p>
              </div>
            </div>

            <div
              className={cn(
                "h-px w-full bg-linear-to-r via-white/10 to-transparent",
                accent.divider,
              )}
              aria-hidden="true"
            />
          </header>

          <ul className="flex flex-wrap gap-2">
            {items.map((item) => (
              <li
                key={item}
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 font-sans text-[0.82rem] leading-none text-white/80 transition-colors",
                  accent.item,
                )}
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
