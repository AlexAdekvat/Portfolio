import React from 'react';
import s from './Carousel.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faReact, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-bootstrap';
library.add(faReact, faHtml5, faCss3Alt, faJs);

const Skills = () => {
    return (
        <Carousel className={s.carousel}>
            <Carousel.Item className={s.items}>
                <FontAwesomeIcon className={s.icon} icon={faHtml5} />
            </Carousel.Item>
            <Carousel.Item className={s.items}>
                <FontAwesomeIcon className={s.icon} icon={faReact} />
            </Carousel.Item >
            <Carousel.Item className={s.items}>
                <FontAwesomeIcon className={s.icon} icon={faCss3Alt} />
            </Carousel.Item>
        </Carousel>
    )
}
export default Skills