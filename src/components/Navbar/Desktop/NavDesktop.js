import React from 'react';
import { scrollToContact, scrollToServices } from '../helper';

import './styles.scss'
import { Link } from 'react-router-dom';

export default function NavDesktop() {
    return (
        <div className='navbar' id='navbar'>
            <div className='nav-logo'>
                <h2>GRAPHIC<span>NIX</span></h2>
            </div>
            <div className='nav-items'>
                <Link to="/services">
                    <span onClick={scrollToServices}>Services</span>
                </Link>
                <Link to="/gallary">
                    <span>Gallary</span>
                </Link>
                <span onClick={scrollToContact}>Contact</span>
            </div>
        </div>
    )
}