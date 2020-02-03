import React from 'react';
import s from './Bot.module.css';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


const Communication = () => {
    return (
        <div>
            <div className={s.bot}>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

export default Communication;