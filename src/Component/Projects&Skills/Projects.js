import React from 'react';
import s from './Carousel.module.css';
import { Carousel } from 'react-bootstrap';
import Calculator from './../../image/Calculator.png'
import Network from './../../image/Network.jpg'
import { useTranslation } from 'react-i18next';



const Projects = () => {
    const { t, i18n } = useTranslation();

    return (
        <Carousel className={s.carousel} interval={null} indicators={null}>
            <Carousel.Item className={s.items} >
                <div className={s.wrapper}>
                    <a href='https://alexadekvat.github.io/Network/' >
                        <img className={s.photo} src={Network} />
                    </a>
                    <div className={s.name}>
                        <p>{t('ProjectsNet')}</p>

                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className={s.items}>
                <div className={s.wrapper}>
                    <a href='https://alexadekvat.github.io/Calculator/'>
                        <img className={s.photo} src={Calculator} />
                    </a>
                    <div className={s.name}>
                        <p>{t('ProjectsCalc')}</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}


export default Projects