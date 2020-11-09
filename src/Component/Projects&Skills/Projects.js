import React from 'react';
import s from './Carousel.module.css';
import Calculator from './../../image/Calculator.png'
import Network from './../../image/Network.jpg'
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';

const Projects = () => {
    const { t } = useTranslation();

    return (
        <Carousel className={s.carousel} interval={null} indicators={null} >
            <Carousel.Item>
                <span className={s.wrapper}>
                    <a href='https://alexadekvat.github.io/Network/' >
                        <img
                            className={s.photo}
                            src={Network}
                            alt="First slide"
                        /></a>
                    <div className={s.name}>
                        <p>{t('ProjectsNet')}</p>
                    </div>
                </span>
            </Carousel.Item>
            <Carousel.Item>
                <span className={s.wrapper}>
                    <a href='https://alexadekvat.github.io/Calculator/'>
                        <img
                            className={s.photo}
                            src={Calculator}
                            alt="2 slide"
                        /></a>
                    <div className={s.name}>
                        <p>{t('ProjectsCalc')}</p>
                    </div>
                </span>
            </Carousel.Item>
        </Carousel>
    )
}
export default Projects