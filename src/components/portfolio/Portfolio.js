import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Mi portfolio',
        github: 'https://github.com/Juanma19R/portfolio-ruggeri-juan',
        demo: 'https://github.com/Juanma19R/portfolio-ruggeri-juan'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Aplicación que encripta y desencripta textos',
        github: 'https://github.com/Juanma19R/Sprint-01-Alura',
        demo: 'https://juanma19r.github.io/Sprint-01-Alura/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Ecommers de productos electronicos',
        github: 'https://github.com/Juanma19R/ecommerce-react',
        demo: 'https://github.com/Juanma19R/ecommerce-react'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Sitio web conectado a una API de películas',
        github: 'https://github.com/Juanma19R/proyectoCursoJS',
        demo: 'https://juanma19r.github.io/proyectoCursoJS/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Landing Page para consultorio de cosmetología',
        github: 'https://github.com/Juanma19R/db-beautycare',
        demo: 'https://dbbeautycare.com/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Sitio web para busqueda de trabajo remoto',
        github: 'https://github.com/Juanma19R/trabajoRemoto',
        demo: 'https://juanma19r.github.io/trabajoRemoto/'
    },
];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Mis proyectos</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt='Imagen del proyecto'/>
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Demo</a>
                            </div>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;