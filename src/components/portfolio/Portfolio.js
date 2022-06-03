import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from '../../assets/portfolio7.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Mi portfolio',
        desc: 'Fue creado con el fin de mostrar mis proyectos y aptitudes, este portfolio fue hecho con React y CSS3.',
        github: 'https://github.com/Juanma19R/portfolio-ruggeri-juan',
        demo: 'https://juanruggeriportfolio.com/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Aplicación que encripta y desencripta textos',
        desc: 'Trabajo del primer SPRINT del programa ONE (Oracle Next Education), fue construido con html5, css3 y javascript. Encripta textos ingresados en el Textarea remplazando las vocales por "ai, enter, imes, ober, y ufat". Tambien cuenta con la función para desencriptarlas.',
        github: 'https://github.com/Juanma19R/Sprint-01-Alura',
        demo: 'https://juanma19r.github.io/Sprint-01-Alura/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Ecommers de productos electronicos',
        desc: 'Proyecto final para el curso de React Js de Coder House. Es un e-commers de articulos para PC, fue creado con React, Mui, SCSS y Firebase para simular su base de datos.',
        github: 'https://github.com/Juanma19R/ecommerce-react',
        demo: 'https://juanma19r.github.io/ecommerce-react/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Sitio web conectado a una API de películas',
        desc: 'Proyecto final para el curso de JavaScript de Coder House. Es un sitio web para buscar películas, leer su descripción y ver sus trailers. Consta de 2 páginas, una de ellas conectada a la API de TMDB (The movie data base) para renderizar las películas en la página y la otra a modo de home, con un anotador de películas que funciona con el Local Storage del navegador.',
        github: 'https://github.com/Juanma19R/proyectoCursoJS',
        demo: 'https://juanma19r.github.io/proyectoCursoJS/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Landing Page para consultorio de cosmetología',
        desc: 'Fue creada con bootstrap, html5, php (Solo para el formulario de contacto), css3 y JavaScript para el funcionamiento del carrousel.',
        github: 'https://github.com/Juanma19R/db-beautycare',
        demo: 'https://dbbeautycare.com/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Sitio web para busqueda de trabajo remoto',
        desc: 'Proyecto final para el curso "Desarrollo Web" de Coder House. Es un sitio web de 5 páginas para encontrar trabajo remoto y tambien cargar búsquedas. Fue hecho con Bootstrap, HTML5, SCSS y JavaScript.',
        github: 'https://github.com/Juanma19R/trabajoRemoto',
        demo: 'https://juanma19r.github.io/trabajoRemoto/'
    },
    {
        id: 7,
        image: IMG7,
        title: 'Aplicación para monitorizar el tiempo',
        desc: 'Proyecto creado con la API de OpenWeatherMap, ReactJS y maquetado con Bootstrap 5.',
        github: 'https://github.com/Juanma19R/Practica-01',
        demo: 'https://juanma19r.github.io/Practica-01/'
    }
];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Mis proyectos</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({id, image, title, desc, github, demo}) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt='Imagen del proyecto'/>
                            </div>
                            <h3>{title}</h3>
                            <p>{desc}</p>
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