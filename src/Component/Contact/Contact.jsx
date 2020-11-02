import React from 'react';
import s from './Contact.module.css';
import ContactContainer from './ContactContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faVk, faGithub, faTelegram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

library.add(faLinkedinIn, faVk, faGithub, faTelegram);


const Communication = () => {
const { t, i18n } = useTranslation();

    return (
        <div>
            <div className={s.bot}>
                <ContactContainer />
                <div className={s.footer}>
                    <div className={s.container}>
                        {t('CommunicateWithMe')}
                <div className={s.social}>
                            <a href='https://vk.com/id154135396'>
                                <FontAwesomeIcon className={s.icon} icon={faVk} />
                            </a>
                            <a href='https://github.com/AlexAdekvat'>
                                <FontAwesomeIcon className={s.icon} icon={faGithub} />
                            </a>
                            <a href='https://t.me/AlexAdekvat' >
                                <FontAwesomeIcon className={s.icon} icon={faTelegram} />
                            </a>
                            <a href='https://www.linkedin.com/in/alex-adekvat-5117a51a0/'>
                                <FontAwesomeIcon className={s.icon} icon={faLinkedinIn} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Communication;