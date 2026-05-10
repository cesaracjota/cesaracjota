export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'hero.availability': 'Disponible para trabajar',
    'hero.yoe': 'Años de experiencia',
    'hero.contact': 'Contactar',
    'hero.download': 'Descargar CV',
    'section.about': 'Acerca de mí',
    'section.skills': 'Stack Técnico',
    'section.experience': 'Experiencia',
    'section.projects': 'Proyectos Destacados',
    'section.certifications': 'Certificaciones',
    'section.education': 'Educación',
    'section.publications': 'Publicaciones',
    'section.awards': 'Logros',
    'section.contact': 'Contacto',
    'project.github': 'Ver Código',
    'project.demo': 'Ver Demo',
    'project.preview': 'Ver Proyecto',
    'project.close': 'Cerrar',
    'contact.email': 'Envíame un correo',
    'contact.whatsapp': 'Chat en WhatsApp',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'hero.availability': 'Open to work',
    'hero.yoe': 'Years of experience',
    'hero.contact': 'Contact me',
    'hero.download': 'Download CV',
    'section.about': 'About me',
    'section.skills': 'Tech Stack',
    'section.experience': 'Experience',
    'section.projects': 'Featured Projects',
    'section.certifications': 'Certifications',
    'section.education': 'Education',
    'section.publications': 'Publications',
    'section.awards': 'Awards',
    'section.contact': 'Contact',
    'project.github': 'View Code',
    'project.demo': 'Live Demo',
    'project.preview': 'View Project',
    'project.close': 'Close',
    'contact.email': 'Send me an email',
    'contact.whatsapp': 'Chat on WhatsApp',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
