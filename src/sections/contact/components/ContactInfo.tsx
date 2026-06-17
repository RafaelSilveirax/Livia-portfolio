import {
  IoLogoLinkedin,
  IoLogoBehance,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoArrowForward,
} from "react-icons/io5";
import type { IconType } from "react-icons";
import { cn } from "../../../lib/utils.js";

const availabilityTags = [
  {
    label: "Freelance",
    chip: "bg-livia-turquoise/15 text-livia-turquoise ring-livia-turquoise/30",
  },
  {
    label: "Remoto",
    chip: "bg-livia-mustard/15 text-livia-mustard ring-livia-mustard/30",
  },
  {
    label: "Híbrido",
    chip: "bg-livia-copper/15 text-livia-copper ring-livia-copper/30",
  },
  {
    label: "CLT",
    chip: "bg-livia-dark-coral/15 text-livia-dark-coral ring-livia-dark-coral/30",
  },
];

type ContactLink = {
  href: string;
  Icon: IconType;
  label: string;
  value: string;
  badge: string;
};

const contactLinks: ContactLink[] = [
  {
    href: "https://wa.me/5521979797946",
    Icon: IoLogoWhatsapp,
    label: "WhatsApp",
    value: "Chamar agora",
    badge: "bg-livia-turquoise/15 text-livia-turquoise",
  },
  {
    href: "https://www.linkedin.com/in/l%C3%ADvia-ballai-9b650b1a2/",
    Icon: IoLogoLinkedin,
    label: "LinkedIn",
    value: "Lívia Ballai",
    badge: "bg-livia-mustard/15 text-livia-mustard",
  },
  {
    href: "https://www.behance.net/liviaballaf10d",
    Icon: IoLogoBehance,
    label: "Behance",
    value: "Portfólio completo",
    badge: "bg-livia-copper/15 text-livia-copper",
  },
  {
    href: "https://www.instagram.com/livia_zab/",
    Icon: IoLogoInstagram,
    label: "Instagram",
    value: "@livia_zab",
    badge: "bg-livia-dark-coral/15 text-livia-dark-coral",
  },
];

function ContactInfo() {
  return (
    <div className="flex flex-col items-start gap-7">
      <p className="font-sans font-medium text-[1.02rem] leading-[1.8] text-white/70 max-w-md">
        Estou aberta a novos projetos, freelas e oportunidades full-time. Se
        você tem um produto para construir ou uma equipe que precisa de reforço
        criativo, me manda uma mensagem.
      </p>

      <div className="flex flex-col gap-3">
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/35">
          Disponível para
        </span>
        <div className="flex flex-wrap gap-2">
          {availabilityTags.map(({ label, chip }) => (
            <span
              key={label}
              className={cn(
                "inline-flex items-center rounded-full px-3.5 py-1 font-sans text-[0.82rem] font-medium leading-none ring-1 transition-colors",
                chip,
              )}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full glass-form flex flex-col rounded-2xl p-3">
        {contactLinks.map(({ href, Icon, label, value, badge }, index) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} — ${value}`}
            className={cn(
              "group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-white/5",
              index < contactLinks.length - 1 && "border-b border-white/10",
            )}
          >
            <span
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110",
                badge,
              )}
              aria-hidden="true"
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="font-sans text-[0.7rem] font-semibold uppercase tracking-widest text-white/35">
                {label}
              </span>
              <span className="truncate font-serif text-lg leading-tight text-white">
                {value}
              </span>
            </span>
            <IoArrowForward
              className="ml-auto h-5 w-5 shrink-0 text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-livia-turquoise"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
