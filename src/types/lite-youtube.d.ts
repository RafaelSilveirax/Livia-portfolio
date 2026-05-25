import type { DetailedHTMLProps, HTMLAttributes } from "react";

type LiteYouTubeAttributes = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  videoid: string;
  playlabel?: string;
  params?: string;
  videotitle?: string;
  posterquality?:
    | "default"
    | "mqdefault"
    | "hqdefault"
    | "sddefault"
    | "maxresdefault";
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "lite-youtube": LiteYouTubeAttributes;
    }
  }
}

export {};
