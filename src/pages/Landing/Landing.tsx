import { Menu } from "../../components/menu/Menu.js";
import { HeroSection } from "../../components/sections/HeroSection.js";
import { AboutSection } from "../../components/sections/AboutSection.js";
import {
  PortfolioCarousel,
  type CarouselSection,
} from "../../components/carousel/PortfolioCarousel.js";
import liviaFundo from "../../assets/liviafundo.png";
import styles from "./Landing.module.css";

const carouselSections: CarouselSection[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    cards: [
      {
        id: "card-1",
        image: liviaFundo,
        title: "Graphic Design",
        subtitle: "Photoshop, Illustrator",
      },
      {
        id: "card-2",
        image: liviaFundo,
        title: "Illustration",
        subtitle: "Illustrator",
      },
      {
        id: "card-3",
        image: liviaFundo,
        title: "Rosto & Cakes",
        subtitle: "Food Photography",
      },
      {
        id: "card-7",
        image: liviaFundo,
        title: "Branding",
        subtitle: "Visual Identity",
      },
      {
        id: "card-8",
        image: liviaFundo,
        title: "Packaging",
        subtitle: "Product Design",
      },
    ],
  },
  {
    id: "illustration",
    title: "Illustration",
    cards: [
      {
        id: "card-4",
        image: liviaFundo,
        title: "Portrait",
        subtitle: "Photoshop",
      },
      {
        id: "card-5",
        image: liviaFundo,
        title: "Photo & Illustration",
        subtitle: "Photoshop, Illustrator",
      },
      {
        id: "card-6",
        image: liviaFundo,
        title: "Photoshop & Procreate",
        subtitle: "Photoshop, Procreate",
      },
      {
        id: "card-9",
        image: liviaFundo,
        title: "Editorial",
        subtitle: "Illustration",
      },
      {
        id: "card-10",
        image: liviaFundo,
        title: "Concept Art",
        subtitle: "Character Design",
      },
    ],
  },
  {
    id: "visual-arts",
    title: "Visual Arts",
    cards: [
      {
        id: "card-11",
        image: liviaFundo,
        title: "Photograph",
        subtitle: "Studio",
      },
      {
        id: "card-12",
        image: liviaFundo,
        title: "Photo & Illustrator",
        subtitle: "Mixed Media",
      },
      {
        id: "card-13",
        image: liviaFundo,
        title: "Photoshop & Procreate",
        subtitle: "Digital Painting",
      },
    ],
  },
  {
    id: "character-design",
    title: "Character Design",
    cards: [
      {
        id: "card-14",
        image: liviaFundo,
        title: "Photograph & Illustrator",
        subtitle: "Concept Art",
      },
      {
        id: "card-15",
        image: liviaFundo,
        title: "Photo & Procreate",
        subtitle: "Character Sheet",
      },
      {
        id: "card-16",
        image: liviaFundo,
        title: "Photoshop & Procreate",
        subtitle: "Character Design",
      },
    ],
  },
];
export function Landing() {
  return (
    <main className={styles.page}>
      <Menu />
      <HeroSection />
      <AboutSection />
      <PortfolioCarousel sections={carouselSections} />
      <div id="contact" className={styles.anchor} aria-hidden="true" />
    </main>
  );
}
