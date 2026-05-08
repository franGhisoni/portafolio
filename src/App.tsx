import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Header } from './components/Header';

const EASE = [0.16, 1, 0.3, 1] as const;

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-28 space-y-40">
        {/* Hero */}
        <section id="hero" className="space-y-10">
          <motion.p
            className="text-xs uppercase tracking-[0.22em] text-accent font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Full Stack Engineer
          </motion.p>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.08, ease: EASE }}
          >
            Building scalable<br />
            systems &amp;<br />
            real-time data tools.
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-[38rem] leading-relaxed font-serif italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            I'm <span className="text-foreground not-italic font-semibold">Francisco Ghisoni</span>, a Full Stack Software Engineer specializing in backend architectures, microservices, and continuous improvement.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.36, duration: 0.6, ease: EASE }}
          >
            <a href="https://github.com/franGhisoni" target="_blank" rel="noreferrer"
              className="flex items-center justify-center p-2.5 rounded-md hover:text-accent hover:bg-accent-muted transition-editorial text-foreground/50">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/francisco-ghisoni-a13121211/" target="_blank" rel="noreferrer"
              className="flex items-center justify-center p-2.5 rounded-md hover:text-accent hover:bg-accent-muted transition-editorial text-foreground/50">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:ghisonifran@gmail.com"
              className="flex items-center justify-center p-2.5 rounded-md hover:text-accent hover:bg-accent-muted transition-editorial text-foreground/50">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </section>

        <section id="experience" className="border-t border-border pt-16">
          <div className="flex items-baseline gap-5 mb-14">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">01</span>
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          </div>
          <ExperienceSection />
        </section>

        <section id="projects" className="border-t border-border pt-16">
          <div className="flex items-baseline gap-5 mb-14">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">02</span>
            <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
          </div>
          <ProjectsSection />
        </section>

        <section id="skills" className="border-t border-border pt-16 pb-24">
          <div className="flex items-baseline gap-5 mb-14">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">03</span>
            <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
          </div>
          <SkillsSection />
        </section>
      </main>
    </div>
  );
}

export default App;
