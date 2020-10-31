import React, { useCallback, useEffect, useState } from 'react';
import styles from './Switch.module.css';
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import Toggle from 'react-toggle';



const SwitchLang = () => {

    const lang = 'lang'
    const { i18n } = useTranslation();

    const [locale, setLocale] = useState(lang)
    const handleChange = (lang) => {
        setLocale(lang)
        i18n.changeLanguage(lang);
    }

    useEffect(() => {
        if (!locale.lang) 
        setLocale ({lang:'ru'});
    })
       

    return (
        <div className={styles.wrapper}>
            <div className={styles.switchBorder}>
                <Switch className={styles.switch} checkedChildren="EN" unCheckedChildren="RU"
                   onChange={(e) => handleChange(e.target.lang)}
                />
            </div>
        </div>

    )

}



export default SwitchLang;



    //   const [isValue, setIsValue] = useState(handleChange);

   

{/* <select value={locale} onChange={(e) => handleChange(e.target.value)} >
                    <option value="en" > eng </option>
                    <option value="ru" > rus </option>
                </select> */}