import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import translationCat from './locales/ca/translation.json';
import translationEng from './locales/en/translation.json';
import translationEsp from './locales/es/translation.json';
import translationEus from './locales/eu/translation.json';
import translationGal from './locales/ga/translation.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    resources: {
      ca: {
        translations: translationCat
      },
      en: {
        translations: translationEng
      },
      es: {
        translations: translationEsp
      },
      eu: {
        translations: translationEus
      },
      ga: {
        translations: translationGal
      }
    },
    ns: ["translations"],
    defaultNS: "translations"
  })

export default i18n;