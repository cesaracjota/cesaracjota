import { languages } from '../i18n/ui';

interface Props {
  currentLang: string;
}

export default function LangSwitcher({ currentLang }: Props) {
  const switchLang = () => {
    if (currentLang === 'es') {
      window.location.href = '/en';
    } else {
      window.location.href = '/';
    }
  };

  return (
    <button
      onClick={switchLang}
      className="fixed top-4 right-4 z-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors bg-white/80 backdrop-blur-sm"
      aria-label="Switch Language"
    >
      {currentLang === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
