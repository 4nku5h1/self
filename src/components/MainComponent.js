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

export default function MainComponent() {
    return (
        <div className='main'>
            <div className='background-image'/>
            <Navbar />
            <FloatingNav />
            <Home id={'HOME'} />
            <Service />
            <Content uid={'GRAPHICNIX-ROSE'} image={roseImage} imageWidth={500} imageHeight={300} title={"ABOUT US"} description={about} />
            <Client uid={"CLIENTS"} />
            <Footer uid={"FOOTER"} aboutData={about}/>
        </div>
    )
}