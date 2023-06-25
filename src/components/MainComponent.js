import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { services, extraServices } from './Services/data/data';

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';
import Extra from './Services/Extra';
import Service from './Services/Service';

import '../css/styles.scss'
import Clients from './Clients/Clients';
import Footer from './Footer/Footer';
import { observeElementById } from './Common/helper';

function registerBackgroundColorEffect() {
    const colorMapping = {
        'page-0': 'green',
        'page-1': 'green',
        'page-2': 'blue',
        'page-3': 'blue',
        'page-4': 'purple',
        'page-5': 'purple',
        'page-6': 'orange',
        'page-7': 'orange',
        'page-8': 'green'
    }
    function changeColor(id) {
        document.documentElement.style.setProperty('--color-background', colorMapping[id]);
    }
    new Array(9).fill(0).map((item, index) => {
        const id = `page-${index}`
        observeElementById(id, changeColor);
        return id;

    })
}
export default function MainComponent() {
    useEffect(() => {
        setTimeout(() => {
            registerBackgroundColorEffect()
        }, 1000);
    }, [])

    const home = 1;
    const extra = 1;
    const client = 1;
    const footer = 1;
    const servicePages = (services.length);
    const totalPages = home + servicePages + extra + client + footer;

    return (
        <div className='main grad1'>
            <Navbar />
            <Parallax pages={totalPages} className='parallax-container'>
                <ParallaxLayer offset={0} speed={1}>
                    <Home id={'page-0'} />
                </ParallaxLayer>
                {services.map((item, index) => {
                    return <Service data={item} id={`page-${index + 1}`} index={index}/>
                })}
                {extraServices.map((item, index) => {
                    return (
                        <ParallaxLayer offset={home + servicePages + index} speed={0.2}>
                            <Extra {...item} id={`page-${index + 6}`} />
                        </ParallaxLayer>
                    )
                })}
                <ParallaxLayer sticky={{ start: home + servicePages + extra, end: totalPages }} speed={0.5} style={{ zIndex: -1 }}>
                    <Clients id={`page-7`} />
                </ParallaxLayer>
                <Footer pageOffset={home + servicePages + extra + client} id={`page-8`} />
            </Parallax>

        </div>
    )
}
