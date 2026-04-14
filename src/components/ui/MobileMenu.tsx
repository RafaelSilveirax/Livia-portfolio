import { cn } from "../../lib/utils.js";
import { navSections } from "./menuData.js";
import SocialLinks from "./SocialLinks.js";

type Props = {
  isOpen: boolean;
  onNavigate: (section: string) => void;
};

function MobileMenu({ isOpen, onNavigate }: Props) {
  return (
    <div
      id="mobile-menu"
      className={cn(
        "absolute top-full left-0 right-0 transition-[transform,opacity] duration-300 ease-in-out",
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none",
      )}
      aria-hidden={!isOpen}
    >
      <div className="w-full h-screen px-6 py-5 flex flex-col gap-5 glass-mobile">
        <div className="flex flex-col gap-2">
          {navSections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(sec);
              }}
              className="border-b border-white/8 last:border-b-0 text-white font-montserrat text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-left py-4 transition-[color,opacity] duration-200 hover:text-livia-turquoise hover:opacity-90"
            >
              {sec}
            </a>
          ))}
        </div>

        <div className="h-px bg-white/10" />

        <SocialLinks
          className="flex gap-8 items-center"
          linkClassName="text-white/75 transition-colors duration-200 flex items-center hover:text-livia-turquoise"
          iconSize={32}
        />
      </div>
    </div>
  );
}

export default MobileMenu;
