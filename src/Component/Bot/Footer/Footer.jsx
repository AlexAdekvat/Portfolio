import React from 'react';
import s from './Footer.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faVk, faGithub, faTelegram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faLinkedinIn, faVk, faGithub, faTelegram);

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                You can communicate with me
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
    )
}

export default Footer;