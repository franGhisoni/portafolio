import { useEffect, useState } from 'react';
import './Header.css';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fg-nav${scrolled ? ' fg-nav--scrolled' : ''}`}>
      <div className="fg-nav-pill">
        <div className="fg-nav-content">
          <a href="#hero" className="font-serif text-2xl font-bold tracking-tight text-foreground">
            FG.
          </a>
          <nav className="flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium">
            <a href="#experience" className="transition-editorial hover:text-accent text-foreground/70">
              Experience
            </a>
            <a href="#projects" className="transition-editorial hover:text-accent text-foreground/70">
              Projects
            </a>
            <a href="#skills" className="transition-editorial hover:text-accent text-foreground/70">
              Skills
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
