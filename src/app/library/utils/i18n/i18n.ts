// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-empty-function */
// import i18n, {LanguageDetectorAsyncModule} from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import { resources } from '@assets/locales';
// import translationEn from './eng.json';
// import translationVi from './vie.json';

// const resources = {
//   en_US: {
//     translation: translationEn,
//   },
//   vi_VN: {
//     translation: translationVi,
//   },
// };
// const languageDetector: LanguageDetectorAsyncModule = {
//   type: 'languageDetector',
//   async: true, // flags below detection to be async
//   detect: (callback: any) => {
//     callback('vi_VN');
//   },
//   init: () => {},
//   cacheUserLanguage: () => {},
// };
// /**
//  * Config i18n for app
//  */
// i18n
//   .use(languageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'vi_VN',

//     resources: resources,

//     // have a common namespace used around the full app
//     ns: ['common'],
//     defaultNS: 'common',
//     debug: false,

//     // cache: {
//     //   enabled: true
//     // },

//     interpolation: {
//       escapeValue: false, // not needed for react as it does escape per default to prevent xss!
//     },
//   });

// export default i18n;

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {resources} from '@assets/locales';
const source = {
  en_US: {
    translation: resources.es_US,
  },
  vi_VN: {
    translation: resources.vi_VN,
  },
};

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'vi_VN',
  lng: 'vi_VN',
  load: 'all',
  ns: ['translation'],
  defaultNS: 'translation',
  resources: source,
  react: {wait: true},
  interpolation: {escapeValue: false},
});

export default i18n;
