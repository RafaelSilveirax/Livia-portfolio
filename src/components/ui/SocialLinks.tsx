import { socialLinksData } from "./menuData.js";

type Props = {
  className?: string;
  linkClassName?: string;
  iconSize?: number;
};

function SocialLinks({ className, linkClassName, iconSize = 24 }: Props) {
  return (
    <div className={className}>
      {socialLinksData.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={linkClassName}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
