import type { CarouselSection } from "./components/PortfolioCarousel.js";

import graphicDesign1 from "../../assets/graphic-design/1-Beleza e Saúde-Photoshop.jpg";
import graphicDesign2 from "../../assets/graphic-design/2-Vestimenta-Procreate_Canva.png";
import graphicDesign3 from "../../assets/graphic-design/3-Poster_Illustration-Procreate.jpg";
import graphicDesign4 from "../../assets/graphic-design/4-Logo Design-Procreate_Canva.jpg";
import graphicDesign5 from "../../assets/graphic-design/5-Mídias Sociais-Canva.jpg";
import graphicDesign6 from "../../assets/graphic-design/6-ID.Visual-Photoshop_Illustrator.png";
import graphicDesign7 from "../../assets/graphic-design/7-Logo_Mockup-Photoshop_Illustrator.png";

import illustration1 from "../../assets/illustration/1-ConceptArt-Procreate.jpg";
import illustration2 from "../../assets/illustration/2-2D Book Illustration-Procreate.jpg";
import illustration3 from "../../assets/illustration/3-Wall Painting-Procreate.jpg";
import illustration4 from "../../assets/illustration/4-wall Painting-Procreate.jpg";
import illustration5 from "../../assets/illustration/5-Character Design-Procreate.png";
import illustration6 from "../../assets/illustration/6-Mascot-Procreate.jpg";
import illustration7 from "../../assets/illustration/7-2D Illustration-Procreate.jpg";
import illustration8 from "../../assets/illustration/8-Book Character-Procreate.png";
import illustration9 from "../../assets/illustration/9-Cover-Procreate.jpg";
import illustration10 from "../../assets/illustration/10-Wall Painting-Procreate.jpg";

import canvas1 from "../../assets/canvas/1 - Renascer-Tinta Acrílica sobre Papel paraná.jpg";
import canvas2 from "../../assets/canvas/2 -Onça-Arte digital em Quadro.png";
import canvas3 from "../../assets/canvas/3 - Mulher-Arte digital em quadro.png";
import canvas4 from "../../assets/canvas/4- Dourado-Arte digital em Quadro.png";
import canvas5 from "../../assets/canvas/5 -Noturno-Tinta Acrílica sobre madeira.jpg";
import canvas6 from "../../assets/canvas/6 - Cabeça para baixo-Tinta Acrílica sobre papelão.jpg";

import prints1 from "../../assets/prints/agony.png";
import prints2 from "../../assets/prints/deeplove.png";
import prints3 from "../../assets/prints/lifeisart.png";
import prints4 from "../../assets/prints/slay.png";
import prints5 from "../../assets/prints/song.png";
import prints6 from "../../assets/prints/witch.png";

