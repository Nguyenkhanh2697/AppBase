// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-empty-function */
// import i18n, {LanguageDetectorAsyncModule} from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import {resources} from '@assets/locales';

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

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */

// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import eng from './eng';
// import vie from './vie';

// // let eng = {
// //   translation: {
// //     name: 'Name',
// //     email: 'Email',
// //     phone: 'Phone',
// //     back: 'Back',
// //     save: 'Save',
// //     errorEmailRequired: 'Email is required',
// //     errorEmail: 'Email is invalid',
// //     errorPhoneRequired: 'Phone is required',
// //     errorPhone: 'Phone is invalid',
// //     errorNameRequired: 'Name is required',
// //     alertSuccess: 'Success',
// //     changeLanguage: 'Change language',
// //   },
// // };
// // let viet = {
// //   translation: {
// //     name: 'Tên',
// //     email: 'Thư điện tử',
// //     phone: 'Số điện thoại',
// //     back: 'Quay lại',
// //     save: 'Lưu',
// //     errorEmailRequired: 'Phải nhập email',
// //     errorEmail: 'Không đúng định dạng mail',
// //     errorPhoneRequired: 'Phải nhập số điện thoại',
// //     errorPhone: 'Không đúng định dạng số điện thoại',
// //     errorNameRequired: 'Phải nhập tên',
// //     alertSuccess: 'Thành công',
// //     changeLanguage: 'Thay đổi ngôn ngữ',
// //   },
// // };
// const resources = {
//   en: eng,
//   vi: vie,
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: 'vi',

//   keySeparator: false,

//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEn from './eng.json';
import translationVi from './vie.json';

const resources = {
  en: {
    translation: translationEn,
  },
  vi: {
    translation: translationVi,
  },
};

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'vi',
  lng: 'vi',
  load: 'all',
  ns: ['translation'],
  defaultNS: 'translation',
  resources: resources,
  react: {wait: true},
  interpolation: {escapeValue: false},
});

export default i18n;
