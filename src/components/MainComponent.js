import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { services, extraServices } from './Services/data/data';

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';
import Extra from './Services/Extra';
import Service from './Services/Service';

import '../css/styles.scss'
import InfiniteImageGallary from './Common/ImageCompare/InfiniteImageGallary/InfiniteImageGallary';
import Clients from './Clients/Clients';
import Footer from './Footer/Footer';

export default function MainComponent() {
    // const imageRef = useRef();
    // const visibility = useCheckVisibility(imageRef);
    // function changeTheme(color){
    //     document.documentElement.style.setProperty('--g-font-nav', '#f32456');
    //   }
    //   changeTheme()

    const home = 1;
    const extra = 1;
    const client = 1;
    const footer = 1;
    const servicePages = (services.length);
    const totalPages = home + servicePages + extra + client +  footer;

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
                <ParallaxLayer sticky={{ start: home + servicePages+ extra, end: totalPages }} speed={0.5} style={{zIndex:-1}}>
                    <Clients />
                </ParallaxLayer>
                <Footer pageOffset={home + servicePages + extra + client}/>
            </Parallax>

        </div>
    )
}
