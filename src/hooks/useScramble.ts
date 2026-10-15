import { useCallback, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&@";

/** Decodes heading lines letter by letter. Writes to the DOM directly to avoid re-renders. */
export function useScramble(lines: string[], off: boolean) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const busy = useRef(false);
  const run = useCallback(() => {
    if (busy.current || off) return;
    busy.current = true;
    const start = performance.now();
    const frame = (now: number) => {
      const t = now - start;
      let done = true;
      refs.current.forEach((el, k) => {
        if (!el) return;
        el.textContent = [...lines[k]]
          .map((ch, i) => {
            if (ch === " " || ch === "-") return ch;
            if (t >= (i + k * 6) * 45 + 300) return ch;
            done = false;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });
      if (done) busy.current = false;
      else requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [lines, off]);
  useEffect(() => {
    const id = window.setTimeout(run, 150);
    return () => window.clearTimeout(id);
  }, [run]);
  return { refs, run };
}
