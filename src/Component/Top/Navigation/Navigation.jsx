import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={s.navigation}>
            <div className={s.home}>
                <a href='#home' className={s.link}>Home</a>
            </div>
            <div className={s.skills}>
                <a href='#skill' className={s.link}>Skills</a>
            </div>
            {/* <div className={s.project}>
                <a href='#project' className={s.link}>Project</a>
            </div> */}
            <div className={s.contact}>
                <a href='#contact' className={s.link}>Contact</a>
            </div>
        </div>
    )
}

export default Navigation;