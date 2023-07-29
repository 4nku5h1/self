import Banner from './Banner';
import Service from './Service/Service';
import ImageGridBanner from '../Common/ImageGridBanner/ImageGridBanner';
import About from '../About/About';
import './styles.scss';

export default function Home() {
    return (
        <>
            <Banner uid='HOME' />
            <Service />
            <ImageGridBanner uid="GALLERY" />
            <About uid='ABOUT' />
        </>
    )
}