import { cn } from "../../../lib/utils.js";

type Stat = {
  value: string;
  unit: string;
  description: string;
  /** Cor da paleta da marca — espalha turquesa / mostarda / coral pelos cards. */
  valueClass: string;
  barClass: string;
};

const stats: Stat[] = [
  {
    value: "+5",
    unit: "anos",
    description: "de experiência com Design",
    valueClass: "text-livia-turquoise",
    barClass: "bg-livia-turquoise",
  },
  {
    value: "+10",
    unit: "anos",
    description: "de experiência com Ilustração Digital",
    valueClass: "text-livia-mustard",
    barClass: "bg-livia-mustard",
  },
  {
    value: "100%",
    unit: "dedicação",
    description: "Com empresas e como Freelancer",
    valueClass: "text-livia-dark-coral",
    barClass: "bg-livia-dark-coral",
  },
];

function AboutStats() {
  return (
    <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
      {stats.map(({ value, unit, description, valueClass, barClass }) => (
        <div
          key={description}
          className="relative flex flex-col items-center justify-center text-center gap-2 px-6 py-5 rounded-2xl overflow-hidden glass-form transition-transform duration-200 hover:-translate-y-1 max-sm:px-4 max-sm:py-4"
        >
          <div
            className={cn(
              "absolute left-0 inset-y-0 w-0.5 rounded-l-2xl",
              barClass,
            )}
            aria-hidden="true"
          />

          <div className="flex items-baseline gap-1.5">
            <span
              className={cn(
                "font-serif text-[2.75rem] leading-none font-bold max-sm:text-[2.25rem]",
                valueClass,
              )}
            >
              {value}
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/55">
              {unit}
            </span>
          </div>
          <p className="font-sans text-[0.9rem] leading-snug text-white/70 max-w-[22ch]">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutStats;
