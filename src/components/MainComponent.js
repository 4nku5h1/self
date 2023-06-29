import React, { useEffect } from 'react';
import { services, extraServices, about } from './Services/data/data';

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';
import { Service } from './Services/Service';
import Footer from './Footer/Footer';
import { observeElementById } from './Common/helper';
import { ImageGallary } from './Common/ImageGallary/ImageGallary';
import Content from './Content/Content';
import roseImage from '../assets/background/rose.webp'
import clientsData from '../components/Clients/data.js'

import AboutUs from './AboutUs/AboutUs';
// import InfiniteImageGallary from './Common/InfiniteImageGallary/InfiniteImageGallary'

import '../css/styles.scss'
function registerBackgroundColorEffect() {
    const colorMapping = {
        'page-0': 'rgb(231, 228, 229)',
        'page-1': '#fff',
        'page-2': 'rgb(231, 228, 229)',
        'page-3': 'rgb(240, 240, 240)',
        'page-4': 'rgb(240, 240, 240)',
        'page-5': 'rgb(240, 240, 240)',
        'page-6': '#000',
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
    })

    return (
        <div className='main'>
            <Navbar />
            <Home id={'page-0'} />
           <AboutUs />
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
            {/* <ImageGallary /> */}
            {extraServices.map((item, index) => {
                return (
                    <Content id={`page-${index + 6}`} {...item} imageWidth={550} imageHeight={300} />
                )
            })}
            <Content images={roseImage} imageWidth={500} imageHeight={300} title={"Grahicnix"} description={"We do brand strategy and brand design. When asked to pick between beautyand reason, we choose both: webelieve they need each other."} />
            
            <Content id={`page-7`} title={'Our trusted clients'} images={clientsData} />
            <Footer id={`page-8`} />
        </div>
    )
}