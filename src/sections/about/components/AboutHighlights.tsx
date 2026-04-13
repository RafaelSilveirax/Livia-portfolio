const highlights = [
  "Designer & ilustradora",
  "Graduanda em Artes Visuais – UFF",
  "Foco em ilustração, concept art e design visual",
  "Experiência em projetos autorais e comerciais",
];

function AboutHighlights() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-playfair font-bold text-[clamp(2rem,3vw,3rem)] text-livia-navy-blue">
        About Me
      </h2>

      <div
        className="w-18 h-0.5 rounded-full bg-livia-turquoise"
        aria-hidden="true"
      />

      <ul className="list-none p-0 m-0 grid gap-[0.85rem] font-montserrat font-medium text-foreground">
        {highlights.map((item) => (
          <li key={item} className="flex gap-3 items-start leading-normal">
            <span
              className="w-[1.6rem] h-[1.6rem] rounded-full bg-[color-mix(in_srgb,var(--color-livia-turquoise)_30%,transparent)] grid place-items-center text-livia-navy-blue shrink-0 [&_svg]:w-4 [&_svg]:h-4"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

      <p className="font-montserrat font-medium text-foreground max-w-120 text-[1.02rem] leading-[1.7]">
        Apaixonada por narrativa visual, personagens e composição. Busco criar
        imagens expressivas que conectam estética, conceito e emoção.
      </p>
    </div>
  );
}

export default AboutHighlights;
