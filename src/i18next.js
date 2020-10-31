import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "InfoHi": "Hello",
      "InfoName": "My name is Alex",
      "InfoI`m": "And I'm front-end developer",
      "ProjectsNet":  "Network",
      "ProjectsCalc": "calc",
      
    }
  },
  ru: {
    translation: {
      "InfoHi": "Привет",
      "InfoName": "Звать меня Alex",
      "InfoI`m": "И я front-end разработчик",
      "ProjectsNet":  "сеть",
      "ProjectsCalc": "кальк",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;