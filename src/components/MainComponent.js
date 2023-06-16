import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';

import '../css/styles.scss'
import { Details } from './Services/Details/Details';
import imgg from '../assets/bg.webp'
export default function MainComponent() {
    // function changeTheme(color){
    //     document.documentElement.style.setProperty('--g-font-nav', '#f32456');
    //   }
    //   changeTheme()

    const pages = 6;
    function Page(data, start, end) {
        return (
            <>
                <ParallaxLayer sticky={{ start: start, end: end }} speed={0.5} horizontal>
                    <Details />
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: start, end: pages }} speed={1.5}>
                    <div className='image-services-right'>
                        <img src={imgg}></img>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: start + 1, end: pages }} speed={0.5}>
                    <div className='image-services-right'>
                        <img src={imgg}></img>
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
                {Page({}, 1, 2)}
                {Page({}, 3, 4)}
                {Page({}, 5, 6)}

            </Parallax>

        </div>
    )
}
