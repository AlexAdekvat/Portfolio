import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Communication from '../Contact/Contact';
import Projects from '../Projects&Skills/Projects';
import Skills from '../Projects&Skills/Skills';
import s from './Info.module.css';
import SwitchLang from '../Switch/Switch';
import avatar from './../../image/ava.jpg'
import { useTranslation } from 'react-i18next';

const Info = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const { t, i18n } = useTranslation();



    return (
        <div className={s.info}>
            <div className={s.containerSkillProject}>
                <span className={s.skill} >{t('Skills')}</span>
                <Skills />
            </div>

            <div className={s.containerInfo}>
                <div className={s.descriptionMe}>
                    <div className={s.avatar}>
                        <img src={avatar} alt='Photo' />
                    </div>
                    <div className={s.switch}>
                        <SwitchLang />
                    </div>
                    <div className={s.container}>
                        <div className={s.myself}>
                            <span>{t('InfoHi')}</span>
                            <span>{t('InfoName')}</span>
                            <span>{t('InfoI`m')}</span>
                        </div>
                    </div>
                </div>
                <div className={s.btn}>
                    <button className={s.btnContact} onClick={handleShow} >{t('Contact')}</button>
                </div>
            </div>
            <div className={s.containerSkillProject}>
                <span className={s.project}>{t('Project')}</span>
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