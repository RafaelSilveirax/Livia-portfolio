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
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div className="mx-6 mt-2 mb-4 px-6 py-5 flex flex-col gap-5 glass-mobile border border-white/12 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
        <div className="flex flex-col gap-1">
          {navSections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(sec);
              }}
              className="border-b border-white/8 last:border-b-0 text-white font-montserrat text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-left py-[0.65rem] transition-[color,opacity] duration-200 hover:text-livia-turquoise hover:opacity-90"
            >
              {sec}
            </a>
          ))}
        </div>

        <div className="h-px bg-white/10" />

        <SocialLinks
          className="flex gap-5 items-center"
          linkClassName="text-white/75 transition-colors duration-200 flex items-center hover:text-livia-turquoise"
        />
      </div>
    </div>
  );
}

export default MobileMenu;
