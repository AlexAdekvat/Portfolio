import React, {useState } from 'react';
import styles from './Switch.module.css';
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';



const SwitchLang = () => {

    const { i18n } = useTranslation();
    const [locale, setLocale] = useState('en')

    const handleChange = () => {
        if (locale === 'en') {
            setLocale('ru');
            i18n.changeLanguage( 'ru');
        } else {
            setLocale('en');
            i18n.changeLanguage( 'en');
        }
    };
   
    return (
        <div className={styles.wrapper}>
            <div className={styles.switchBorder}>
                <Switch className={styles.switch} checkedChildren="EN" unCheckedChildren="RU" onChange={handleChange}/>
            </div>
        </div>

    )

}

export default SwitchLang;
