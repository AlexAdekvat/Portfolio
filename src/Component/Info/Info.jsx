import React from 'react';
import Projects from '../Projects&Skills/Projects';
import Skills from '../Projects&Skills/Skills';
import s from './Info.module.css';

const Info=()=>{
    return (
    <div className={s.info}>
        <div>
            <div>Skill</div>
            <Skills/>
        </div>
        
        <div>
            <div id='home' className={s.avatar}>
            <img src='https://sun9-37.userapi.com/c540107/v540107490/12262/eV0etlop5tc.jpg' alt='Photo' />
        </div>
            <div id='home' className={s.container}>
                <div className={s.myself}>
                    <span>
                        Hello
                           </span>
                    <span>
                        My name is Alex
                           </span>
                    <span>
                        I'm front-end developer
                            </span>
                </div>
            </div>
        </div>
        <div>
            <div className={s.project}>project</div>
            <Projects/>
        </div>
    </div>
    )
}

export default Info;