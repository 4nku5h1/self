import { ParallaxLayer } from '@react-spring/parallax'
import ServiceCard from './ServiceCard'
import ImageCompare from '../Common/ImageCompare/ImageCompare'

import './styles.scss';

export default function Service({ id, data, index }) {
    const pageData = data;
    const pageOffset = pageData.pageOffset
    const aligh = index % 2 === 0 ? 'right' : '';
    return (
        <>
            <ParallaxLayer offset={pageOffset} speed={0.7} style={{zIndex:1}}>
                <ServiceCard {...pageData} aligh={aligh} />
            </ParallaxLayer>
            <ParallaxLayer offset={pageOffset} speed={0.8}>
                <div className={`image-services ${aligh}`} id={id}>
                    <ImageCompare imageBefore={pageData.imageBefore} imageAfter={pageData.imageAfter} scrollTo={0} />
                </div>
            </ParallaxLayer>

        </>
    )
}