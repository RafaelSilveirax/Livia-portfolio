import { cn } from "../../lib/utils.js";
import { navSections } from "./menuData.js";

type Props = {
  onNavigate: (section: string) => void;
  scrolled?: boolean;
};

function NavLinks({ onNavigate, scrolled }: Props) {
  return (
    <div className={cn(
      "flex w-full justify-around items-center px-8 h-[54px] transition-all duration-500",
      scrolled && "glass-nav shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-lg"
    )}>
      {navSections.map((sec) => (
        <a
          key={sec}
          href={`#${sec}`}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(sec);
          }}
          className="font-montserrat text-white text-sm transition-colors duration-200 font-semibold uppercase tracking-wider hover:text-livia-turquoise"
        >
          {sec}
        </a>
      ))}
    </div>
  );
}

export default NavLinks;
