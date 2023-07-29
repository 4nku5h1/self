import React from 'react';
import { scrollToContact, onGallaryClickHandler, scrollToServices } from '../helper';

import './styles.scss'

export default function Navbar() {
    return (
        <div className='navbar' id='navbar'>
            <div className='nav-logo'>
                <h2>GRAPHIC<span>NIX</span></h2>
            </div>
            <div className='nav-items'>
                <span onClick={scrollToServices}>Services</span>
                <span onClick={onGallaryClickHandler}>Gallary</span>
                <span onClick={scrollToContact}>Contact</span>
            </div>
        </div>
    )
}