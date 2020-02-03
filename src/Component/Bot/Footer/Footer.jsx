import React from 'react';
import s from './Footer.module.css';


const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                You can communicade with me
                <div className={s.social}>
                    <a className={s.iVk} href='https://vk.com/id154135396' />
                    <a className={s.iGitHub} href='https://github.com/AlexAdekvat' />
                    <a className={s.iTelegram} href='https://t.me/AlexAdekvat' />
                    <a className={s.iTwitter} href='https://twitter.com/AlexAdekvat' />
                </div>
            </div>
        </div>
    )
}

export default Footer;