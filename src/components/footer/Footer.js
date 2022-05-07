import React from 'react';
import './footer.css';
import {AiOutlineGithub, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <a href='#logo' className='footer__logo'>Juanma</a>

            <ul className='permalinks'>
                <li><a href='#header'>Home</a></li>
                <li><a href='#about'>Sobre mí</a></li>
                <li><a href='#experience'>Mi experiencia</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contáctame!</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://github.com/Juanma19R/' target='_blank' rel='noreferrer'><AiOutlineGithub/></a>
                <a href='https://twitter.com/Juanma_s8' target='_blank' rel='noreferrer'><AiOutlineTwitter/></a>
                <a href='https://www.instagram.com/juanma_s8/' target='_blank' rel='noreferrer'><AiOutlineInstagram/></a>
            </div>
        </footer>
    )
}

export default Footer;