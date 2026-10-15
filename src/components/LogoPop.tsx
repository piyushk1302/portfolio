import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LOGO } from "../data/logos";

interface PopState {
  name: string;
  x: number;
  y: number;
}
interface PopCtx {
  show: (name: string, rect: DOMRect, touch: boolean) => void;
  hide: () => void;
}

const Ctx = createContext<PopCtx>({ show: () => undefined, hide: () => undefined });
export const useLogoPop = () => useContext(Ctx);

const lum = (hex: string) => {
  const n = parseInt(hex, 16);
  return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
};

/** One shared tooltip: a brand-colored logo tile that springs in above the hovered tech chip. */
export function LogoPopProvider({ children }: { children: ReactNode }) {
  const [pop, setPop] = useState<PopState | null>(null);
  const timer = useRef(0);
  const hide = useCallback(() => setPop(null), []);
  const show = useCallback((name: string, r: DOMRect, touch: boolean) => {
    if (!LOGO[name]) return;
    window.clearTimeout(timer.current);
    const x = Math.min(Math.max(r.left + r.width / 2, 44), window.innerWidth - 44);
    setPop({ name, x, y: r.top > 100 ? r.top - 86 : r.bottom + 8 });
    if (touch) timer.current = window.setTimeout(() => setPop(null), 1600);
  }, []);
  const logo = pop ? LOGO[pop.name] : null;
  return (
    <Ctx.Provider value={{ show, hide }}>
      {children}
      <AnimatePresence>
        {pop && logo && (
          <motion.div
            key={pop.name}
            className="lp on"
            aria-hidden="true"
            style={{ left: pop.x, top: pop.y, x: "-50%" }}
            initial={{ opacity: 0, scale: 0.4, rotate: -14, y: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
          >
            <i style={{ background: `#${logo[0]}`, color: lum(logo[0]) > 0.6 ? "#111" : "#fff" }}>
              {logo[1].length > 5 ? (
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={logo[1]} />
                </svg>
              ) : (
                logo[1]
              )}
            </i>
            <b>{pop.name}</b>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
