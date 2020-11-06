import React from 'react';
import s from './Carousel.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faReact, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-bootstrap';
library.add(faReact, faHtml5, faCss3Alt, faJs);

const Skills = () => {
    return (
         <Carousel className={s.carousel} interval={null} indicators={null} >
             <Carousel.Item className={s.items} >
                 <div className={s.wrapper}>
                     <FontAwesomeIcon className={s.icon} icon={faHtml5} />
                     <div className={s.name}>
                         <p>HTML</p>
                     </div>
                 </div>
             </Carousel.Item>
             <Carousel.Item className={s.items}>
                 <div className={s.wrapper}>
                     <FontAwesomeIcon className={s.icon} icon={faReact} />
                     <div className={s.name}>
                         <p>REACT</p>
                     </div>
                 </div>
             </Carousel.Item >
             <Carousel.Item className={s.items}>
                 <div className={s.wrapper}>
                     <FontAwesomeIcon className={s.icon} icon={faCss3Alt} />
                     <div className={s.name}>
                         <p>CSS</p>
                     </div>
                 </div>
             </Carousel.Item>
             <Carousel.Item className={s.items}>
                 <div className={s.wrapper}>
                     <FontAwesomeIcon className={s.icon} icon={faJs} />
                     <div className={s.name}>
                         <p>JS</p>
                     </div>
                 </div>
             </Carousel.Item>
         </Carousel>

    )
}
export default Skills