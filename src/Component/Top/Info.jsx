import React from 'react';
import s from './Info.module.css';
import Navigation from './Navigation/Navigation';
import AboutMe from './AboutMe/AboutMe';
import Photo from './AboutMe/Photo';

const Info=()=>{
    return (
    <div className={s.info}>
        <Photo/>
        <AboutMe/>
        <Navigation/> 
    </div>
    )
}

export default Info;