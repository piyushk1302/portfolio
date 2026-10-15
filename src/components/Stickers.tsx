import { motion } from "framer-motion";
import { STICKERS } from "../data/content";
import { useMotion } from "../hooks/useMotion";

/** Draggable tech stickers in the side margins (hidden below 900px). */
export function Stickers() {
  const { off } = useMotion();
  return (
    <div id="stk" aria-hidden="true" className="hidden min-[900px]:block">
      {STICKERS.map((s, i) => (
        <motion.div
          key={s.name}
          className="st"
          style={{ background: s.bg, color: s.fg, left: `${s.x}%`, top: s.y, rotate: s.r }}
          initial={{ opacity: 0, y: -90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 160, damping: 11, delay: 0.4 + i * 0.1 }}
          drag
          dragMomentum={false}
          whileTap={{ scale: 1.06 }}
        >
          <span
            style={{
              display: "block",
              animation: off ? "none" : `float ${5 + (i % 3)}s ease-in-out ${i * 0.3}s infinite alternate`,
            }}
          >
            {s.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
