import React from 'react';
import s from './Carousel.module.css';
import { Carousel } from 'react-bootstrap';
import Calculator from './../../image/Calculator.png'
import Network from './../../image/Network.jpg'
import { useTranslation } from 'react-i18next';



const Projects = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <Carousel className={s.carousel} id="carousel" interval={null} indicators={null}>
                <Carousel.Item className={s.items} id="#carousel">
                    <div className={s.wrapper} id="#carousel">
                        <a href='https://alexadekvat.github.io/Network/' >
                            <img className={s.photo} src={Network} id="#carousel" />
                        </a>
                        <div className={s.name}>
                            <p>{t('ProjectsNet')}</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className={s.items} id="#carousel" >
                    <div className={s.wrapper} id="#carousel">
                        <a href='https://alexadekvat.github.io/Calculator/'>
                            <img className={s.photo} src={Calculator}  id="#carousel"/>
                        </a>
                        <div className={s.name}>
                            <p>{t('ProjectsCalc')}</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}


export default Projects