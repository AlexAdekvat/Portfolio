import React, { useState } from 'react';
import './App.css';
import Info from './Component/Info/Info';
import SwitchLang from './Component/Switch/Switch';
// import { useTranslation } from 'react-i18next';
// import i18n from './i18next'




function App() {

  // const { t, i18n } = useTranslation();
  // const [locale, setLocale] = useState('en')
  // const handleChange = (lang) => {
  //   setLocale(lang)
  //   i18n.changeLanguage(lang);
  // }


  return (
    <div className="App">
      
      {/* <p>{t('Info')}</p>
      <p>{t('ProjectsNet')}</p>
      <p>{t('ProjectsCalc')}</p> */}
      <Info />
    </div>
  );

}

export default App;
