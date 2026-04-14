import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoBehance,
} from "react-icons/io5";

export type NavSection = {
  id: string;
  label: string;
};

export const navSections: NavSection[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export type SocialLink = {
  href: string;
  Icon: React.ComponentType<{ size?: number }>;
  label: string;
};

export const socialLinksData: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/l%C3%ADvia-ballai-9b650b1a2/",
    Icon: IoLogoLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.behance.net/liviaballaf10d",
    Icon: IoLogoBehance,
    label: "Behance",
  },
  {
    href: "https://www.instagram.com/livia_zab/",
    Icon: IoLogoInstagram,
    label: "Instagram",
  },
];
