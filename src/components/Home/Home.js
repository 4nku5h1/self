import Banner from './Banner';
import Service from './Service/Service';
import ImageGallary from '../Common/ImageGallary/ImageGallary';
import About from '../About/About';
import './styles.scss';

export default function Home({ uid }) {
    return (
        <>
            <Banner uid='HOME' />
            <Service />
            <ImageGallary uid="GALLERY" />
            <About uid='ABOUT' />
        </>
    )
}