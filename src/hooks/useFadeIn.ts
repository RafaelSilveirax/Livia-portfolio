import { useEffect, useRef } from "react";

export function useFadeIn(threshold = 0.01) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyVisible) {
      el.classList.add("fade-visible");
      return;
    }

    const root = document.getElementById("scroll-container");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          el.classList.add("fade-visible");
          observer.disconnect();
        }
      },
      { root, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
