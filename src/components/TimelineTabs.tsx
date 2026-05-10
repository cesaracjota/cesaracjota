import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, BookOpen, Trophy, ArrowRight } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  title: string;
  issuer: string;
  year: string;
}

interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

interface Props {
  labels: {
    exp: string;
    edu: string;
    blog: string;
    awd: string;
  };
  experience: Experience[];
  education: Education[];
  blogs: any[];
  awards: Award[];
}

export default function TimelineTabs({ labels, experience, education, blogs, awards }: Props) {
  const [activeTab, setActiveTab] = useState<'exp' | 'edu' | 'blog' | 'awd'>('exp');

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex gap-2 mb-8 p-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('exp')}
          className={`relative flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors z-10 ${
            activeTab === 'exp' ? 'text-[var(--color-text-main)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
          }`}
        >
          {activeTab === 'exp' && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-[var(--color-border)] rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Briefcase className="w-4 h-4" />
          {labels.exp}
        </button>
        
        <button
          onClick={() => setActiveTab('edu')}
          className={`relative flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors z-10 ${
            activeTab === 'edu' ? 'text-[var(--color-text-main)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
          }`}
        >
          {activeTab === 'edu' && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-[var(--color-border)] rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <GraduationCap className="w-4 h-4" />
          {labels.edu}
        </button>

        <button
          onClick={() => setActiveTab('awd')}
          className={`relative flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors z-10 ${
            activeTab === 'awd' ? 'text-[var(--color-text-main)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
          }`}
        >
          {activeTab === 'awd' && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-[var(--color-border)] rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Trophy className="w-4 h-4" />
          {labels.awd}
        </button>

        <button
          onClick={() => setActiveTab('blog')}
          className={`relative flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors z-10 ${
            activeTab === 'blog' ? 'text-[var(--color-text-main)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
          }`}
        >
          {activeTab === 'blog' && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-[var(--color-border)] rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <BookOpen className="w-4 h-4" />
          {labels.blog}
        </button>
      </div>

      {/* Tabs Content */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === 'exp' && (
            <motion.div
              key="exp"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {experience.map((exp, idx) => (
                <article key={idx} className="relative pl-8 group">
                  <div className="absolute left-[11px] top-8 bottom-[-24px] w-px bg-[var(--color-border)] group-last:hidden" />
                  
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[var(--color-surface-hover)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
                  </div>
                  <div className="absolute left-[9px] top-[10px] w-1.5 h-1.5 rounded-full bg-[var(--color-border-hover)] group-hover:opacity-0 transition-opacity" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                    <h3 className="text-base font-bold text-[var(--color-text-main)] transition-colors">{exp.role}</h3>
                    <span className="text-xs font-mono font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg)] px-2 py-0.5 rounded border border-[var(--color-border)]">{exp.period}</span>
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-2 flex items-center gap-1.5">
                    {exp.company}
                  </p>
                  <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">{exp.description}</p>
                </article>
              ))}
            </motion.div>
          )}

          {activeTab === 'edu' && (
            <motion.div
              key="edu"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {education.map((edu, idx) => (
                <article key={idx} className="relative pl-8 group">
                  <div className="absolute left-[11px] top-8 bottom-[-24px] w-px bg-[var(--color-border)] group-last:hidden" />
                  
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[var(--color-surface-hover)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
                  </div>
                  <div className="absolute left-[9px] top-[10px] w-1.5 h-1.5 rounded-full bg-[var(--color-border-hover)] group-hover:opacity-0 transition-opacity" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                    <h3 className="text-base font-bold text-[var(--color-text-main)] transition-colors">{edu.title}</h3>
                    <span className="text-xs font-mono font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg)] px-2 py-0.5 rounded border border-[var(--color-border)]">{edu.year}</span>
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-text-secondary)]">
                    {edu.issuer}
                  </p>
                </article>
              ))}
            </motion.div>
          )}

          {activeTab === 'awd' && (
            <motion.div
              key="awd"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {awards.map((awd, idx) => (
                <article key={idx} className="relative pl-8 group">
                  <div className="absolute left-[11px] top-8 bottom-[-24px] w-px bg-[var(--color-border)] group-last:hidden" />
                  
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[var(--color-surface-hover)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
                  </div>
                  <div className="absolute left-[9px] top-[10px] w-1.5 h-1.5 rounded-full bg-[var(--color-border-hover)] group-hover:opacity-0 transition-opacity" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                    <h3 className="text-base font-bold text-[var(--color-text-main)] transition-colors">{awd.title}</h3>
                    <span className="text-xs font-mono font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg)] px-2 py-0.5 rounded border border-[var(--color-border)]">{awd.year}</span>
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-2 flex items-center gap-1.5">
                    {awd.issuer}
                  </p>
                  <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">{awd.description}</p>
                </article>
              ))}
            </motion.div>
          )}


          {activeTab === 'blog' && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {blogs.map((blog, idx) => (
                <a href={`/blog/${blog.id}`} key={blog.id} className="block group h-full">
                  <article className="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl group-hover:border-[var(--color-border-hover)] transition-colors h-full flex flex-col">
                    <span className="text-[10px] font-mono text-[var(--color-text-secondary)] mb-2 block">
                      {blog.data.date.toISOString().split('T')[0]}
                    </span>
                    <h3 className="text-base font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                      {blog.data.title}
                    </h3>
                    <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed mb-4 flex-1">
                      {blog.data.description}
                    </p>
                    {blog.data.tags && blog.data.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {blog.data.tags.map((tag: string) => (
                          <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded text-[var(--color-text-secondary)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
