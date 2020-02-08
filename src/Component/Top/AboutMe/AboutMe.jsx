import React from 'react';
import s from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <div id='home' className={s.main}>
            <div className={s.container}>
                <div className={s.avatar}>
                    <img src='https://sun9-37.userapi.com/c540107/v540107490/12262/eV0etlop5tc.jpg' alt='Photo' />
                </div>
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
        </div>
    )
}

export default AboutMe;