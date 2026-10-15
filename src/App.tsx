import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ContactSection, EducationSection, ExperienceSection, ProjectsSection, SkillsSection } from "./components/Timeline";
import { Dock } from "./components/Dock";
import { Hero } from "./components/Hero";
import { LogoPopProvider } from "./components/LogoPop";
import { Marquee } from "./components/Marquee";
import { MotionToggle } from "./components/MotionToggle";
import { ProjectModal } from "./components/ProjectModal";
import { Stickers } from "./components/Stickers";
import { useHashProject } from "./hooks/useHashProject";
import { MotionProvider, useMotion } from "./hooks/useMotion";
import { useSpotlight } from "./hooks/useSpotlight";

function Page() {
  const { off } = useMotion();
  const open = useHashProject();
  const { scrollYProgress } = useScroll();
  useSpotlight(off);
  return (
    <div className="relative">
      <motion.div className="pb" aria-hidden="true" style={{ scaleX: scrollYProgress }} />
      <MotionToggle />
      <Stickers />
      <main className="card" id="home" inert={!!open}>
        <Hero />
        <Marquee />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
        <div className="ft">Drag the stickers in the background.</div>
      </main>
      <Dock inert={!!open} />
      <AnimatePresence>{open && <ProjectModal key="modal" slug={open} />}</AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <MotionProvider>
      <LogoPopProvider>
        <Page />
      </LogoPopProvider>
    </MotionProvider>
  );
}
