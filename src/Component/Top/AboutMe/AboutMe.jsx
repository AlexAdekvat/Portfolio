import React from 'react';
import s from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <div className={s.container}>
            <div className={s.avatar}>
                <img src='https://sun1.dataix-by-minsk.userapi.com/impg/hlond43UuOnVoLXOyiGga4ffU_o1rAm9xgPn1g/FJslj0g8zRU.jpg?size=200x0&quality=90&sign=31f3a5500d36c2f28de8232dd7a21414' alt='' />
            </div>
            <div className={s.myself}>
                <div>
                    <h1>Hello</h1>
                </div>
                <div>
                    My name is Alex
            </div>
                <div>
                    I'm front-end developer
            </div>
            </div>
        </div>
    )
}

export default AboutMe;