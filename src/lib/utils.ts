import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const container = document.getElementById("scroll-container");
  const target = document.getElementById(id);
  if (!container || !target) return;
  const top = target.getBoundingClientRect().top + container.scrollTop;
  container.scrollTo({ top, behavior: "smooth" });
}