export const portfolioSections: CarouselSection[] = [
  {
    id: "graphic-design",
    title: "Design Gráfico",
    cards: [
      {
        id: "gd-1",
        image: graphicDesign1,
        title: "Beleza e Saúde",
        subtitle: "Photoshop",
      },
      {
        id: "gd-2",
        image: graphicDesign2,
        title: "Vestimenta",
        subtitle: "Procreate Canva",
      },
      {
        id: "gd-3",
        image: graphicDesign3,
        title: "Poster Illustration",
        subtitle: "Procreate",
      },
      {
        id: "gd-4",
        image: graphicDesign4,
        title: "Logo Design",
        subtitle: "Procreate Canva",
      },
      {
        id: "gd-5",
        image: graphicDesign5,
        title: "Mídias Sociais",
        subtitle: "Canva",
      },
      {
        id: "gd-6",
        image: graphicDesign6,
        title: "ID.Visual",
        subtitle: "Photoshop Illustrator",
      },
      {
        id: "gd-7",
        image: graphicDesign7,
        title: "Logo Mockup",
        subtitle: "Photoshop Illustrator",
      },
    ],
  },
  {
    id: "illustration",
    title: "Ilustrações",
    cards: [
      {
        id: "il-1",
        image: illustration1,
        title: "ConceptArt",
        subtitle: "Procreate",
      },
      {
        id: "il-2",
        image: illustration2,
        title: "2D Book Illustration",
        subtitle: "Procreate",
      },
      {
        id: "il-3",
        image: illustration3,
        title: "Wall Painting",
        subtitle: "Procreate",
      },
      {
        id: "il-4",
        image: illustration4,
        title: "Wall Painting",
        subtitle: "Procreate",
      },
      {
        id: "il-5",
        image: illustration5,
        title: "Character Design",
        subtitle: "Procreate",
      },
      {
        id: "il-6",
        image: illustration6,
        title: "Mascot",
        subtitle: "Procreate",
      },
      {
        id: "il-7",
        image: illustration7,
        title: "2D Illustration",
        subtitle: "Procreate",
      },
      {
        id: "il-8",
        image: illustration8,
        title: "Book Character",
        subtitle: "Procreate",
      },
      {
        id: "il-9",
        image: illustration9,
        title: "Cover",
        subtitle: "Procreate",
      },
      {
        id: "il-10",
        image: illustration10,
        title: "Wall Painting",
        subtitle: "Procreate",
      },
    ],
  },
  {
    id: "canvas",
    title: "Telas",
    cards: [
      {
        id: "ca-1",
        image: canvas1,
        title: "Renascer",
        subtitle: "Tinta Acrílica sobre Papel paraná",
      },
      {
        id: "ca-2",
        image: canvas2,
        title: "Onça",
        subtitle: "Arte digital em Quadro",
      },
      {
        id: "ca-3",
        image: canvas3,
        title: "Mulher",
        subtitle: "Arte digital em quadro",
      },
      {
        id: "ca-4",
        image: canvas4,
        title: "Dourado",
        subtitle: "Arte digital em Quadro",
      },
      {
        id: "ca-5",
        image: canvas5,
        title: "Noturno",
        subtitle: "Tinta Acrílica sobre madeira",
      },
      {
        id: "ca-6",
        image: canvas6,
        title: "Cabeça para baixo",
        subtitle: "Tinta Acrílica sobre papelão",
      },
    ],
  },
  {
    id: "prints",
    title: "Prints",
    cards: [
      {
        id: "pr-1",
        image: prints1,
        title: "Agony",
        subtitle: "Photoshop",
      },
      {
        id: "pr-2",
        image: prints2,
        title: "Deeplove",
        subtitle: "Photoshop",
      },
      {
        id: "pr-3",
        image: prints3,
        title: "Lifeisart",
        subtitle: "Photoshop",
      },
      {
        id: "pr-4",
        image: prints4,
        title: "Slay",
        subtitle: "Photoshop",
      },
      {
        id: "pr-5",
        image: prints5,
        title: "Song",
        subtitle: "Photoshop",
      },
      {
        id: "pr-6",
        image: prints6,
        title: "Witch",
        subtitle: "Photoshop",
      },
    ],
  },
  {
    id: "video-editing",
    title: "Edição de Vídeo",
    kind: "video",
    cards: [
      {
        id: "vid-1",
        videoId: "UYXMBkMz4Ho",
        title: "Florstry",
        subtitle: "Davinci Resolve",
      },
      {
        id: "vid-2",
        videoId: "xYuNhRN1s9Y",
        title: "Poetas como eu | Laura",
        subtitle: "Capcut",
      },
      {
        id: "vid-3",
        videoId: "y0-LNL7gvsU",
        title: "Saúde e Beleza-Teste",
        subtitle: "Davinci Resolve",
      },
      {
        id: "vid-4",
        videoId: "RgAs4dN4eR0",
        title: "Tajikistan-Teste",
        subtitle: "Capcut",
      },
      {
        id: "vid-5",
        videoId: "W7LV5SOxxBE",
        title: "Rillos-Teste",
        subtitle: "Davinci Resolve",
      },
    ],
  },
];
