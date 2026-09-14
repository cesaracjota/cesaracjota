import type { Lang } from '../i18n/ui';

export const identity = {
  name: 'Cesar Acjota Merma',
  email: 'cesaracjota@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cesaracjota/',
  github: 'https://github.com/cesaracjota',
  avatar: 'https://avatars.githubusercontent.com/u/81894363?s=400',
};
type Profile = {
  greeting: string; role: string; intro: string; description: string;
  factsTitle: string; facts: { text: string; detail: string }[];
  experienceTitle: string; experience: { role: string; organization: string; period: string; description: string }[];
  skillsTitle: string; skills: { title: string; value: string }[];
  projectTitle: string; project: { title: string; organization: string; description: string };
  interestsTitle: string; interests: string; coursesTitle: string;
  courses: { title: string; institution: string; detail: string }[];
};
export const profiles = {
  es: {
    greeting: '¡Hola, soy Cesar!',
    role: 'Estudiante de Economía · Técnico en Diseño y Desarrollo de Software',
    intro: 'Estudio Economía en la Universidad Nacional de San Agustín de Arequipa y soy técnico titulado en Diseño y Desarrollo de Software por TECSUP.',
    description: 'Me interesa conectar la economía con las herramientas digitales. Mi experiencia en entidades públicas incluye el registro, la validación y la sistematización de información administrativa, además del apoyo en sistemas institucionales.',
    factsTitle: 'Un poco sobre mí',
    facts: [
      { text: 'Estudio Economía en la UNSA.', detail: '2024 – en curso · Tercio superior' },
      { text: 'Soy técnico en Diseño y Desarrollo de Software por TECSUP.', detail: '2019 – 2022 · Quinto superior' },
      { text: 'He trabajado con información y sistemas en el sector público.', detail: 'Municipalidades de Espinar y Usicayos · Poder Judicial' },
      { text: 'Me interesan la gestión pública, la planificación y el análisis económico.', detail: 'Una mirada interdisciplinaria entre economía y tecnología' },
      { text: 'Idiomas: español, inglés y quechua.', detail: 'Trabajo en equipo, colaboración y gestión del cambio' },
    ],
    experienceTitle: 'Experiencia',
    experience: [
      { role: 'Servicio de Monitoreo Educativo', organization: 'CEPRUNSA · Arequipa', period: 'abr. 2026 – jul. 2026', description: 'Orientación y acompañamiento a estudiantes, seguimiento de actividades académicas, coordinación con el programa y registro de información.' },
      { role: 'Digitador', organization: 'Municipalidad Provincial de Espinar · Cusco', period: 'ene. 2025 – abr. 2025', description: 'Registro, validación y actualización de información administrativa y estadística. Ordenamiento y digitalización de bases de datos institucionales.' },
      { role: 'Analista de Sistemas y Programador', organization: 'Municipalidad Distrital de Usicayos · Puno', period: 'ene. 2023 – dic. 2023', description: 'Apoyo técnico en sistemas institucionales, análisis de requerimientos y mejora de los flujos de información administrativa.' },
      { role: 'Practicante Profesional de Desarrollo de Software', organization: 'Poder Judicial · Arequipa', period: 'abr. 2022 – nov. 2022', description: 'Participación en sistemas de gestión administrativa y control de incidencias. Apoyo en pruebas, validación de datos y estabilidad de sistemas.' },
    ],
    skillsTitle: 'Herramientas y conocimientos',
    skills: [
      { title: 'Análisis de datos', value: 'SQL, R, Python, Power BI' },
      { title: 'Desarrollo de software', value: 'React, Django, Spring Boot, Material UI, Flutter' },
      { title: 'Bases de datos', value: 'MySQL, SQL Server, PostgreSQL' },
    ],
    projectTitle: 'Proyectos',
    project: { title: 'Optimización de registros administrativos', organization: 'Academia Briceño · Arequipa', description: 'Apoyo en la reorganización y sistematización de registros administrativos, optimización del almacenamiento y consulta de información e implementación de herramientas digitales para mejorar su gestión.' },
    interestsTitle: 'Intereses',
    interests: 'Gestión pública, planificación y análisis económico. Me interesa elaborar reportes y apoyar el análisis de información estadística, combinando mi formación en economía con herramientas digitales.',
    coursesTitle: 'Capacitaciones y certificaciones',
    courses: [
      { title: 'Capacitación Miembro de Mesa Elecciones Generales', institution: 'ONPE', detail: '40 horas · 2026' },
      { title: 'Desarrollo de Apps Móviles', institution: 'Google', detail: '40 horas · 2026' },
      { title: 'Python', institution: 'Santander Open Academy', detail: '8 horas · 2026' },
      { title: 'Funciones Premium de Aprendizaje y Enseñanza', institution: 'Google', detail: '8 horas · 2026' },
      { title: 'Uso Básico de Google Workspace for Education Fundamentals', institution: 'Google', detail: '6 horas · 2026' },
      { title: 'Liderazgo en Entorno Digital', institution: 'Santander Open Academy', detail: '8 horas · 2026' },
      { title: 'Excel Profesional', institution: 'Cámara de Comercio y Educación', detail: '6 horas · 2022' },
      { title: 'Computación Básica', institution: 'PLATZI', detail: '12 horas · 2022' },
      { title: 'Introducción a la Seguridad Cibernética', institution: 'Cisco Networking Academy', detail: '40 horas · 2020' },
    ],
  },
  en: {
    greeting: 'Hi, I’m Cesar!',
    role: 'Economics student · Software Design and Development technician',
    intro: 'I study Economics at the National University of San Agustín in Arequipa and hold a technical qualification in Software Design and Development from TECSUP.',
    description: 'I’m interested in connecting economics with digital tools. My public-sector experience includes recording, validating, and organizing administrative information, as well as supporting institutional information systems.',
    factsTitle: 'A little about me',
    facts: [
      { text: 'I study Economics at UNSA.', detail: '2024 – present · Top third of my class' },
      { text: 'I hold a technical qualification in Software Design and Development from TECSUP.', detail: '2019 – 2022 · Top fifth of my class' },
      { text: 'I have worked with information and systems in the public sector.', detail: 'Espinar and Usicayos municipalities · Peruvian Judiciary' },
      { text: 'My interests include public management, planning, and economic analysis.', detail: 'An interdisciplinary perspective on economics and technology' },
      { text: 'Languages: Spanish, English, and Quechua.', detail: 'Teamwork, collaboration, and change management' },
    ],
    experienceTitle: 'Experience',
    experience: [
      { role: 'Educational Monitoring Service', organization: 'CEPRUNSA · Arequipa', period: 'Apr 2026 – Jul 2026', description: 'Student guidance, academic activity monitoring, coordination with program staff, and activity record management.' },
      { role: 'Data Entry Clerk', organization: 'Provincial Municipality of Espinar · Cusco', period: 'Jan 2025 – Apr 2025', description: 'Recording, validating, and updating administrative and statistical information. Organizing and digitizing institutional databases.' },
      { role: 'Systems Analyst and Programmer', organization: 'District Municipality of Usicayos · Puno', period: 'Jan 2023 – Dec 2023', description: 'Technical support for institutional systems, requirements analysis, and improvements to administrative information flows.' },
      { role: 'Professional Software Development Intern', organization: 'Peruvian Judiciary · Arequipa', period: 'Apr 2022 – Nov 2022', description: 'Participation in administrative and incident management systems. Support for testing, data validation, and system stability.' },
    ],
    skillsTitle: 'Tools and skills',
    skills: [
      { title: 'Data analysis', value: 'SQL, R, Python, Power BI' },
      { title: 'Software development', value: 'React, Django, Spring Boot, Material UI, Flutter' },
      { title: 'Databases', value: 'MySQL, SQL Server, PostgreSQL' },
    ],
    projectTitle: 'Projects',
    project: { title: 'Administrative records optimization', organization: 'Academia Briceño · Arequipa', description: 'Support in reorganizing and systematizing administrative records, improving information storage and retrieval, and implementing digital tools for information management.' },
    interestsTitle: 'Interests',
    interests: 'Public management, planning, and economic analysis. I’m interested in preparing reports and supporting statistical information analysis, combining my economics education with digital tools.',
    coursesTitle: 'Training and certifications',
    courses: [
      { title: 'General Elections Poll Worker Training', institution: 'ONPE', detail: '40 hours · 2026' },
      { title: 'Mobile App Development', institution: 'Google', detail: '40 hours · 2026' },
      { title: 'Python', institution: 'Santander Open Academy', detail: '8 hours · 2026' },
      { title: 'Premium Learning and Teaching Features', institution: 'Google', detail: '8 hours · 2026' },
      { title: 'Basic Use of Google Workspace for Education Fundamentals', institution: 'Google', detail: '6 hours · 2026' },
      { title: 'Leadership in a Digital Environment', institution: 'Santander Open Academy', detail: '8 hours · 2026' },
      { title: 'Professional Excel', institution: 'Cámara de Comercio y Educación', detail: '6 hours · 2022' },
      { title: 'Basic Computing', institution: 'PLATZI', detail: '12 hours · 2022' },
      { title: 'Introduction to Cybersecurity', institution: 'Cisco Networking Academy', detail: '40 hours · 2020' },
    ],
  },
} satisfies Record<Lang, Profile>;
