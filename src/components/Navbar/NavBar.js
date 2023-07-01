import React from 'react';
import Logo from '../Logo/Logo';
import './styles.scss'

export default function Navbar() {
    return (
        <div className='navbar' id='navbar'>
            <Logo size={8}/>
            <span>GRAPHICNIX © 2023</span>
            <button className='button lets-talk'>Let's Talk</button>
        </div>
    )
}
//   <span>SERVICES</span>
{/* <span>CONTACT</span> */}