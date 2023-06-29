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
import FloatingNav from './FloatingNav/FloatingNav';
function registerBackgroundColorEffect() {
    const colorConfig = {
        headingLight: '#E3E3E3',
        headingDark: '#111111',
        contentDark: '#5E5E5E',
        borderDark: '#525252',
    }

    const colorMapping = {
        'page-0': {
            backgroundColor: 'rgb(231, 228, 229)',
            headingColor: colorConfig.headingDark,
            contentColor: colorConfig.contentDark,
            buttonColor: colorConfig.borderDark
        },
        'page-1': {
            backgroundColor: '#fff',
            headingColor: colorConfig.headingDark,
            contentColor: colorConfig.contentDark,
            buttonColor: colorConfig.borderDark
        },
        'page-2': {
            backgroundColor: '#fff',
            headingColor: colorConfig.headingDark,
            contentColor: colorConfig.contentDark,
            buttonColor: colorConfig.borderDark
        },
        'page-3': {
            backgroundColor: '#000',
            headingColor: colorConfig.headingLight,
            contentColor: colorConfig.contentDark,
            buttonColor: colorConfig.borderDark
        },
        'page-4': {
            backgroundColor: 'rgb(240, 240, 240)',
            headingColor: colorConfig.headingDark,
            contentColor: colorConfig.contentDark,
            buttonColor: colorConfig.borderDark
        },
        'page-5': {
            backgroundColor: '#000',
            headingColor: colorConfig.headingLight,
            contentColor: colorConfig.contentDark,
            buttonColor: colorConfig.borderDark
        },
        'page-6': {
            backgroundColor: '#fff',
            headingColor: colorConfig.headingDark,
            contentColor: colorConfig.contentDark,
            buttonColor: colorConfig.borderDark
        },
        'page-7': {
            backgroundColor: 'rgb(25, 25, 25)',
            headingColor: colorConfig.headingLight,
            contentColor: colorConfig.contentDark,
            buttonColor: colorConfig.borderDark
        },
        'page-8': {
            backgroundColor: 'rgb(25, 25, 25)',
            headingColor: colorConfig.headingLight,
            contentColor: colorConfig.contentDark,
            buttonColor: colorConfig.borderDark
        }
    }
    function changeColor(id) {
        document.documentElement.style.setProperty('--color-background', colorMapping[id].backgroundColor);
        document.documentElement.style.setProperty('--font-color-heading', colorMapping[id].headingColor);
        document.documentElement.style.setProperty('--font-color-content', colorMapping[id].contentColor);
        document.documentElement.style.setProperty('--button-border', colorMapping[id].buttonColor);
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
            <FloatingNav />
            <Home id={'page-0'} />
            <AboutUs id={'page-1'} />
            {/* {services.map((item, index) => {
                return (
                    <ServiceGallary data={item} index={index} />
                )
            })} */}
            {services.map((item, index) => {
                return (
                    <Service data={item} index={index} id={`page-${index + 2}`} />
                )
            })}
            {/* <ImageGallary /> */}
            {extraServices.map((item, index) => {
                return (
                    <Content id={`page-${index + 7}`} {...item} imageWidth={550} imageHeight={300} />
                )
            })}
            <Content images={roseImage} imageWidth={500} imageHeight={300} title={"Grahicnix"} description={"We do brand strategy and brand design. When asked to pick between beautyand reason, we choose both: webelieve they need each other."} />

            <Content id={`page-7`} title={'Our trusted clients'} images={clientsData} />
            <Footer id={`page-8`} />
        </div>
    )
}