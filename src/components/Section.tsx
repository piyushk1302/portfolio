import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  return (
    <h2 id={id} ref={ref} className={seen ? "in" : ""}>
      {children}
    </h2>
  );
}

/** Fades and lifts its children in once they scroll into view. */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
