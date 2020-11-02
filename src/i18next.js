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
      "Skills": "Skills",
      "Project": "Project",
      "Contacts": "Contacts",
      "Contact": "Contacts",
      "CommunicateWithMe": "Also you can communicate with me",
      "ProjectsNet":  "Social Network",
      "ProjectsCalc": "Calculator",
      "Name": "Name",
      "Email": "Email",
      "Message": "Message",
      "Submit": "Submit",
      "ErrorName": "Enter at least three characters",
      "ErrorEmail": "Enter a valid value",
      "ErrorMessage": "Enter at least ten characters",
      
    }
  },
  ru: {
    translation: {
      "InfoHi": "Привет",
      "InfoName": "Звать меня Alex",
      "InfoI`m": "И я front-end разработчик",
      "Skills": "Скиллы",
      "Project": "Проекты",
      "Contacts": "Контакты",
      "Contact": "Контакты",
      "CommunicateWithMe": "Также вы можете связаться со мной",
      "ProjectsNet":  "Социальная Сеть",
      "ProjectsCalc": "Калькулятор",
      "Name": "Имя",
      "Email": "Email",
      "Message": "Сообщение",
      "Submit": "Отправить",
      "ErrorName": "Введите не менее трех символов",
      "ErrorEmail": "Введите допустимое значение",
      "ErrorMessage": "Введите не менее десяти символов",

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