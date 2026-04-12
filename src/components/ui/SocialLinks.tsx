import { socialLinks } from "./menuData.js";

type Props = {
  className?: string;
  linkClassName?: string;
};

function SocialLinks({ className, linkClassName }: Props) {
  return (
    <div className={className}>
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={linkClassName}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
