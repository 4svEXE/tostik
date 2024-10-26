import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import cz from "./locales/cz.json";

const defaultFallback = "cz";
const defaultTranslationNamespace = "translation";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    defaultNS: defaultTranslationNamespace,
    fallbackLng: defaultFallback,
    resources: {
      en: {
        translation: en,
      },
      cz: {
        translation: cz,
      },
    },
    react: {
      useSuspense: true,
    },
  });

export default i18next;
