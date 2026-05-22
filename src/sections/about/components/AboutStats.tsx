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
    <div className="glass-form rounded-2xl p-8 max-sm:p-6">
      <div className="grid grid-cols-3 max-md:grid-cols-1 divide-x divide-white/10 max-md:divide-x-0 max-md:divide-y">
        {stats.map(({ value, unit, description }) => (
          <div
            key={description}
            className="flex flex-col items-center text-center gap-2 px-6 py-2 max-md:py-6 max-md:px-0"
          >
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
    </div>
  );
}

export default AboutStats;
