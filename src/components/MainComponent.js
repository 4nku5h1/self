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
            <Home uid='HOME' />
            <Service />
            <Content uid='ABOUT' image={roseImage} title={"ABOUT US"} description={about} />
            <Client uid="CLIENTS" />
            <Footer uid="CONTACT" aboutData={about}/>
        </div>
    )
}