import { IoLogoLinkedin, IoLogoBehance, IoLogoInstagram } from "react-icons/io5";

const availabilityTags = ["Freelance", "Remoto", "Híbrido", "CLT"];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/l%C3%ADvia-ballai-9b650b1a2/",
    icon: <IoLogoLinkedin size={18} />,
    label: "LinkedIn",
  },
  {
    href: "https://www.behance.net/liviaballaf10d",
    icon: <IoLogoBehance size={18} />,
    label: "Behance",
  },
  {
    href: "https://www.instagram.com/livia_zab/",
    icon: <IoLogoInstagram size={18} />,
    label: "Instagram",
  },
];

const glassTag: React.CSSProperties = {
  background: "color-mix(in srgb, white 10%, transparent)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid color-mix(in srgb, var(--color-livia-turquoise) 35%, transparent)",
};

const glassSocial: React.CSSProperties = {
  background: "color-mix(in srgb, white 7%, transparent)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid color-mix(in srgb, white 15%, transparent)",
};

function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <p className="font-montserrat font-medium text-white/70 text-[1.02rem] leading-[1.8] max-w-sm">
        Estou aberta a novos projetos, freelas e oportunidades full-time. Se
        você tem um produto para construir ou uma equipe que precisa de reforço
        criativo, me manda uma mensagem.
      </p>

      <div className="flex flex-col gap-3">
        <span className="font-montserrat font-semibold tracking-widest uppercase text-white/35 text-xs">
          Disponível para
        </span>
        <div className="flex flex-wrap gap-2">
          {availabilityTags.map((tag) => (
            <span
              key={tag}
              className="font-montserrat text-sm font-medium px-4 py-1.5 rounded-full text-white/85 tracking-wide"
              style={glassTag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 mt-auto">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center gap-2 font-montserrat font-medium text-sm px-4 py-2 rounded-lg text-white/60 transition-[background,border-color,color] duration-200 hover:text-livia-turquoise hover:border-livia-turquoise/30"
            style={glassSocial}
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
