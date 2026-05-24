type Stat = {
  value: string;
  unit: string;
  description: string;
};

const stats: Stat[] = [
  { value: "+5", unit: "anos", description: "de experiência com Design" },
  {
    value: "+10",
    unit: "anos",
    description: "de experiência com Ilustração Digital",
  },
  {
    value: "100%",
    unit: "dedicação",
    description: "Com empresas e como Freelancer",
  },
];

function AboutStats() {
  return (
    <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
      {stats.map(({ value, unit, description }) => (
        <div
          key={description}
          className="relative flex flex-col items-center justify-center text-center gap-2 px-6 py-5 rounded-2xl overflow-hidden glass-form transition-transform duration-200 hover:-translate-y-1 max-sm:px-4 max-sm:py-4"
        >
          <div
            className="absolute left-0 inset-y-0 w-0.5 rounded-l-2xl bg-livia-turquoise"
            aria-hidden="true"
          />

          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-[2.75rem] leading-none font-bold text-livia-turquoise max-sm:text-[2.25rem]">
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
