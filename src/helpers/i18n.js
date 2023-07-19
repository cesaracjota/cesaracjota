import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa los archivos de traducción para cada idioma.
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

// Configura la inicialización de i18n.
i18n.use(initReactI18next).init({
  fallbackLng: "es", // El idioma predeterminado si no se puede detectar uno.
  lng: localStorage.getItem("language") || "es", // El idioma seleccionado.
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
});

export default i18n;
