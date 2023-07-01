import { extraServices } from './Services/data/data';

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';
import { Service } from './Services/Service';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import roseImage from '../assets/background/rose.webp'

import AboutUs from './AboutUs/AboutUs';
import InfiniteImageGallary from './Common/InfiniteImageGallary/InfiniteImageGallary'

import '../css/styles.scss'
import FloatingNav from './FloatingNav/FloatingNav';
import Client from './Client/Client';
import StickyHorizontalGallary from './Common/StickyHorizontalGallary/StickyHorizontalGallary';
import { ourServices } from './Common/StickyHorizontalGallary/data/data';

export default function MainComponent() {
    return (
        <div className='main'>
            <Navbar />
            {/* <div id="HOME"></div> */}
            <FloatingNav />
            <Home id={'HOME'} />
            <div id="SERVICE-TITLE" className='page heading'>
                <StickyHorizontalGallary  data={ourServices}/>
            </div>
            {/* <AboutUs id={'ABOUT'} /> */}
            <Service />
            {/* {services.map((item, index) => {
                return (
                    <ServiceGallary data={item} index={index} />
                )
            })} */}
            {/* <InfiniteImageGallary /> */}
            {extraServices.map((item, index) => {
                return (
                    <Content uid={'SERVICE-RENDER'} {...item} imageWidth={400} imageHeight={200} />
                )
            })}
            <Content uid={'GRAPHICNIX-ROSE'} images={roseImage} imageWidth={500} imageHeight={300} title={"Grahicnix"} description={"We also do brand strategy and brand design. When asked to pick between beauty and reason, we choose both: we believe they need each other."} />

            <Client uid={"CLIENTS"}/>
            <Footer uid={"FOOTER"} />
        </div>
    )
}