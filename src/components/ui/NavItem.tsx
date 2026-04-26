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
        "px-4 py-1.5 rounded-lg transition-all duration-300",
        isActive && "bg-white/20 backdrop-blur-md",
        className,
      )}
    >
      {label}
    </a>
  );
}

export default NavItem;
