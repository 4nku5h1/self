import Navbar from './Navbar/NavBar';
import FloatingNav from './FloatingNav/FloatingNav';
import Home from './Home/Home';
import Service from './Services/Service';
import ImageGallary from './Common/ImageGallary/ImageGallary';
import About from './About/About';
import Footer from './Footer/Footer';

import { about } from './Services/data/data';

import '../css/styles.scss'
import Galaxy from './Common/Galaxy/Galaxy';

export default function MainComponent() {
    return (
        <div className='main'>
            <Galaxy />
            <div className='background-image' />
            <Navbar />
            <FloatingNav />
            <Home uid='HOME' />
            <Service />
            <ImageGallary />
            <About uid='ABOUT' />
            <Footer uid="CONTACT" aboutData={about} />
        </div>
    )
}