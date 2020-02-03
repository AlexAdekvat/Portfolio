import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={s.container}>
            <div className={s.navigation}>
                <div className={s.home}>
                    Home
            </div>
                <div className={s.skills}>
                    Skills
            </div>
                <div className={s.project}>
                    Project
            </div>
                <div className={s.contact}>
                    Contact
            </div>
            </div>
        </div>
    )
}

export default Navigation;