import { useState, useCallback, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

// ─── Floating hover preview panel (portal) ───────────────────────────────────
function HoverPreview({
  project,
  cardRect,
  previewText,
  onPanelEnter,
  onPanelLeave,
}: {
  project: Project;
  cardRect: DOMRect;
  previewText: string;
  onPanelEnter: () => void;
  onPanelLeave: () => void;
}) {
  const W = 288;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Prefer right side; fall back to left
  const rightX = cardRect.right + 12;
  const leftX  = cardRect.left  - 12 - W;
  const useRight = rightX + W <= vw - 8;
  const x = useRight ? rightX : Math.max(8, leftX);

  // Vertically center on the card, clamped to viewport
  const panelH = 360;
  let y = cardRect.top + cardRect.height / 2 - panelH / 2;
  y = Math.max(8, Math.min(y, vh - panelH - 8));

  const link = project.demo !== '#' ? project.demo : project.github;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, x: useRight ? -10 : 10, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: useRight ? -6 : 6, scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onPanelEnter}
      onMouseLeave={onPanelLeave}
      style={{
        position: 'fixed',
        top: y,
        left: x,
        width: W,
        zIndex: 9999,
        pointerEvents: 'auto',
      }}
    >
      <div style={{
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid var(--color-border-hover)',
        background: 'var(--color-bg)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.32), 0 4px 16px rgba(0,0,0,0.18)',
      }}>
        {/* Imagen */}
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.05)' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 65%)',
          }} />
        </div>

        {/* Contenido */}
        <div style={{ padding: '10px 14px 14px' }}>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 13, fontWeight: 700,
            color: 'var(--color-accent)',
            marginBottom: 5, lineHeight: 1.3,
          }}>
            {project.title}
          </h4>

          <p style={{
            fontSize: 11.5,
            color: 'var(--color-text-muted)',
            lineHeight: 1.55,
            marginBottom: 10,
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          } as React.CSSProperties}>
            {project.description}
          </p>

          {/* Tech badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 12 }}>
            {project.tech.slice(0, 5).map(t => (
              <span key={t} style={{
                fontSize: 10, fontFamily: 'var(--font-mono)',
                padding: '2px 6px', borderRadius: 5,
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-secondary)',
              }}>{t}</span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 6, padding: '8px 12px',
              borderRadius: 10,
              background: 'var(--color-accent)',
              color: '#fff',
              fontSize: 12, fontWeight: 600,
              textDecoration: 'none',
              transition: 'filter 0.15s ease, transform 0.15s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1.12)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.filter = '';
              (e.currentTarget as HTMLAnchorElement).style.transform = '';
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
            {previewText}
          </a>
        </div>
      </div>
    </motion.div>,
    document.body
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({
  p, idx, codeText, demoText, previewText,
  onEnter, onLeave,
}: {
  p: Project; idx: number;
  codeText: string; demoText: string; previewText: string;
  onEnter: (p: Project, rect: DOMRect) => void;
  onLeave: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (ref.current) onEnter(p, ref.current.getBoundingClientRect());
  };
  const handleMouseLeave = () => {
    setHovered(false);
    onLeave();
  };

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
export default function ProjectList({ projects, loadMoreText, codeText, demoText, previewText = 'Ver Proyecto' }: Props) {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [hovered, setHovered] = useState<{ project: Project; rect: DOMRect } | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const scheduleHide = useCallback(() => {
    hideTimer.current = setTimeout(() => setHovered(null), 90);
  }, []);

  const cancelHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  }, []);

  const handleCardEnter = useCallback((p: Project, rect: DOMRect) => {
    cancelHide();
    setHovered({ project: p, rect });
  }, [cancelHide]);

  const handleCardLeave = useCallback(() => {
    scheduleHide();
  }, [scheduleHide]);

  const handleLoadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 4, projects.length));
      setIsLoading(false);
    }, 180);
  }, [projects.length]);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <>
      <div className="flex flex-col gap-6">
        <AnimatePresence initial={false}>
          {visibleProjects.map((p, idx) => (
            <Reveal key={p.title} delay={idx % 4} variant="up">
              <ProjectCard
                p={p} idx={idx}
                codeText={codeText} demoText={demoText} previewText={previewText}
                onEnter={handleCardEnter}
                onLeave={handleCardLeave}
              />
            </Reveal>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {hasMore && (
            <motion.div
              key="load-more"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mt-4"
            >
              <motion.button
                onClick={handleLoadMore}
                disabled={isLoading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="relative px-8 py-2.5 border border-[var(--color-border)] rounded-full text-sm font-semibold text-[var(--color-text-main)] overflow-hidden"
                style={{ transition: 'border-color 0.2s ease, color 0.2s ease' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-accent)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-accent)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text-main)';
                }}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    Loading…
                  </span>
                ) : loadMoreText}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating hover preview — rendered in body via portal */}
      {mounted && (
        <AnimatePresence>
          {hovered && (
            <HoverPreview
              key={hovered.project.title}
              project={hovered.project}
              cardRect={hovered.rect}
              previewText={previewText}
              onPanelEnter={cancelHide}
              onPanelLeave={() => setHovered(null)}
            />
          )}
        </AnimatePresence>
      )}
    </>
  );
}
