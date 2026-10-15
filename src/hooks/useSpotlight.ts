import { useEffect } from "react";

export function useSpotlight(off: boolean) {
  useEffect(() => {
    if (off) return;
    let busy = false;
    const move = (e: PointerEvent) => {
      if (busy || e.pointerType === "touch") return;
      busy = true;
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
        document.documentElement.style.setProperty("--my", `${e.clientY}px`);
        busy = false;
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [off]);
}
