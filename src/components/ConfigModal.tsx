import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Moon, Sun, Monitor, X, Globe, Palette } from 'lucide-react';

interface Props {
  currentLang: 'es' | 'en';
}

export default function ConfigModal({ currentLang }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [colorTheme, setColorTheme] = useState<'zinc' | 'blue' | 'emerald' | 'violet'>('zinc');

  useEffect(() => {
    // Load theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    if (savedTheme) setTheme(savedTheme);

    // Load color theme
    const savedColor = localStorage.getItem('colorTheme') as 'zinc' | 'blue' | 'emerald' | 'violet' | null;
    if (savedColor) setColorTheme(savedColor);
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (newTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const handleColorChange = (newColor: 'zinc' | 'blue' | 'emerald' | 'violet') => {
    setColorTheme(newColor);
    localStorage.setItem('colorTheme', newColor);
    
    document.documentElement.classList.remove('theme-zinc', 'theme-blue', 'theme-emerald', 'theme-violet');
    document.documentElement.classList.add(`theme-${newColor}`);
  };

  const toggleLanguage = () => {
    if (currentLang === 'es') {
      window.location.href = '/en/';
    } else {
      window.location.href = '/';
    }
  };

  const colors = [
    { id: 'zinc', bg: 'bg-zinc-500', name: 'Zinc' },
    { id: 'blue', bg: 'bg-blue-500', name: 'Blue' },
    { id: 'emerald', bg: 'bg-emerald-500', name: 'Emerald' },
    { id: 'violet', bg: 'bg-violet-500', name: 'Violet' },
  ] as const;

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Settings"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 99999,
          padding: '10px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '9999px',
          color: 'var(--color-text-secondary)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
          cursor: 'pointer',
          transition: 'color 0.2s, border-color 0.2s, transform 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={e => {
          const b = e.currentTarget;
          b.style.color = 'var(--color-text-main)';
          b.style.borderColor = 'var(--color-border-hover)';
          b.style.transform = 'rotate(30deg) scale(1.08)';
        }}
        onMouseLeave={e => {
          const b = e.currentTarget;
          b.style.color = 'var(--color-text-secondary)';
          b.style.borderColor = 'var(--color-border)';
          b.style.transform = '';
        }}
      >
        <Settings style={{ width: 20, height: 20 }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-24 right-6 w-80 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                <h3 className="font-bold text-[var(--color-text-main)] flex items-center gap-2">
                  <Settings className="w-4 h-4" /> Configuración
                </h3>
                <button onClick={() => setIsOpen(false)} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 space-y-6 overflow-y-auto max-h-[70vh]">
                
                {/* Theme Mode */}
                <div>
                  <span className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-text-muted)] mb-3 uppercase">
                    Apariencia
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleThemeChange('light')}
                      className={`flex flex-col items-center gap-2 p-2 rounded-lg border transition-all ${theme === 'light' ? 'border-[var(--color-text-main)] bg-[var(--color-text-main)] text-[var(--color-bg)]' : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]'}`}
                    >
                      <Sun className="w-4 h-4" />
                      <span className="text-[10px] font-semibold">Light</span>
                    </button>
                    
                    <button
                      onClick={() => handleThemeChange('dark')}
                      className={`flex flex-col items-center gap-2 p-2 rounded-lg border transition-all ${theme === 'dark' ? 'border-[var(--color-text-main)] bg-[var(--color-text-main)] text-[var(--color-bg)]' : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]'}`}
                    >
                      <Moon className="w-4 h-4" />
                      <span className="text-[10px] font-semibold">Dark</span>
                    </button>

                    <button
                      onClick={() => handleThemeChange('system')}
                      className={`flex flex-col items-center gap-2 p-2 rounded-lg border transition-all ${theme === 'system' ? 'border-[var(--color-text-main)] bg-[var(--color-text-main)] text-[var(--color-bg)]' : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]'}`}
                    >
                      <Monitor className="w-4 h-4" />
                      <span className="text-[10px] font-semibold">Auto</span>
                    </button>
                  </div>
                </div>

                {/* Accent Color */}
                <div>
                  <span className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-text-muted)] mb-3 uppercase">
                    <Palette className="w-3 h-3" /> Color de Acento
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {colors.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleColorChange(c.id)}
                        className={`flex flex-col items-center gap-1 p-2 rounded-lg border transition-all ${colorTheme === c.id ? 'border-[var(--color-text-main)] bg-[var(--color-bg)]' : 'border-transparent hover:border-[var(--color-border)]'}`}
                      >
                        <div className={`w-5 h-5 rounded-full ${c.bg} ${colorTheme === c.id ? 'ring-2 ring-offset-2 ring-[var(--color-bg)] ring-offset-[var(--color-text-main)]' : ''}`} />
                        <span className={`text-[9px] font-semibold ${colorTheme === c.id ? 'text-[var(--color-text-main)]' : 'text-[var(--color-text-muted)]'}`}>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language Switcher */}
                <div>
                  <span className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-text-muted)] mb-3 uppercase">
                    <Globe className="w-3 h-3" /> Idioma
                  </span>
                  <div className="flex bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg p-1 relative">
                    <div 
                      className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-md transition-transform duration-300 ease-in-out ${currentLang === 'en' ? 'translate-x-full' : 'translate-x-0'}`} 
                    />
                    <button 
                      onClick={toggleLanguage}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold relative z-10 transition-colors ${currentLang === 'es' ? 'text-[var(--color-text-main)]' : 'text-[var(--color-text-muted)]'}`}
                    >
                      <span>🇪🇸</span> Español
                    </button>
                    <button 
                      onClick={toggleLanguage}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold relative z-10 transition-colors ${currentLang === 'en' ? 'text-[var(--color-text-main)]' : 'text-[var(--color-text-muted)]'}`}
                    >
                      <span>🇬🇧</span> English
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}
