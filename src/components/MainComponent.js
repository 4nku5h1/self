import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';

import { services, extraServices } from './Services/data/data';

import '../css/styles.scss'
import About from './Footer/About';
import Contact from './Footer/Contact';
import Extra from './Services/Extra';
import Service from './Services/Service';

export default function MainComponent() {
    // const imageRef = useRef();
    // const visibility = useCheckVisibility(imageRef);
    // function changeTheme(color){
    //     document.documentElement.style.setProperty('--g-font-nav', '#f32456');
    //   }
    //   changeTheme()
   
    const home = 1;
    const extra = 2;
    const footer = 1;
    const servicePages = (services.length);
    const totalPages = home + servicePages + extra + footer;

    return (
        <div className='main grad1'>
            <Navbar />
            <Parallax pages={totalPages} >
                <ParallaxLayer offset={0} speed={0.5}>
                    <Home />
                </ParallaxLayer>
                {services.map((item) => {
                    return Service(item)
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
