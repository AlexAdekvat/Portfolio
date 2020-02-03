import React from 'react';
import s from './Skills.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faReact, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faReact, faHtml5, faCss3Alt, faJs);

const Skill = () => {
    return (
        <div>
            <div className={s.skill}>
                My Skills
            </div>
            <div className={s.container}>
                <div className={s.img}>
                    <FontAwesomeIcon className={s.icon} icon={faHtml5} />
                </div>
                <div className={s.img}>
                    <FontAwesomeIcon className={s.icon} icon={faJs} />
                </div>
                <div className={s.img}>
                    <FontAwesomeIcon className={s.icon} icon={faCss3Alt} />
                </div>
                <div className={s.img}>
                    <FontAwesomeIcon className={s.icon} icon={faReact} />
                </div>
            </div>
        </div>
    )
}

export default Skill;