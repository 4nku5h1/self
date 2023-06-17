import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';
import ServiceCard from './Services/Card';

import { services } from './Services/data/data';


import '../css/styles.scss'
import About from './Footer/About';
import Contact from './Footer/Contact';

export default function MainComponent() {
    // function changeTheme(color){
    //     document.documentElement.style.setProperty('--g-font-nav', '#f32456');
    //   }
    //   changeTheme()

    const servicePages = (services.length) * 2
    const pages = 1 + servicePages + 1;
    // home + servicesPages + footer
    function Page(pageData) {
        const pageStart = pageData.pageOffset
        const start = pageStart;
        const end = pageStart + 1;

        return (
            <>
                <ParallaxLayer sticky={{ start: start, end: end }} speed={0.5} horizontal>
                    <ServiceCard {...pageData} />
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: start, end: servicePages }} speed={1.5}>
                    <div className='image-services-right page'>
                        <img src={pageData.imageBefore}></img>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: start + 1, end: servicePages }} speed={0.5}>
                    <div className='image-services-right page vignette'>
                        <img src={pageData.imageAfter}></img>
                    </div>
                </ParallaxLayer>
            </>
        )
    }
    return (
        <div className='main grad1'>
            <Navbar />
            <Parallax pages={pages}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <Home />
                </ParallaxLayer>
                {services.map((item) => {
                    return Page(item)
                })}
                <ParallaxLayer offset={pages - 1} speed={0.5}>
                    <About />
                </ParallaxLayer>
                <ParallaxLayer offset={pages - 1} speed={5}>
                    <Contact />
                </ParallaxLayer>
            </Parallax>

        </div>
    )
}
