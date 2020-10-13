import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import languageEN from './locales/en/translate.json';
import languageTR from './locales/tr/translate.json';

i18n.use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: languageEN,
            tr: languageTR,
        },
        lng: 'en',
        fallbackLng: 'en',
        debug: process.env.NODE_ENV !== 'production',
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: '.',
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindI18nStore: 'added removed',
        },
    });

export default i18n;
