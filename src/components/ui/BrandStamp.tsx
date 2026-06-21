import { useId } from "react";
import { IoSparkles } from "react-icons/io5";
import { cn } from "../../lib/utils.js";

type BrandStampProps = {
  className?: string;
  label?: string;
};

function BrandStamp({
  className,
  label = "PORTFOLIO • 2026 • LIVIA BALLAI •",
}: BrandStampProps) {
  const pathId = `stamp-${useId().replace(/:/g, "")}`;

  return (
    <div className={cn("relative w-28 h-28", className)}>
      <svg
        viewBox="0 0 200 200"
        className="hero-spin absolute inset-0 w-full h-full text-white"
        aria-hidden="true"
      >
        <defs>
          <path
            id={pathId}
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text
          fill="currentColor"
          className="font-sans"
          style={{ fontSize: "18px", letterSpacing: "0.28em", fontWeight: 600 }}
        >
          <textPath href={`#${pathId}`}>{label}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <IoSparkles className="w-7 h-7 text-livia-mustard" aria-hidden="true" />
      </div>
    </div>
  );
}

export default BrandStamp;
