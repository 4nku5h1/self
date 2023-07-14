import { about } from './Services/data/data';

import Navbar from './Navbar/NavBar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import About from './About/About';
import FloatingNav from './FloatingNav/FloatingNav';

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
            <About uid='ABOUT' />
            <Footer uid="CONTACT" aboutData={about}/>
        </div>
    )
}