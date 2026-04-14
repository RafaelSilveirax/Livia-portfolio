type Props = {
  id: string;
  label: string;
  onNavigate: (id: string) => void;
  className?: string;
};

function NavItem({ id, label, onNavigate, className }: Props) {
  return (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(id);
      }}
      className={className}
    >
      {label}
    </a>
  );
}

export default NavItem;
