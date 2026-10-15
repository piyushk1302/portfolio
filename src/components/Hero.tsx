import { ME, HEADLINE, PHRASES } from "../data/content";
import { useMotion } from "../hooks/useMotion";
import { useScramble } from "../hooks/useScramble";
import { useTyping } from "../hooks/useTyping";
import { Avatar } from "./Avatar";
import { TechChip } from "./TechChip";

const list = (names: string[]) =>
  names.map((n, i) => (
    <span key={n}>
      <TechChip name={n} />
      {i < names.length - 1 ? ", " : ""}
    </span>
  ));

export function Hero() {
  const { off } = useMotion();
  const typed = useTyping(PHRASES, off);
  const { refs, run } = useScramble(HEADLINE, off);
  return (
    <>
      <div className="hd">
        <Avatar photo={ME.avatar || undefined} />
        <div>
          <div className="hi">
            Hi, I'm Piyush<i></i>Open to work
          </div>
          <div className="hi" style={{ marginTop: 6 }}>
            Bengaluru · GenAI intern at Mindmatrix
          </div>
        </div>
      </div>
      <h1 aria-label={HEADLINE.join(" ")} onPointerEnter={run}>
        {HEADLINE.map((line, i) => (
          <span key={line}>
            <b ref={(el) => { refs.current[i] = el; }}>{line}</b>
          </span>
        ))}
      </h1>
      <div className="ty" aria-hidden="true">
        I build <span>{typed}</span>
        <u></u>
      </div>
      <div className="bio">
        <p>
          I work across {list(["React", "Node.js", "Express", "PostgreSQL"])} and build RAG systems with {list(["LangChain", "OpenAI API", "pgvector"])}. I write{" "}
          {list(["TypeScript", "Python", "Java"])} and <TechChip name="C++" />.
        </p>
      </div>
      <div className="soc">
        <a className="pri" href="#work">View projects</a>
        <a href={`mailto:${ME.email}`}>Email me</a>
        {ME.resumePdf && <a href={ME.resumePdf} download>Resume</a>}
        <a href={ME.github} rel="noopener noreferrer">GitHub</a>
        <a href={ME.linkedin} rel="noopener noreferrer">LinkedIn</a>
      </div>
    </>
  );
}
