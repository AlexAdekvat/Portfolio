import React from 'react';
import s from './Scroll.module.css';
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
    scroll.scrollToTop();
}
    const Scroll =()=>{
        return (
            <div>
                <button
                    onClick={scrollToTop}
                    className={s.btn}>
                </button>
            </div >
        )
    }
export default Scroll;
