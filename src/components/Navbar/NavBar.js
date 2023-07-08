import React from 'react';

import './styles.scss'
import { scrollToContact, scrollToGallary, scrollToServices } from '../FloatingNav/helper';

export default function Navbar() {
    return (
        <div className='navbar' id='navbar'>
            <div className='nav-logo'>
                <h2>GRAPHIC<span>NIX</span></h2>
            </div>
            <div className='nav-items'>
                <span onClick={scrollToServices}>Services</span>
                <span onClick={scrollToGallary}>Gallary</span>
                <span onClick={scrollToContact}>Contact</span>
            </div>
        </div>
    )
}