import { IoLogoLinkedin, IoLogoBehance, IoLogoInstagram } from "react-icons/io5";

const availabilityTags = ["Freelance", "Remoto", "Híbrido", "CLT"];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/l%C3%ADvia-ballai-9b650b1a2/",
    icon: <IoLogoLinkedin size={20} />,
    label: "LinkedIn",
  },
  {
    href: "https://www.behance.net/liviaballaf10d",
    icon: <IoLogoBehance size={20} />,
    label: "Behance",
  },
  {
    href: "https://www.instagram.com/livia_zab/",
    icon: <IoLogoInstagram size={20} />,
    label: "Instagram",
  },
];

function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <p className="font-montserrat font-medium text-foreground/80 text-[1.02rem] leading-[1.75] max-w-sm">
        Estou aberta a novos projetos, freelas e oportunidades full-time. Se
        você tem um produto para construir ou uma equipe que precisa de reforço
        criativo, me manda uma mensagem.
      </p>

      <div className="flex flex-col gap-3">
        <span className="font-montserrat font-semibold tracking-[0.12em] uppercase text-foreground/40 text-xs">
          Disponível para
        </span>
        <div className="flex flex-wrap gap-2">
          {availabilityTags.map((tag) => (
            <span
              key={tag}
              className="font-montserrat text-sm font-medium px-4 py-1.5 rounded-full border border-foreground/20 text-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-auto">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center gap-2 font-montserrat font-medium text-sm px-4 py-2.5 rounded-lg border border-foreground/20 text-foreground/70 transition-[border-color,color] duration-200 hover:border-livia-turquoise hover:text-livia-turquoise"
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
