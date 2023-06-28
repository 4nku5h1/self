import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { services, extraServices } from './Services/data/data';

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';
import Extra from './Services/Extra';
import { ServiceBackground, ServiceGallary, ServiceText, ServiceImage } from './Services/Service';

import '../css/styles.scss'
import Clients from './Clients/Clients';
import Footer from './Footer/Footer';
import { observeElementById } from './Common/helper';

function registerBackgroundColorEffect() {
    const colorMapping = {
        'page-0': 'rgb(255, 127, 1, 0.3)',
        'page-1': 'rgb(147, 190, 218)',
        'page-2': 'rgb(200, 200, 200)',
        'page-3': 'rgb(200, 200, 200)',
        'page-4': 'rgb(255, 101, 101)',
        'page-5': 'rgb(255, 101, 101)',
        'page-6': '#b188ff',
        'page-7': '#b188ff',
        'page-8': '#b188ff'
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
    const servicePages = (services.length) * 2;
    const totalPages = home + servicePages + extra + client + footer;

    return (
        <div className='main'>
            <Navbar />
            <Parallax pages={totalPages} className='parallax-container'>
                <ParallaxLayer offset={0} speed={1}>
                    <Home id={'page-0'} />
                </ParallaxLayer>
                {/* SERVICES START */}
                {/* {services.map((item, index) => {
                    return (
                        <ParallaxLayer offset={item.pageOffset} speed={0.5}>
                            <ServiceBackground data={item} />
                        </ParallaxLayer>
                    )
                })} */}
                {services.map((item, index) => {
                    return (
                        <ParallaxLayer offset={item.pageOffset + 1} speed={0.2} style={{ zIndex: 1 }}>
                            <ServiceGallary data={item} index={index}/>
                        </ParallaxLayer>
                    )
                })}
                {services.map((item, index) => {
                    return (
                        <ParallaxLayer offset={item.pageOffset} speed={0.2} >
                            <ServiceImage data={item} index={index}/>
                        </ParallaxLayer>
                    )
                })}

                {services.map((item, index) => {
                    return (
                        <ParallaxLayer speed={0.7} sticky={item.headingParallax.sticky}>
                            <ServiceText data={item} index={index}/>
                        </ParallaxLayer>
                    )
                })}

                {/* <ServiceBackground data={item} id={`page-${index + 1}`} index={index}/> */}
                {/* SERVICES END */}
                {extraServices.map((item, index) => {
                    return (
                        <ParallaxLayer offset={home + servicePages + index} speed={0.7}>
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
