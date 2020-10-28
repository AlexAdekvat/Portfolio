import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Communication from '../Contact/Contact';
// import ContactContainer from '../Bot/ContactContainer';
import Projects from '../Projects&Skills/Projects';
import Skills from '../Projects&Skills/Skills';
import s from './Info.module.css';

const Info = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)



    return (
        <div className={s.info}>
            <div className={s.containerSkillProject}>
                <div className={s.skill} >Skill</div>
                <Skills />
            </div>

            <div className={s.containerInfo}>
                <div className={s.avatar}>
                    <img src='https://sun9-37.userapi.com/c540107/v540107490/12262/eV0etlop5tc.jpg' alt='Photo' />
                </div>
                <div className={s.container}>
                    <div className={s.myself}>
                        <span>
                            Hello
                           </span>
                        <span>
                            My name is Alex
                           </span>
                        <span>
                            I'm front-end developer
                            </span>
                    </div>
                </div>
                <div className={s.btn}>
                    <button className={s.btnContact} onClick={handleShow} >Contact</button>
                </div>
            </div>
            <div className={s.containerSkillProject}>
                <div className={s.project}>Project</div>
                <Projects />
            </div>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title >Contacts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Communication />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Info;