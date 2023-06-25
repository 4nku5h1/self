import { ParallaxLayer } from '@react-spring/parallax'
import ServiceCard from './ServiceCard'
import ImageCompare from '../Common/ImageCompare/ImageCompare'

export default function Service({data, id}) {
    const pageData = data;
    const pageOffset = pageData.pageOffset
    
    return (
        <>
            <ParallaxLayer offset={pageOffset} speed={0.2}>
                <ServiceCard {...pageData} />
            </ParallaxLayer>
            <ParallaxLayer offset={pageOffset} speed={0.2}>
                <div className='image-services-right page' id={id}>
                    <ImageCompare imageBefore={pageData.imageBefore} imageAfter={pageData.imageAfter} />
                </div>
            </ParallaxLayer>
        </>
    )
}