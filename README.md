# Cesar Acjota Merma — Portfolio

Portafolio personal bilingüe y estático, inspirado en la presentación académica de Maarten Grootendorst. La interfaz usa Astro, Tailwind CSS y SVG con astro-icon. Incluye una presentación con foto, trayectoria, proyecto, habilidades, intereses y capacitaciones.

Los datos profesionales de ambas versiones están centralizados en `src/data/profile.ts` y se contrastaron con el CV proporcionado en septiembre de 2026. La foto y GitHub se conservan del portafolio anterior. Los antiguos ejemplos de proyectos e investigación están marcados con `draft: true` y no se publican. No deben activarse sin confirmar sus datos.

El PDF actualizado no se ha copiado a public: su descarga está pendiente de autorización. El archivo público heredado permanece sin cambios y ya no tiene un enlace en la interfaz.

El modo claro es el valor inicial; el selector permite guardar la preferencia oscura. ClientRouter y el controlador de tema requieren una pequeña cantidad de JavaScript; el contenido se renderiza de forma estática y no usa islas React.

## Inicio rápido

```bash
npm install
npm run dev
```

Comandos útiles:

```bash
npm run build       # genera dist/
npm run preview     # sirve el build local
npm run astro check # valida Astro y TypeScript
```

## Estructura

```text
src/
├── components/
│   ├── CollectionCard.astro
│   ├── Header.astro
│   ├── SectionHeading.astro
│   └── ThemeToggle.astro
├── content/
│   ├── projects/          # proyectos con lang: es | en
│   └── research/          # notas y papers con lang: es | en
├── content.config.ts      # colecciones y esquemas Zod
├── i18n/
│   ├── ui.ts              # diccionarios y traducciones de interfaz
│   └── utils.ts           # rutas localizadas y detección de idioma
├── layouts/BaseLayout.astro
├── pages/
│   ├── [lang]/index.astro # /es/ y /en/
│   ├── [lang]/research/[slug].astro
│   └── index.astro        # redirección a /es/
└── styles/global.css
```

Astro 6 detecta la configuración moderna de Content Collections en `src/content.config.ts`. Las rutas se generan con `getStaticPaths()` y la configuración i18n de `astro.config.mjs` usa `prefixDefaultLocale: true`, por lo que ambos idiomas tienen una ruta explícita: `/es/` y `/en/`.

## Añadir contenido

Cada archivo Markdown necesita al menos `lang`, `title`, `description` y `date`. Para un proyecto puedes añadir `url`, `repo`, `tags` y `featured`; las notas de investigación admiten además su cuerpo Markdown, que se publica en `/[lang]/research/[slug]/`.
