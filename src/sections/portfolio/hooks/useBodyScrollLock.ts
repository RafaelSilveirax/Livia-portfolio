import { useEffect } from "react";

export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const mainEl = document.querySelector("main");
    const prevMain = mainEl?.style.overflow ?? "";
    const prevBody = document.body.style.overflow;

    if (mainEl) mainEl.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      if (mainEl) mainEl.style.overflow = prevMain;
      document.body.style.overflow = prevBody;
    };
  }, [active]);
}
