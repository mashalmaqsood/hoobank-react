import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en/translation.json";
import translationUr from "./locales/ur/translation.json";
import translationIt from "./locales/it/translation.json";
import translationEs from "./locales/es/translation.json";
import translationDe from "./locales/de/translation.json";
import translationTr from "./locales/tr/translation.json"
import translationAr from "./locales/ar/translation.json"

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: translationEn,
    },
    ur: {
      translation: translationUr,
    },
    it: {
      translation: translationIt,
    },
    es: {
      translation: translationEs,
    },
    de: {
      translation: translationDe,
    },
    tr: {
      translation: translationTr,
    },
    ar:{
      translation: translationAr
    }
  },
});

export default i18n;
