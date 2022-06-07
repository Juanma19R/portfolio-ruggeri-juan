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
                            <small>9</small>
                        </article>

                        <article className='about__card'>
                            <MdOutlineQueryBuilder className='about__icon'/>
                            <h5>Proyectos en desarrollo</h5>
                            <small>2</small>
                        </article>
                    </div>
                        <p>Comprometido, preciso y proactivo. Me esfuerzo por evitar situaciones antagónicas por medio de la atención al detalle. Hago lo que esté a mi alcance para evitar riesgos y errores, poseo habilidades resolutivas.
                        Objetivo y racional en la actividad que esté realizando. Como tiendo a ser perfeccionista y detallista me  siento a gusto trabajando con suficiente tiempo e información para poder organizarme. Antes de tomar una decisión prefiero tener muchos datos disponibles, por lo cual actúo con cautela a la hora de tomar decisiones.  
                        Soy una persona moderadamente extrovertida y me gusta trabajar con otros. Por lo general soy un buen miembro de equipo y puede volverme parte integral del grupo. 
                        Como Desarrollador Front-end estoy motivado por aprender tecnologías que me ayuden a crecer en el área profesional. Actualmente estoy participando del programa ONE - Oracle Next Education de Alura Latam y Oracle.</p>
                        <a href='#contact' className='btn btn-primary'>Hablemos!</a>
                </div>
            </div>
        </section>
    )
}

export default About;