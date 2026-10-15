import { useEffect, useState } from "react";

const read = (): string | null => {
  const m = window.location.hash.match(/^#p-(\w+)/);
  return m ? m[1] : null;
};

/** Project detail is routed through the URL hash, e.g. #p-learnlens, so it can be shared. */
export function useHashProject(): string | null {
  const [slug, setSlug] = useState<string | null>(read);
  useEffect(() => {
    const onChange = () => setSlug(read());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return slug;
}
