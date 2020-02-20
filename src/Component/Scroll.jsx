import React, { Component } from 'react';
import s from './Scroll.module.css';
import { animateScroll as scroll } from "react-scroll";

class Scroll extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <div>
                <button
                    onClick={this.scrollToTop}
                    className={s.btn}>
                </button>
            </div >
        )
    }
}

export default Scroll;
