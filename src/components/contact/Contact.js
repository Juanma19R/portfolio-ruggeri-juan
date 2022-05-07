import React from 'react';
import './contact.css';
import {AiOutlineMail, AiOutlineLinkedin, AiOutlineWhatsApp} from 'react-icons/ai';

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Ponerse en contacto</h5>
            <h2>Contáctame!</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                    <AiOutlineMail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>juan.ruggeri@hotmail.com</h5>
                    <a href='mailto:juan.ruggeri@hotmail.com'>Enviar un correo</a>
                    </article>
                    <article className='contact__option'>
                    <AiOutlineLinkedin className='contact__option-icon'/>
                    <h4>LinkedIn</h4>
                    <h5>Juan Manuel Ruggeri</h5>
                    <a href='https://www.linkedin.com/in/juan-manuel-ruggeri/' target='_blank' rel='noreferrer'>Escribir por LinkedIn</a>
                    </article>
                    <article className='contact__option'>
                    <AiOutlineWhatsApp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+542346599666</h5>
                    <a href='https://wa.me/542346599666/' target='_blank' rel='noreferrer'>Enviar un mensaje</a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact;