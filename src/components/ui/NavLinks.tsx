import { cn } from "../../lib/utils.js";
import { navSections } from "./menuData.js";
import NavItem from "./NavItem.js";

type Props = {
  onNavigate: (section: string) => void;
  scrolled?: boolean;
};

const NAV_ITEM_CLASS =
  "font-montserrat text-white text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-livia-turquoise";

function NavLinks({ onNavigate, scrolled }: Props) {
  return (
    <div
      className={cn(
        "flex w-full justify-around items-center px-8 h-[54px] transition-all duration-500",
        scrolled && "glass-nav shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-lg",
      )}
    >
      {navSections.map(({ id, label }) => (
        <NavItem
          key={id}
          id={id}
          label={label}
          onNavigate={onNavigate}
          className={NAV_ITEM_CLASS}
        />
      ))}
    </div>
  );
}

export default NavLinks;
