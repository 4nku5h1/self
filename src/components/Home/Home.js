import React from 'react';
import backg from '../../assets/background/bus.webp'

import './styles.scss';
export default function Home({ uid }) {
    return (
        <div className='home page' id={uid}>
            <div className='container text-banner'>
                <h2>Hello, we are Graphicnix </h2>
                <h2>We create strong brands</h2>
                <h2>for a tough world.</h2>
            </div>
            <div className='banner'>
                <img src={backg} />
            </div>
        </div>

    )
}