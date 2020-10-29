import React from 'react';
import s from './Carousel.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faReact, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-bootstrap';
library.add(faReact, faHtml5, faCss3Alt, faJs);

const Skills = () => {
    return (
        <Carousel className={s.carousel} interval={19000}>
            <Carousel.Item className={s.items}>
                <FontAwesomeIcon className={s.iconHtml} icon={faHtml5} />
                <div className={s.nameSkill}>
                    <h3>HTML</h3>
                </div>
            </Carousel.Item>
            <Carousel.Item className={s.items}>
                <FontAwesomeIcon className={s.iconReact} icon={faReact} />
                <div className={s.nameSkill}>
                    <h3>REACT</h3>
                </div>
            </Carousel.Item >
            <Carousel.Item className={s.items}>
                <FontAwesomeIcon className={s.iconCss} icon={faCss3Alt} />
                <div className={s.nameSkill}>
                    <h3>CSS</h3>
                </div>
            </Carousel.Item>
            <Carousel.Item className={s.items}>
                <FontAwesomeIcon className={s.iconJs} icon={faJs} />
                <div className={s.nameSkill}>
                    <h3>JS</h3>
                </div>
            </Carousel.Item>

        </Carousel>
    )
}
export default Skills