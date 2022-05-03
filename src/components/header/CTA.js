import React from 'react';
import CV from '../../assets/CV-Ruggeri-Juan.pdf';

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} className='btn' download>Descargar CV</a>
            <a href='#contact' className='btn btn-primary'>Hablemos!</a>
        </div>
    )
}

export default CTA;