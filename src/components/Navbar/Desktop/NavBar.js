import React from 'react';
import { scrollToContact, onGallaryClickHandler, scrollToServices } from '../helper';

import './styles.scss'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar' id='navbar'>
            <div className='nav-logo'>
                <h2>GRAPHIC<span>NIX</span></h2>
            </div>
            <div className='nav-items'>
                <span onClick={scrollToServices}>Services</span>
                <Link to="/gallary">
                    <span onClick={onGallaryClickHandler}>Gallary</span>
                </Link>
                <span onClick={scrollToContact}>Contact</span>
            </div>
        </div>
    )
}