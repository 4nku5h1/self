import Banner from './Banner';
import ServiceOverview from '../Service/ServiceOverview/ServiceOverview';
import ImageGridBanner from '../Common/ImageGridBanner/ImageGridBanner';
import About from '../About/About';

import './styles.scss';

export default function Home() {
    return (
        <>
            <Banner uid='HOME' />
            <ServiceOverview />
            <ImageGridBanner uid="GALLERY" />
            <About uid='ABOUT' />
        </>
    )
}