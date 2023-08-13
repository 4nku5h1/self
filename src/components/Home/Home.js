import Banner from './Banner';
import ServiceOverview from '../Common/MaterialPageData/MaterialPageData';
import ImageGridBanner from '../Common/ImageGridBanner/ImageGridBanner';
import About from '../About/About';

import './styles.scss';
import Stats from './Stats/Stats';
import image from '../../assets/horizontalgallary/3.webp'
import MaterialPage from '../Common/MaterialPage/MaterialPage';

export default function Home() {
    return (
        <>
            <Banner uid='HOME' />
            <MaterialPage
                uid={"SERVICE-IMAGE-EDITING"}
                imageOptions={{ default:true, image:  image}}
                title={"Image Editing"}
                description={"Unlock the true potential of your images with our professional image editing services.  Our skilled team enhances every detail, resulting in captivating visuals that make a lasting impact."}
                buttonOptions={{ label: 'Explore More' }}
            />
            <MaterialPage
                uid={"SERVICE-VIDEO-EDITING"}
                imageOptions={{ default:true, image:  image}}
                title={"Video Editing"}
                description={"Experience the art of storytelling through our expert video editing. Our skilled editors craft each frame to create captivating narratives that leave a lasting impression."}
                buttonOptions={{ label: 'Explore More' }}
            />
            {/* <MaterialPage
                uid={"SERVICE-IMAGE-SOFTWARE"}
                imageOptions={{ default:true, image:  image}}
                title={"Software Development"}
                description={"description"}
                buttonOptions={{ label: 'Explore More' }}
            /> */}
            <Stats uid='STATS' />
            <ImageGridBanner uid="GALLERY" />
            <About uid='ABOUT' />
        </>
    )
}