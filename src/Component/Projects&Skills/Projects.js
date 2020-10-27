import React from 'react';
import s from './Carousel.module.css';
import { Carousel } from 'react-bootstrap';
import Project2 from './../../image/Project2.png'
import project1 from './../../image/project1.jpg'
import $ from 'jquery';
import Popper from 'popper.js';



class Projects extends React.Component {
    constructor(props) {
        super(props);

        $(function () {
            $('#carousel').carousel({
                interval: false
            })
        })
    }

    render() {
        return (
            // <Carousel className={s.carousel} id="carousel">
            //     <Carousel.Item className={s.items} data-interval="false" >
            //     <li data-target="#carousel" data-slide-to="0"></li>
            //         <img className={s.photo} src={Project2} data-interval="false" />
            //     </Carousel.Item>
            //     <Carousel.Item className={s.items}>
            //     <li data-target="#carousel" data-slide-to="1"></li>
            //         <img className={s.photo} src={project1} />
            //     </Carousel.Item>
            // </Carousel>
            <div>
                <div id="carousel" class="carousel slide d-inline-block">
                    {/* <ol class="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                    </ol> */}
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img className={s.project} src={Project2}  alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img className={s.project} src={project1} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img className={s.project} src={project1} alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Предыдущий</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Следующий</span>
                    </a>
                </div>

            </div>
        )
    }
}

export default Projects