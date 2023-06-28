import React, { useEffect } from 'react';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { services, extraServices } from './Services/data/data';

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';
import Extra from './Services/Extra';
import {  ServiceGallary, ServiceText, ServiceImage, Service } from './Services/Service';

import '../css/styles.scss'
import Clients from './Clients/Clients';
import Footer from './Footer/Footer';
import { observeElementById } from './Common/helper';

function registerBackgroundColorEffect() {
    const colorMapping = {
        'page-0': '#000',
        'page-1': 'rgb(25, 25, 25)',
        'page-2': 'rgb(25, 25, 25)',
        'page-3': 'rgb(240, 240, 240)',
        'page-4': 'rgb(240, 240, 240)',
        'page-5': 'rgb(240, 240, 240)',
        'page-6': 'rgb(25, 25, 25)',
        'page-7': 'rgb(25, 25, 25)',
        'page-8': 'rgb(25, 25, 25)'
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
        }, 2000);
    }, [])

    return (
        <div className='main'>
            <Navbar />
            <Home id={'page-0'} />
            {/* {services.map((item, index) => {
                return (
                    <ServiceGallary data={item} index={index} />
                )
            })} */}
            {services.map((item, index) => {
                return (
                    <Service data={item} index={index} id={`page-${index + 1}`} />
                )
            })}

            {/* {services.map((item, index) => {
                return (
                    <ServiceText data={item} index={index} />
                )
            })} */}
            {extraServices.map((item, index) => {
                return (
                    <Extra {...item} id={`page-${index + 6}`} />
                )
            })}
            <Clients id={`page-7`} />
            <Footer  id={`page-8`} />
        </div>
    )
}
{/* <Parallax pages={totalPages} className='parallax-container'>
               

                <ParallaxLayer sticky={{ start: home + servicePages + extra, end: totalPages }} speed={0.5} style={{ zIndex: -1 }}>
                   
                </ParallaxLayer>
            </Parallax> */}
{/* {services.map((item, index) => {
                    return (
                        <ParallaxLayer offset={item.pageOffset} speed={0.5}>
                            <ServiceBackground data={item} />
                        </ParallaxLayer>
                    )
                })} */}