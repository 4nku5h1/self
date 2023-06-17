import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';
import ServiceCard from './Services/ServiceCard';

import { services, extraServices } from './Services/data/data';


import '../css/styles.scss'
import About from './Footer/About';
import Contact from './Footer/Contact';
import Extra from './Services/Extra';
import ImageSlideCompare from './Common/ImageSlideCompare/ImageSlideCompare';

export default function MainComponent() {
    // function changeTheme(color){
    //     document.documentElement.style.setProperty('--g-font-nav', '#f32456');
    //   }
    //   changeTheme()

    const home = 1;
    const extra = 2;
    const footer = 1;
    const servicePages = (services.length);
    const totalPages = home + servicePages + extra + footer;
    function Page(pageData) {
        const pageOffset = pageData.pageOffset

        return (
            <>
                <ParallaxLayer offset={pageOffset} speed={0.2}>
                    <ServiceCard {...pageData} />
                </ParallaxLayer>
                <ParallaxLayer offset={pageOffset} speed={0.2}>
                    <div className='image-services-right page'>
                        <ImageSlideCompare imageBefore={pageData.imageBefore} imageAfter={pageData.imageAfter}/>
                    </div>
                </ParallaxLayer>
            </>
        )
    }
    return (
        <div className='main grad1'>
            <Navbar />
            <Parallax pages={totalPages}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <Home />
                </ParallaxLayer>
                {services.map((item) => {
                    return Page(item)
                })}
                {extraServices.map((item, index) => {
                    return (
                        <ParallaxLayer offset={home + servicePages + index} speed={0.2}>
                            <Extra {...item} />
                        </ParallaxLayer>
                    )
                })}
                <ParallaxLayer offset={totalPages - 1} speed={0.5}>
                    <About />
                </ParallaxLayer>
                <ParallaxLayer offset={totalPages - 1} speed={5}>
                    <Contact />
                </ParallaxLayer>
            </Parallax>

        </div>
    )
}
