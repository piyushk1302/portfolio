import { motion } from "framer-motion";
import { GitPullRequest, Layers, Lock, Sparkles, type LucideIcon } from "lucide-react";
import { EDUCATION, EXPERIENCE, PROJECTS, SKILLS, ME, type Project } from "../data/content";
import { Reveal, SectionTitle } from "./Section";
import { TechChip } from "./TechChip";

const isUrl = (u?: string): u is string => !!u && /^https?:\/\//.test(u);

const HL_ICONS: Record<string, LucideIcon> = { ai: Sparkles, ui: Layers, team: GitPullRequest };

export function ExperienceSection() {
  const e = EXPERIENCE;
  return (
    <>
      <SectionTitle id="exp">Experience</SectionTitle>
      <div className="tl">
        <Reveal className="it">
          <div className="top">
            <div className="who">
              <div className="lg">{e.company[0]}</div>
              <div>
                <div className="nm">{e.company}</div>
                <div className="rl">
                  {e.role}
                  <span className="bd2">{e.type}</span>
                </div>
              </div>
            </div>
            <div className="dt">
              {e.dates}
              <span>{e.place}</span>
            </div>
          </div>
          <p className="ds">{e.summary}</p>
          <div className="hl">
            {e.highlights.map((h, i) => {
              const Icon = HL_ICONS[h.icon];
              return (
                <motion.div
                  key={h.title}
                  className="hc"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <span className="hi2">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h4>{h.title}</h4>
                  <p>{h.text}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="cfl" role="note">
            <Lock size={13} aria-hidden="true" />
            <span>{e.confidential}</span>
          </div>
        </Reveal>
      </div>
    </>
  );
}

function ProjectItem({ p }: { p: Project }) {
  return (
    <Reveal className="it">
      <div className="top">
        <div className="who">
          <div className="lg">{p.name[0]}</div>
          <div>
            <div className="nm">{p.name}</div>
            <div className="rl">
              {p.role}
              {p.featured && <span className="fe">Featured</span>}
            </div>
          </div>
        </div>
      </div>
      <p className="ds">{p.summary}</p>
      <div className="tg">
        {p.tech.map((t) => (
          <TechChip key={t} name={t} />
        ))}
      </div>
      <button className="cs" type="button" onClick={() => { window.location.hash = `p-${p.slug}`; }}>
        View details <span>→</span>
      </button>
      {(isUrl(p.links.repo) || isUrl(p.links.demo)) && (
        <div className="pl">
          {isUrl(p.links.repo) && <a href={p.links.repo} rel="noopener noreferrer">Source</a>}
          {isUrl(p.links.demo) && <a href={p.links.demo} rel="noopener noreferrer">Live demo</a>}
        </div>
      )}
    </Reveal>
  );
}

export function ProjectsSection() {
  return (
    <>
      <SectionTitle id="work">Projects</SectionTitle>
      <div className="tl">
        {PROJECTS.map((p) => (
          <ProjectItem key={p.slug} p={p} />
        ))}
      </div>
    </>
  );
}

export function EducationSection() {
  const e = EDUCATION;
  return (
    <>
      <SectionTitle id="edu">Education</SectionTitle>
      <div className="tl">
        <Reveal className="it">
          <div className="top">
            <div className="who">
              <div className="lg">{e.school[0]}</div>
              <div>
                <div className="nm">{e.school}</div>
                <div className="rl">{e.degree}</div>
              </div>
            </div>
            <div className="dt">
              {e.dates}
              <span>{e.note}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}

export function SkillsSection() {
  return (
    <>
      <SectionTitle id="skills">Skills</SectionTitle>
      <Reveal>
        <dl className="gr skl">
          {Object.entries(SKILLS).map(([k, v]) => (
            <div key={k} style={{ display: "contents" }}>
              <dt>{k}</dt>
              <dd>
                {v.map((n) => (
                  <TechChip key={n} name={n} />
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </>
  );
}

export function ContactSection() {
  return (
    <>
      <SectionTitle id="contact">Contact</SectionTitle>
      <Reveal>
        <dl className="gr">
          <dt>Email</dt>
          <dd><a href={`mailto:${ME.email}`}>{ME.email}</a></dd>
          <dt>Phone</dt>
          <dd><a href={`tel:${ME.phone}`}>{ME.phone}</a></dd>
          <dt>Elsewhere</dt>
          <dd>
            <a href={ME.github} rel="noopener noreferrer">GitHub</a> · <a href={ME.linkedin} rel="noopener noreferrer">LinkedIn</a>
          </dd>
        </dl>
      </Reveal>
    </>
  );
}
