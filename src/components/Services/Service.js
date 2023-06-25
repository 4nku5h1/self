import { ParallaxLayer } from '@react-spring/parallax'
import ServiceCard from './ServiceCard'
import ImageCompare from '../Common/ImageCompare/ImageCompare'

export default function Service({id, data, index}) {
    const pageData = data;
    const pageOffset = pageData.pageOffset
    const aligh = index%2===0? '' : 'right';
    return (
        <>
            <ParallaxLayer offset={pageOffset} speed={0.2}>
                <ServiceCard {...pageData} aligh={aligh}/>
            </ParallaxLayer>
            <ParallaxLayer offset={pageOffset} speed={0.2}>
                <div className={`image-services page ${aligh}`} id={id}>
                    <ImageCompare imageBefore={pageData.imageBefore} imageAfter={pageData.imageAfter} />
                </div>
            </ParallaxLayer>
        </>
    )
}