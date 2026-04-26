import {
  IoLogoLinkedin,
  IoLogoBehance,
  IoLogoInstagram,
} from "react-icons/io5";

const availabilityTags = ["Freelance", "Remoto", "Híbrido", "CLT"];

const socialLinks = [
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

function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <p className="font-sans font-medium text-[1.02rem] leading-[1.8] text-white/70 max-w-sm">
        Estou aberta a novos projetos, freelas e oportunidades full-time. Se
        você tem um produto para construir ou uma equipe que precisa de reforço
        criativo, me manda uma mensagem.
      </p>

      <div className="flex flex-col gap-3">
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/35">
          Disponível para
        </span>
        <div className="flex flex-wrap gap-2">
          {availabilityTags.map((tag) => (
            <span
              key={tag}
              className="glass-tag font-sans text-sm font-medium text-white/85 tracking-wide px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 mt-auto">
        {socialLinks.map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="glass-social flex items-center gap-2 font-sans text-sm font-medium text-white/60 px-4 py-2 rounded-lg transition-colors duration-200 hover:text-livia-turquoise"
          >
            <Icon size={18} />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
