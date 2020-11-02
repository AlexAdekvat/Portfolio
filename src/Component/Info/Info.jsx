import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
// import {Switch} from 'antd';
import Communication from '../Contact/Contact';
// import ContactContainer from '../Bot/ContactContainer';
import Projects from '../Projects&Skills/Projects';
import Skills from '../Projects&Skills/Skills';
import s from './Info.module.css';
import SwitchLang from '../Switch/Switch';
import avatar from './../../image/ava.jpg'
import { useTranslation } from 'react-i18next';

//  import messages_ru from "./../../i18n/ru.json";
//  import messages_en from "./../../i18n/en.json";

// import { FormattedMessage } from 'react-intl';
//  import {FormattedHTMLMessage} from "react-intl";

const Info = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const { t, i18n } = useTranslation();
//     function changeLocal(lang) {
//         i18n.changeLanguage(lang);
//    }



    return (
        <div className={s.info}>
            <div className={s.containerSkillProject}>
                <div className={s.skill} >{t('Skills')}</div>
                <Skills />
            </div>

            <div className={s.containerInfo}>
                <div className={s.avatar}>
                    <img src={avatar} alt='Photo' />
                </div>
                <div>
                    {/* <Switch className={s.switch} /> */}

                    <SwitchLang  />
                
                </div>
                <div className={s.container}>
                    <div className={s.myself}>
                        <span>{t('InfoHi')}</span>
                        <span>{t('InfoName')}</span>
                        <span>{t('InfoI`m')}</span>
                    </div>
                </div>
                <div className={s.btn}>
                    <button className={s.btnContact} onClick={handleShow} >{t('Contact')}</button>
                </div>
            </div>
            <div className={s.containerSkillProject}>
                <div className={s.project}>{t('Project')}</div>
                <Projects />
            </div>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title >{t('Contacts')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Communication />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Info;