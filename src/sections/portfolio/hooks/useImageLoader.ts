import { useEffect, useState } from "react";

export type LoadedImage = { src: string; ratio: number };

export function useImageLoader(src: string | null): LoadedImage | null {
  const [loaded, setLoaded] = useState<LoadedImage | null>(null);

  useEffect(() => {
    if (!src) {
      setLoaded(null);
      return;
    }
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      setLoaded({ src, ratio: img.naturalWidth / img.naturalHeight });
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  return loaded;
}
