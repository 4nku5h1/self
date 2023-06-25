import { ParallaxLayer } from '@react-spring/parallax'
import ServiceCard from './ServiceCard'
import ImageCompare from '../Common/ImageCompare/ImageCompare'

export default function Service({ id, data, index }) {
    const pageData = data;
    const pageOffset = pageData.pageOffset
    const aligh = index % 2 === 0 ? '' : 'right';
    return (
        <>
            <ParallaxLayer offset={pageOffset} speed={1} style={{ zIndex: 1 }}>
                <ServiceCard {...pageData} aligh={aligh} />
            </ParallaxLayer>
            <ParallaxLayer offset={pageOffset} speed={0.7}>
                <div className={`image-services page ${aligh}`} id={id}>
                    <ImageCompare imageBefore={pageData.imageBefore} imageAfter={pageData.imageAfter} />
                </div>
            </ParallaxLayer>
            {/* <ParallaxLayer offset={pageOffset} speed={0.8}>
                <h2 className='service-title'>{data.title}</h2>
                // flying bee
            </ParallaxLayer> */}
        </>
    )
}