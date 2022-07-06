import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>¿Que habilidades tengo?</h5>
            <h2>Mi experiencia</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Desarrollo Front-end</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>SASS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>React JS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Redux</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Materialize CSS</h4>
                            </div>
                        </article>
                    </div>
                </div>

                <div className='experience__otherSkills'>
                    <h3>Otras habilidades</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Firebase</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Postman</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Axios</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>GIT</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>SCRUM</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Ingles B1</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;