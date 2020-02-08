import React from 'react';
import s from './Skills.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faReact, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faReact, faHtml5, faCss3Alt, faJs);

const Skill = () => {
    return (
        <div  className={s.main}>
            <div className={s.skill}>
                My Skills
            </div>
            <div id='skill' className={s.container}>
                <div className={s.img}>
                    <FontAwesomeIcon className={s.icon} icon={faHtml5} />
                    <div className={s.name}>
                        HTML
                    </div>
                </div>
                <div className={s.img}>
                    <FontAwesomeIcon className={s.icon} icon={faJs} />
                    <div className={s.name}>
                        JS
                    </div>
                </div>
                <div className={s.img}>
                    <FontAwesomeIcon className={s.icon} icon={faCss3Alt} />
                    <div className={s.name}>
                        CSS
                    </div>
                </div>
                <div className={s.img}>
                    <FontAwesomeIcon className={s.icon} icon={faReact} />
                    <div className={s.name}>
                        REACT
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;