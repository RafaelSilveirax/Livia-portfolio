const highlights = [
  "Designer & ilustradora",
  "Graduanda em Artes Visuais – UFF",
  "Foco em ilustração, concept art e design visual",
  "Experiência em projetos autorais e comerciais",
];

function About() {
  return (
    <section
      className="py-14 pb-[4.5rem] bg-[color-mix(in_srgb,var(--color-livia-turquoise)_12%,white)]"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 gap-12 items-center max-[900px]:grid-cols-1">
        <div className="flex flex-col gap-6">
          <h2 className="font-playfair text-[clamp(2rem,3vw,3rem)] text-livia-navy-blue">
            About Me
          </h2>

          <div className="w-[4.5rem] h-0.5 rounded-full bg-livia-turquoise" aria-hidden="true" />

          <ul className="list-none p-0 m-0 grid gap-[0.85rem] font-montserrat text-foreground">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 items-start leading-[1.5]">
                <span
                  className="w-[1.6rem] h-[1.6rem] rounded-full bg-[color-mix(in_srgb,var(--color-livia-turquoise)_30%,transparent)] grid place-items-center text-livia-navy-blue shrink-0 [&_svg]:w-4 [&_svg]:h-4"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12.5L9.2 16.5L19 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="font-montserrat text-foreground max-w-[30rem] text-[1.02rem] leading-[1.7]">
            Apaixonada por narrativa visual, personagens e composição. Busco
            criar imagens expressivas que conectam estética, conceito e emoção.
          </p>
        </div>

        <div
          className="relative min-h-[280px] rounded-[28px] overflow-hidden max-[900px]:min-h-[240px]"
          style={{
            background:
              "linear-gradient(140deg, color-mix(in srgb, var(--color-livia-turquoise) 60%, transparent), color-mix(in srgb, var(--color-livia-navy-blue) 40%, transparent))",
            boxShadow:
              "0 18px 40px color-mix(in srgb, var(--color-livia-navy-blue) 20%, transparent)",
          }}
          aria-hidden="true"
        >
          <div className="absolute top-[20%] right-[-10%] w-[200px] h-[200px] bg-livia-mustard opacity-35 blur-[50px] rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default About;
