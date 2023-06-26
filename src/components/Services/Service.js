import { ParallaxLayer } from '@react-spring/parallax'
import ImageCompare from '../Common/ImageCompare/ImageCompare'

import './styles.scss';

export default function Service({ id, data, index }) {
    const pageData = data;
    const pageOffset = pageData.pageOffset
    const align = index % 2 === 0 ? 'right' : '';
    return (
        <>
            <ParallaxLayer offset={pageOffset} speed={0.35} style={{ zIndex: 1 }}>
                <div className={`page service-container ${align}`}>
                    <div className={`service-card `}>
                        <div className="title">
                            <h2>{pageData.title[0]}</h2>
                            <h2>{pageData.title[1]}</h2>
                        </div>
                        <p>{pageData.description}</p>

                    </div>
                    <div className={`image-services`} id={id}>
                        <h1></h1>
                        <ImageCompare imageBefore={pageData.imageBefore} imageAfter={pageData.imageAfter} scrollTo={0} />
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={pageOffset} speed={0.1} style={{ backdropFilter: 'blur(5px)' }}>
                <div className='background-image'>
                    <img src={data.background} ></img>
                </div>
            </ParallaxLayer>

        </>
    )
}
// PROCESS
{/* <div className="process">
                <p>{process?.title}</p>
                {process?.list.map((pItem) => <li>{pItem}</li>)}
            </div> */}