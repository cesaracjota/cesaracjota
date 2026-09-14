import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './AnimatedCard';

interface Project {
  title: string;
  image: string;
  tech: string[];
  description: string;
  github: string;
  demo: string;
}

interface Props {
  projects: Project[];
  loadMoreText: string;
  codeText: string;
  demoText: string;
  previewText?: string;
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({
  p, idx, codeText, demoText,
}: {
  p: Project; idx: number;
  codeText: string; demoText: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <motion.article
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={hovered
        ? { y: -3, boxShadow: '0 16px 40px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.08)' }
        : { y: 0, boxShadow: '0 0px 0px rgba(0,0,0,0)' }
      }
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group/card flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl cursor-default"
      style={{
        borderColor: hovered ? 'var(--color-border-hover)' : 'var(--color-border)',
        transition: 'border-color 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
    >
      {/* Image */}
      <div className="w-full md:w-5/12 aspect-video overflow-hidden rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] relative shrink-0">
        {!imgLoaded && <div className="absolute inset-0 bg-[var(--color-surface)] animate-pulse" />}
        <img
          src={p.image}
          alt={p.title}
          loading={idx < 2 ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setImgLoaded(true)}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? 'scale(1.04) translateZ(0)' : 'scale(1) translateZ(0)',
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease',
            opacity: imgLoaded ? (hovered ? 1 : 0.88) : 0,
            willChange: 'transform',
          }}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 50%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 py-1 md:py-2 min-w-0">
        <h3
          className="text-2xl font-bold font-display mb-3"
          style={{
            color: hovered ? 'var(--color-accent)' : 'var(--color-text-main)',
            transition: 'color 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {p.title}
        </h3>

        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6 flex-1 max-w-xl">
          {p.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tech.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10px] font-mono px-2.5 py-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md text-[var(--color-text-secondary)]"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 mt-auto pt-4 border-t border-[var(--color-border)] md:border-none md:pt-0">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors duration-150 group/link"
          >
            <svg className="w-4 h-4 group-hover/link:-rotate-6 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            {codeText}
          </a>
          {p.demo !== '#' && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors duration-150 group/link"
            >
              <svg className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              {demoText}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function ProjectList({ projects, loadMoreText, codeText, demoText }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Show only up to 4 potent projects
  const visibleProjects = projects.slice(0, 4);

  return (
    <>
      <div className="flex flex-col gap-6">
        <AnimatePresence initial={false}>
          {visibleProjects.map((p, idx) => (
            <Reveal key={p.title} delay={idx % 4} variant="up">
              <ProjectCard
                p={p} idx={idx}
                codeText={codeText} demoText={demoText}
              />
            </Reveal>
          ))}
        </AnimatePresence>

        {mounted && projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-4"
          >
            <a
              href="https://github.com/cesaracjota?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-2.5 border border-[var(--color-border)] rounded-full text-sm font-semibold text-[var(--color-text-main)] overflow-hidden inline-flex items-center gap-2 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              {loadMoreText}
            </a>
          </motion.div>
        )}
      </div>
    </>
  );
}
