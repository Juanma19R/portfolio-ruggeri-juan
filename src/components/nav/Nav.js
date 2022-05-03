import React from 'react';
import {useState} from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMessage} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href='#header' onClick={() => setActiveNav('#header')} 
            className={activeNav === '#header' ? 'active' : ''}>
                <AiOutlineHome />
            </a>
            <a href='#about' onClick={() => setActiveNav('#about')} 
            className={activeNav === '#about' ? 'active' : ''}>
                <AiOutlineUser />
            </a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} 
            className={activeNav === '#experience' ? 'active' : ''}>
                <AiOutlineBook />
            </a>
            <a href='#services' onClick={() => setActiveNav('#services')} 
            className={activeNav === '#services' ? 'active' : ''}>
                <RiServiceLine />
            </a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} 
            className={activeNav === '#contact' ? 'active' : ''}>
                <AiOutlineMessage />
            </a>
        </nav>
    )
}

export default Nav;