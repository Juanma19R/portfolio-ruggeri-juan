import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

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
                            <FaAward className='about__icon'/>
                            <h5>Experiencia</h5>
                            <small>1+ año</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clientes</h5>
                            <small>100+</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Proyectos</h5>
                            <small>30+</small>
                        </article>
                    </div>
                        <p>Proactivo, responsable y resolutivo, soy un desarrollador motivado por aprender tecnologías que me ayuden a crecer en el área profesional. Actualmente estoy culminando la carrera de Desarrollo Front-end React en Coder House y participando del programa ONE - Oracle Next Education de Alura Latam y Oracle.</p>

                        <a href='#contact' className='btn btn-primary'>Hablemos!</a>
                </div>
            </div>
        </section>
    )
}

export default About;