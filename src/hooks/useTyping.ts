import { useEffect, useState } from "react";

export function useTyping(phrases: string[], off: boolean): string {
  const [text, setText] = useState(phrases[0]);
  useEffect(() => {
    if (off) {
      setText(phrases[0]);
      return;
    }
    let p = 0;
    let c = 0;
    let del = false;
    let id = 0;
    const tick = () => {
      const w = phrases[p];
      c += del ? -1 : 1;
      setText(w.slice(0, Math.max(c, 0)));
      let d = del ? 28 : 55;
      if (!del && c === w.length) {
        del = true;
        d = 1600;
      } else if (del && c <= 0) {
        del = false;
        p = (p + 1) % phrases.length;
        d = 350;
      }
      id = window.setTimeout(tick, d);
    };
    tick();
    return () => window.clearTimeout(id);
  }, [off, phrases]);
  return text;
}
