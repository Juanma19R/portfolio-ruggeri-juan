import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header id='header'>
            <div className='container header__container'>
                <h5>Hola soy</h5>
                <h1>Juan Ruggeri</h1>
                <h5 className='text-light'>Desarrollador Front-end</h5> 
                <CTA /> 
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt='Foto de Juan Ruggeri'/>
                </div>

                <a href='#contact' className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header;