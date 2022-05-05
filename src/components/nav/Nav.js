import React from 'react';
import {useState} from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineExperiment, AiOutlineMessage} from 'react-icons/ai';
import {VscFolderLibrary} from 'react-icons/vsc';

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
                <AiOutlineExperiment />
            </a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} 
            className={activeNav === '#portfolio' ? 'active' : ''}>
                <VscFolderLibrary />
            </a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} 
            className={activeNav === '#contact' ? 'active' : ''}>
                <AiOutlineMessage />
            </a>
        </nav>
    )
}

export default Nav;