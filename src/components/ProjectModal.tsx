import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { PROJECTS, type Project } from "../data/content";
import { TechChip } from "./TechChip";

const isUrl = (u?: string): u is string => !!u && /^https?:\/\//.test(u);
const close = () => { window.location.hash = "work"; };
const go = (slug: string) => { window.location.hash = `p-${slug}`; };

export function ProjectModal({ slug }: { slug: string }) {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  const p: Project | undefined = PROJECTS[i];
  const overlay = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.classList.add("lock");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lock");
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  useEffect(() => {
    overlay.current?.scrollTo(0, 0);
    closeBtn.current?.focus();
  }, [slug]);

  if (!p) return null;
  const prev = PROJECTS[(i + PROJECTS.length - 1) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <motion.div
      ref={overlay}
      className="ov on"
      role="dialog"
      aria-modal="true"
      aria-label={`${p.name} project details`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <motion.div
        className="pn"
        initial={{ opacity: 0, y: 48, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <div key={p.slug}>
          <div className="ph">
            <div className="lg">{p.name[0]}</div>
            <div>
              <div className="nm">{p.name}</div>
              <div className="rl">{p.role}</div>
            </div>
            <button ref={closeBtn} className="x" type="button" aria-label="Close project details" onClick={close}>
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <h2>{p.name}</h2>
          <p>{p.overview}</p>
          <h3>The problem</h3>
          <p>{p.problem}</p>
          <h3>How it works</h3>
          <ul className="stp">
            {p.steps.map((s, k) => (
              <li key={s.title} style={{ "--i": k } as React.CSSProperties}>
                <b>{s.title}</b>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
          <h3>What I built</h3>
          <ul className="fx">
            {p.features.map((f, k) => (
              <li key={f} style={{ "--i": k } as React.CSSProperties}>{f}</li>
            ))}
          </ul>
          <h3>Tech used</h3>
          <div className="pt">
            {p.tech.map((t, k) => (
              <span key={t} style={{ display: "contents", "--i": k } as React.CSSProperties}>
                <TechChip name={t} />
              </span>
            ))}
          </div>
          {(isUrl(p.links.repo) || isUrl(p.links.demo)) && (
            <>
              <h3>Links</h3>
              <div className="soc" style={{ margin: 0 }}>
                {isUrl(p.links.repo) && <a href={p.links.repo} rel="noopener noreferrer">Source</a>}
                {isUrl(p.links.demo) && <a href={p.links.demo} rel="noopener noreferrer">Live demo</a>}
              </div>
            </>
          )}
          <div className="pf">
            <button className="cs" type="button" onClick={() => go(prev.slug)}>← {prev.name}</button>
            <button className="cs" type="button" onClick={() => go(next.slug)}>
              {next.name} <span>→</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
