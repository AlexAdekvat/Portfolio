import React from 'react';
import styles from './Switch.module.css';
// import NavMenu from './NavMenus/NavMenu';
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
 import messages_ru from "./../../i18n/ru.json";
// import messages_en from "./../../i18n/en.json";
// import { IntlProvider } from 'react-intl';





const SwitchLang = () => {


    const { t, i18n } = useTranslation();
       function changeLocal(lang) {
           i18n.changeLanguage(lang);
      }

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.switchBorder}>
                        <Switch className={styles.switch} changeLocal={changeLocal}
                                    checkedChildren="EN" unCheckedChildren="RU" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SwitchLang;