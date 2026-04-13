import { navSections } from "./menuData.js";

type Props = {
  onNavigate: (section: string) => void;
};

function NavLinks({ onNavigate }: Props) {
  return (
    <div className="glass-nav border-b border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-lg flex w-full justify-around items-center h-[54px] px-8">
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
