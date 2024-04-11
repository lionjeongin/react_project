import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './langs/ko' // = ./langsko/index.js / index.js는 생략 가능
import en from './langs/en';

const resources = {
    en: {
        translation: en, 
    },
    ko: {
        translation: ko,
    },
};

i18n.use(initReactI18next).init({
    resources, //= resources: resources
    lng: navigator.langage, //본인 브라우저에 맞게 언어 나옴
});