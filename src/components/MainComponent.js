import { extraServices } from './Services/data/data';

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';
import { Service } from './Services/Service';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import roseImage from '../assets/background/rose.webp'

import AboutUs from './AboutUs/AboutUs';
// import { ImageGallary } from './Common/ImageGallary/ImageGallary';
import InfiniteImageGallary from './Common/InfiniteImageGallary/InfiniteImageGallary'

import '../css/styles.scss'
import FloatingNav from './FloatingNav/FloatingNav';
import Client from './Client/Client';
export default function MainComponent() {


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
            <Service />

            {/* <ImageGallary /> */}
            {extraServices.map((item, index) => {
                return (
                    <Content id={`page-${index + 7}`} {...item} imageWidth={400} imageHeight={200} />
                )
            })}
            <Content images={roseImage} imageWidth={500} imageHeight={300} title={"Grahicnix"} description={"We also do brand strategy and brand design. When asked to pick between beauty and reason, we choose both: we believe they need each other."} />

            {/* <InfiniteImageGallary /> */}
            <Client id={`page-7`} />
            <Footer id={`page-8`} />
        </div>
    )
}