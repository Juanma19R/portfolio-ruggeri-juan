import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {VscFolderLibrary} from 'react-icons/vsc';
import {AiOutlineExperiment} from 'react-icons/ai';
import {MdOutlineQueryBuilder} from 'react-icons/md';

const About = () => {
    return (
        <section id='about'>
            <h5>Conóceme</h5>
            <h2>Sobre mí</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='Foto de Ruggeri Juan' />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <AiOutlineExperiment className='about__icon'/>
                            <h5>Experiencia</h5>
                            <small>1+ año</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Proyectos completados</h5>
                            <small>7</small>
                        </article>

                        <article className='about__card'>
                            <MdOutlineQueryBuilder className='about__icon'/>
                            <h5>Proyectos en desarrollo</h5>
                            <small>3</small>
                        </article>
                    </div>
                        <p>Proactivo, responsable y resolutivo, soy un desarrollador motivado por aprender tecnologías que me ayuden a crecer en el área profesional como desarrollador Front-end. Actualmente estoy participando del programa ONE - Oracle Next Education de Alura Latam y Oracle.</p>

                        <a href='#contact' className='btn btn-primary'>Hablemos!</a>
                </div>
            </div>
        </section>
    )
}

export default About;