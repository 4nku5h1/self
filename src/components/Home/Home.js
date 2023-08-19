import Banner from './Banner';
import ImageGridBanner from '../Common/ImageGridBanner/ImageGridBanner';
import About from '../About/About';

import './styles.scss';
import Stats from './Stats/Stats';
import imageEditing from '../../assets/home/imageEditing.jpg'
import videoEditing from '../../assets/home/videoEditing.jpg'
import softwareDevelopment from '../../assets/home/softwareDevelopment.jpg'

import MaterialPage from '../Common/MaterialPage/MaterialPage';

export default function Home() {
    return (
        <>
            <Banner uid='HOME' />
            <MaterialPage
                uid={"SERVICE-IMAGE-EDITING"}
                imageOptions={{ default:true, image:  imageEditing}}
                title={"Image Editing"}
                description={"Unlock the true potential of your images with our professional image editing services.  Our skilled team enhances every detail, resulting in captivating visuals that make a lasting impact."}
                buttonOptions={{ label: 'Explore More', path:'image-editing-services' }}
            />
            <MaterialPage
                uid={"SERVICE-VIDEO-EDITING"}
                imageOptions={{ default:true, image:  videoEditing}}
                title={"Video Editing"}
                description={"Experience the art of storytelling through our expert video editing. Our skilled editors craft each frame to create captivating narratives that leave a lasting impression."}
                buttonOptions={{ label: 'Explore More', path:'video-editing-services' }}
            />
            <MaterialPage
                uid={"SERVICE-IMAGE-SOFTWARE"}
                imageOptions={{ default:true, image:  softwareDevelopment}}
                title={"Software Development"}
                description={"Embark on a journey of innovation with our software development expertise. Our seasoned team turns your ideas into functional solutions, employing cutting-edge technology to drive your success. Experience tailored development that meets your unique needs and propels your business forward."}
                buttonOptions={{ label: 'Coming Soon...' }}
            />
            <ImageGridBanner uid="GALLERY" />
            <About uid='ABOUT' />
        </>
    )
}