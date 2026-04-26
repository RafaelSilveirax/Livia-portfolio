import { cn } from "../../lib/utils.js";

type Props = {
  id: string;
  label: string;
  onNavigate: (id: string) => void;
  className?: string;
  isActive?: boolean;
};

function NavItem({ id, label, onNavigate, className, isActive }: Props) {
  return (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(id);
      }}
      className={cn(
        className,
        "px-4 py-1.5 rounded-lg transition-all duration-300",
      )}
      style={{
        background: isActive ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0)",
        backdropFilter: isActive ? "blur(8px)" : "none",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      {label}
    </a>
  );
}

export default NavItem;
