import React from 'react';
import s from './Skills.module.css';
import MySkills from './MySkill/MySkill';

const Skill = () => {
    return (
        <div id='skill' className={s.main}>
            <div className={s.skill}>
                My Skills
            </div>
            <MySkills/>
        </div>
        
    )
}

export default Skill;