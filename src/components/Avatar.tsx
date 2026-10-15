import { useEffect, useRef, useState } from "react";
import { useMotion } from "../hooks/useMotion";
import { AvatarArt } from "./AvatarArt";

/** Illustrated avatar: hover, tap or Enter lifts the sunglasses; pupils follow the cursor. */
export function Avatar({ photo }: { photo?: string }) {
  const { off } = useMotion();
  const [up, setUp] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (off || photo) return;
    let busy = false;
    const move = (e: PointerEvent) => {
      if (busy) return;
      busy = true;
      requestAnimationFrame(() => {
        const el = ref.current;
        if (el) {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height * 0.45);
          const m = Math.hypot(dx, dy) || 1;
          const k = Math.min(2.3, (m / 60) * 2.3);
          el.querySelectorAll<SVGElement>(".pp").forEach((p) => {
            p.style.transform = `translate(${(dx / m) * k}px,${(dy / m) * k}px)`;
          });
        }
        busy = false;
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [off, photo]);

  return (
    <div
      ref={ref}
      className={`av${up ? " up" : ""}`}
      role="img"
      tabIndex={0}
      aria-label="Avatar of Piyush. Hover, tap or press Enter to lift the sunglasses."
      onClick={() => setUp((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setUp((v) => !v);
        }
      }}
    >
      <div>{photo ? <img src={photo} alt="Piyush Kumar" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <AvatarArt />}</div>
    </div>
  );
}
