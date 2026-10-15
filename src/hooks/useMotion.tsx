import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";

interface MotionCtx {
  off: boolean;
  toggle: () => void;
}

const Ctx = createContext<MotionCtx>({ off: false, toggle: () => undefined });
export const useMotion = () => useContext(Ctx);

/** Follows prefers-reduced-motion by default; the visitor can override it either way. */
export function MotionProvider({ children }: { children: ReactNode }) {
  const [off, setOff] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    document.documentElement.dataset.motion = off ? "off" : "on";
  }, [off]);
  return (
    <Ctx.Provider value={{ off, toggle: () => setOff((v) => !v) }}>
      <MotionConfig reducedMotion={off ? "always" : "never"}>{children}</MotionConfig>
    </Ctx.Provider>
  );
}
