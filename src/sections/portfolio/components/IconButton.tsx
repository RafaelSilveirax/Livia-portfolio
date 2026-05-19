import type { MouseEvent, ReactNode } from "react";
import { cn } from "../../../lib/utils.js";

const BASE =
  "flex shrink-0 items-center justify-center rounded-lg border-[1.5px] " +
  "transition-[background-color,border-color,color,opacity] duration-200 " +
  "shadow-[0_2px_8px_rgba(0,0,0,0.15)]";

const ACTIVE =
  "border-white/30 bg-white/90 text-livia-navy-blue cursor-pointer " +
  "hover:bg-livia-turquoise hover:border-livia-turquoise hover:text-white";

const DISABLED =
  "border-white/15 bg-white/30 text-livia-navy-blue/30 cursor-not-allowed";

const SIZES = {
  sm: "w-9 h-9",
  md: "w-11 h-11",
} as const;

type Props = {
  label: string;
  onClick: (e: MouseEvent) => void;
  disabled?: boolean;
  size?: keyof typeof SIZES;
  className?: string;
  children: ReactNode;
};

function IconButton({ label, onClick, disabled, size = "md", className, children }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(BASE, SIZES[size], disabled ? DISABLED : ACTIVE, className)}
    >
      {children}
    </button>
  );
}

export default IconButton;
