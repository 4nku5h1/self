import Banner from './Banner';
import ImageGridBanner from '../Common/ImageGridBanner/ImageGridBanner';
import About from '../About/About';
import ServiceOverview from '../Service/ServiceOverview/ServiceOverview';

import './styles.scss';

export default function Home() {
    return (
        <>
            <Banner uid='HOME' />
            <ServiceOverview  showDescription={false}/>
            <ImageGridBanner uid="GALLERY" />
            <About uid='ABOUT' />
        </>
    )
}