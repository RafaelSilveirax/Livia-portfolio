import { navSections } from "./menuData.js";
import NavItem from "./NavItem.js";

type Props = {
  onNavigate: (section: string) => void;
  activeSection?: string;
};

const NAV_LINK_CLASS =
  "font-sans text-white text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-livia-turquoise";

function NavLinks({ onNavigate, activeSection }: Props) {
  return (
    <div className="flex w-full items-center justify-around h-[54px] px-8 glass-nav rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
      {navSections.map(({ id, label }) => (
        <NavItem
          key={id}
          id={id}
          label={label}
          onNavigate={onNavigate}
          className={NAV_LINK_CLASS}
          isActive={activeSection === id}
        />
      ))}
    </div>
  );
}

export default NavLinks;
