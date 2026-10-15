import { Briefcase, Code2, Home, Mail, type LucideIcon } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const ITEMS: { id: string; label: string; Icon: LucideIcon }[] = [
  { id: "home", label: "Home", Icon: Home },
  { id: "exp", label: "Experience", Icon: Briefcase },
  { id: "work", label: "Projects", Icon: Code2 },
  { id: "contact", label: "Contact", Icon: Mail },
];
const IDS = ITEMS.map((i) => i.id);

export function Dock({ inert }: { inert?: boolean }) {
  const active = useActiveSection(IDS);
  return (
    <nav className="dock" aria-label="Sections" inert={inert}>
      {ITEMS.map(({ id, label, Icon }) => (
        <a key={id} href={`#${id}`} className={active === id ? "on" : ""}>
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
