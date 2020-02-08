import React from 'react';
import s from './Info.module.css';
import Navigation from './Navigation/Navigation';
import AboutMe from './AboutMe/AboutMe';

const Info=()=>{
    return (
    <div className={s.info}>
        <AboutMe/>
        <Navigation/>
    </div>
    )
}

export default Info;