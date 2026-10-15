import { useMotion } from "../hooks/useMotion";

export function MotionToggle() {
  const { off, toggle } = useMotion();
  return (
    <button className="mt" type="button" aria-pressed={!off} onClick={toggle}>
      Animations: {off ? "off" : "on"}
    </button>
  );
}
