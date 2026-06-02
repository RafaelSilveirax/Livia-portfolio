import { IoArrowDown, IoSparkles } from "react-icons/io5";

function HeroCard() {
  return (
    <div className="relative flex flex-col items-center text-center gap-6 max-w-[860px] max-md:max-w-full max-md:gap-5">
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="hero-float absolute top-[calc(50%-6rem)] -right-32 w-24 h-24 text-livia-copper max-lg:top-[42%] max-lg:-right-2 max-lg:w-16 max-lg:h-16"
        style={{ ["--rot" as string]: "12deg" }}
      >
        <path
          d="M50 30 L54 46 L70 50 L54 54 L50 70 L46 54 L30 50 L46 46 Z"
          fill="currentColor"
        />
        <circle
          cx="50"
          cy="50"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="3 5"
        />
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 6"
          opacity="0.7"
        />
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="hero-float absolute top-[calc(50%-6rem)] -left-32 w-24 h-24 text-livia-copper max-lg:top-[42%] max-lg:-left-2 max-lg:w-16 max-lg:h-16"
        style={{ ["--rot" as string]: "-12deg" }}
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

      {/* Eyebrow with thick rule */}
      <div
        className="hero-rise flex items-center justify-center gap-4 max-sm:flex-col max-sm:gap-2"
        style={{ animationDelay: "0.05s" }}
      >
        <span className="text-livia-mustard text-3xl" aria-hidden="true">
          ✦
        </span>
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
              className="hero-draw-loop"
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
        className="hero-rise flex flex-wrap items-center justify-center gap-x-3 gap-y-2 max-w-2xl"
        style={{ animationDelay: "0.4s" }}
      >
        <span className="font-serif italic text-[clamp(1.1rem,1.6vw,1.4rem)] text-white">
          Visual Arts
        </span>
        <span className="text-livia-mustard text-xl">✦</span>
        <span className="font-serif italic text-[clamp(1.1rem,1.6vw,1.4rem)] text-white">
          Video Edition
        </span>
        <span className="text-livia-dark-coral text-xl">✦</span>
        <span className="font-serif italic text-[clamp(1.1rem,1.6vw,1.4rem)] text-white">
          Branding
        </span>
      </div>

      {/* Rotating stamp row */}
      <div
        className="hero-rise mt-4 flex items-center justify-center gap-x-8 gap-y-6 max-md:flex-col max-md:items-stretch"
        style={{ animationDelay: "0.55s" }}
      >
        {/* Rotating stamp — wide screens only */}
        <div className="relative ml-auto w-28 h-28 max-md:mx-auto max-md:w-24 max-md:h-24">
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
            <IoSparkles
              className="w-7 h-7 text-livia-mustard"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
