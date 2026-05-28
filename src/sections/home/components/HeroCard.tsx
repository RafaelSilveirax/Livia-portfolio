import { scrollToSection } from "../../../lib/utils.js";

function HeroCard() {
  return (
    <div className="relative flex flex-col gap-6 max-w-[860px] max-md:max-w-full max-md:gap-5">
      {/* Decorative scribble — top-left asterisk/spark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 80 80"
        className="hero-float absolute -top-14 -left-8 w-20 h-20 text-livia-mustard drop-shadow-lg max-md:w-12 max-md:h-12 max-md:-top-8 max-md:-left-2"
        style={{ ["--rot" as string]: "-8deg" }}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="hero-draw"
          style={{ ["--draw-length" as string]: "180" }}
        >
          <path d="M40 14 L40 66" />
          <path d="M16 40 L64 40" />
          <path d="M22 22 L58 58" />
          <path d="M58 22 L22 58" />
        </g>
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="hero-float absolute top-[30%] -right-16 w-24 h-24 text-livia-copper max-lg:hidden"
        style={{ ["--rot" as string]: "12deg" }}
      >
        <circle
          cx="50"
          cy="50"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle
          cx="50"
          cy="50"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="3 5"
        />
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 6"
          opacity="0.7"
        />
      </svg>

      {/* Decorative — wavy arrow bottom-right */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 80"
        className="hero-float absolute -bottom-14 -right-6 w-32 text-livia-dark-coral drop-shadow-lg max-md:w-20 max-md:-bottom-10"
        style={{ ["--rot" as string]: "6deg" }}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero-draw"
          style={{ ["--draw-length" as string]: "220" }}
        >
          <path d="M8 50 C 30 20, 70 70, 108 30" />
          <path d="M96 18 L 108 30 L 96 42" />
        </g>
      </svg>

      {/* Eyebrow with thick rule */}
      <div
        className="hero-rise flex items-center gap-4"
        style={{ animationDelay: "0.05s" }}
      >
        <span className="h-px w-12 bg-livia-mustard" />
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.32em] text-white">
          Designer <span className="text-livia-mustard">&</span> Ilustradora
        </p>
      </div>

      {/* Title — massive editorial */}
      <h1
        className="hero-rise font-serif font-bold leading-[0.88] text-white text-[clamp(4.5rem,11vw,9rem)] tracking-tight"
        style={{ animationDelay: "0.2s" }}
      >
        Livia
        <br />
        <span className="relative inline-block italic text-livia-turquoise">
          Ballai
          <svg
            aria-hidden="true"
            viewBox="0 0 320 24"
            preserveAspectRatio="none"
            className="absolute left-0 -bottom-3 w-full h-4 text-livia-mustard"
          >
            <path
              d="M4 14 C 60 4, 140 22, 200 10 S 300 18, 316 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="hero-draw"
              style={{
                ["--draw-length" as string]: "360",
                animationDelay: "1s",
              }}
            />
          </svg>
        </span>
      </h1>

      {/* Disciplines as standalone tags */}
      <div
        className="hero-rise flex flex-wrap items-center gap-x-3 gap-y-2 max-w-2xl"
        style={{ animationDelay: "0.4s" }}
      >
        <span className="font-serif italic text-[clamp(1.1rem,1.6vw,1.4rem)] text-white">
          Visual Arts
        </span>
        <span className="text-livia-mustard text-xl">✦</span>
        <span className="font-serif italic text-[clamp(1.1rem,1.6vw,1.4rem)] text-white">
          Illustration
        </span>
        <span className="text-livia-dark-coral text-xl">✦</span>
        <span className="font-serif italic text-[clamp(1.1rem,1.6vw,1.4rem)] text-white">
          Character Design
        </span>
      </div>

      {/* CTA row + rotating stamp */}
      <div
        className="hero-rise mt-4 flex items-center gap-x-8 gap-y-6 max-md:flex-col max-md:items-stretch"
        style={{ animationDelay: "0.55s" }}
      >
        <a
          href="#portfolio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("portfolio");
          }}
          className="btn-primary px-10 py-4 text-base bg-white text-livia-turquoise hover:bg-livia-turquoise hover:text-white max-md:text-center"
        >
          Ver Portfólio →
        </a>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-white/85 underline-offset-8 underline decoration-livia-mustard decoration-2 hover:text-livia-mustard transition-colors duration-300 max-md:text-center"
        >
          Sobre mim
        </a>

        {/* Rotating stamp — wide screens only */}
        <div className="relative ml-auto w-28 h-28 max-xl:hidden">
          <svg
            viewBox="0 0 200 200"
            className="hero-spin absolute inset-0 w-full h-full text-white"
            aria-hidden="true"
          >
            <defs>
              <path
                id="stamp-circle"
                d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
              />
            </defs>
            <text
              fill="currentColor"
              className="font-sans"
              style={{
                fontSize: "18px",
                letterSpacing: "0.28em",
                fontWeight: 600,
              }}
            >
              <textPath href="#stamp-circle">
                PORTFOLIO • 2026 • LIVIA BALLAI •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 text-livia-mustard"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14" />
              <path d="M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
