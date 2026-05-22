import { IoColorPaletteOutline, IoVideocamOutline, IoBrushOutline } from "react-icons/io5";
import type { IconType } from "react-icons";
import { cn } from "../../../lib/utils.js";

type SkillGroup = {
  title: string;
  Icon: IconType;
  items: string[];
  accent: boolean;
};

const groups: SkillGroup[] = [
  {
    title: "Graphic Design",
    Icon: IoColorPaletteOutline,
    accent: true,
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
    title: "Video Editor",
    Icon: IoVideocamOutline,
    accent: true,
    items: [
      "After Effects",
      "Davinci Resolve",
      "CapCut",
      "Conhecimentos de IA",
    ],
  },
  {
    title: "Illustration",
    Icon: IoBrushOutline,
    accent: true,
    items: [
      "Procreate",
      "Book Illustration",
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
      {groups.map(({ title, Icon, items, accent }) => (
        <div
          key={title}
          className={cn(
            "relative flex flex-col gap-5 p-8 rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1 max-sm:p-6",
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

          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-xl",
                accent
                  ? "bg-livia-turquoise/15 text-livia-turquoise"
                  : "bg-white/10 text-white/80",
              )}
              aria-hidden="true"
            >
              <Icon size={20} />
            </span>
            <h4 className="font-serif text-[1.15rem] font-semibold text-white">
              {title}
            </h4>
          </div>

          <ul className="flex flex-col gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 font-sans text-[0.9rem] leading-snug text-white/75"
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-livia-turquoise/80 shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AboutSkills;
