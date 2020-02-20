import React from 'react';
import s from './AboutMe.module.css';

const AboutMe = () => {
    return (
            <div id='home' className={s.container}>
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
    )
}

export default AboutMe;