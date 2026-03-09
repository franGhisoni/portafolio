import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar Container */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-4 md:px-8">
          <div className="font-serif text-xl font-bold tracking-tight">
            FG.
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#experience" className="transition-colors hover:text-foreground/80 text-foreground/60">Experience</a>
            <a href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</a>
            <a href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">Skills</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 md:px-8 py-12 md:py-24 space-y-32">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            Building scalable systems <br />
            & real-time data tools.
          </h1>
          <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal font-serif">
            I'm <span className="text-foreground font-semibold">Francisco Ghisoni</span>, a Full Stack Software Engineer specializing in backend architectures, microservices, and continuous improvement.
          </p>
          <motion.div
            className="flex items-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="https://github.com/franGhisoni" target="_blank" rel="noreferrer" className="flex items-center justify-center p-2 rounded-md hover:bg-muted transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/francisco-ghisoni-a13121211/" target="_blank" rel="noreferrer" className="flex items-center justify-center p-2 rounded-md hover:bg-muted transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:ghisonifran@gmail.com" className="flex items-center justify-center p-2 rounded-md hover:bg-muted transition-colors">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </motion.section>

        {/* Placeholders for subsequent sections */}
        <section id="experience" className="border-t pt-12">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <ExperienceSection />
        </section>

        <section id="projects" className="border-t pt-12">
          <h2 className="text-3xl font-bold mb-8">Selected Projects</h2>
          <ProjectsSection />
        </section>

        <section id="skills" className="border-t pt-12 pb-24">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <SkillsSection />
        </section>
      </main>
    </div>
  );
}

export default App;
