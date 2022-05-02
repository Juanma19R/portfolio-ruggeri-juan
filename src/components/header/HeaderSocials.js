import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/juan-manuel-ruggeri/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
            <a href='https://github.com/Juanma19R' target='_blank' rel='noreferrer'><BsGithub/></a>
        </div>
    )
}

export default HeaderSocials;