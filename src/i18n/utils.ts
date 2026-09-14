import { defaultLang, languages, type Lang } from './ui';

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

export function getLangFromUrl(url: URL): Lang {
  const [, candidate] = url.pathname.split('/');
  return isLang(candidate) ? candidate : defaultLang;
}

export function getLocalizedPath(lang: Lang, path = ''): string {
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  return cleanPath ? `/${lang}/${cleanPath}/` : `/${lang}/`;
}

export function getPathWithoutLang(pathname: string): string {
  const withoutLang = pathname.replace(/^\/(?:es|en)(?=\/|$)/, '');
  return withoutLang || '/';
}

export function getLocalizedPathFor(pathname: string, lang: Lang): string {
  const path = getPathWithoutLang(pathname).replace(/(?:huella-carbono-es|carbon-footprint-en)(?=\/?$)/, lang === 'es' ? 'huella-carbono-es' : 'carbon-footprint-en');
  const translatedSlug = path.replace(/-(?:es|en)(?=\/?$)/, `-${lang}`);
  return getLocalizedPath(lang, translatedSlug);
}
