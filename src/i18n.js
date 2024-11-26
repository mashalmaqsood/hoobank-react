import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en/translation.json";
import translationUr from "./locales/ur/translation.json";
import translationIt from "./locales/it/translation.json";
i18n.use(initReactI18next).init({
  debug: true,
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
    es: {},
  },
});

export default i18n;
