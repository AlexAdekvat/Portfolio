import React from 'react';
import s from './Sliders.module.css';
import calc from './../../image/calc.png'
import project1 from './../../image/project1.jpg'
import Slider from './Sliders';


const Projects = () => {
    return (
        <div className={s.slider}>
            <Slider/>
            <div>
                <img className={s.item} src={calc} />
            </div>
            <div>
                <img className={s.item} data-interval="false" src={project1} />
            </div>
        </div>

    )
}

export default Projects
