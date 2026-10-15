import { MARQUEE } from "../data/content";
import { TechChip } from "./TechChip";

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="mq" aria-hidden="true">
      <div>
        {items.map((n, i) => (
          <TechChip key={`${n}-${i}`} name={n} className="" />
        ))}
      </div>
    </div>
  );
}
