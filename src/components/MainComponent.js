import { about } from './Services/data/data';

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import roseImage from '../assets/background/rose.webp'
import FloatingNav from './FloatingNav/FloatingNav';
import Client from './Client/Client';

import { Service } from './Services/Service';

import '../css/styles.scss'
import ImageGallary from './Common/ImageGallary/ImageGallary';

export default function MainComponent() {
    return (
        <div className='main'>
            <div className='background-image'/>
            <Navbar />
            <FloatingNav />
            <Home uid='HOME' />
            <Service />
            <ImageGallary />
            <Content uid='ABOUT' image={roseImage} title={"ABOUT US"} description={about} />
            <Client uid="CLIENTS" />
            <Footer uid="CONTACT" aboutData={about}/>
        </div>
    )
}