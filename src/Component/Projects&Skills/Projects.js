import React from 'react';
import s from './Carousel.module.css';
import { Carousel } from 'react-bootstrap';
import Calculator from './../../image/Calculator.png'
import Network from './../../image/Network.jpg'


class Projects extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Carousel className={s.carousel} interval={null}>
                <Carousel.Item className={s.items} >
                    <div className={s.wrapper}>
                        <a href='https://alexadekvat.github.io/Network/' >
                            <img className={s.photo} src={Network} />
                        </a>
                        <div className={s.text}>
                            <h3>Social Network</h3>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className={s.items}>
                    <div className={s.wrapper}>
                        <a href='https://alexadekvat.github.io/Calculator/'>
                            <img className={s.photo} src={Calculator} />
                        </a>
                        <div className={s.text}>
                            <h3>Calculator</h3>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Projects