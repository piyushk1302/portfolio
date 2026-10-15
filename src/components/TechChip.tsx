import { useLogoPop } from "./LogoPop";

interface Props {
  name: string;
  className?: string;
}

export function TechChip({ name, className = "ch" }: Props) {
  const { show, hide } = useLogoPop();
  return (
    <span
      className={className}
      onPointerEnter={(e) => show(name, e.currentTarget.getBoundingClientRect(), e.pointerType === "touch")}
      onPointerLeave={(e) => e.pointerType !== "touch" && hide()}
    >
      {name}
    </span>
  );
}
