import { ParallaxLayer } from '@react-spring/parallax'
import ImageCompare from '../Common/ImageCompare/ImageCompare'

import './styles.scss';

export default function Service({ id, data, index }) {
    const pageData = data;
    const pageOffset = pageData.pageOffset
    const align = index % 2 === 0 ? 'right' : '';
    return (
        <>
            <ParallaxLayer offset={`${pageOffset}.2`} speed={0.7} style={{ zIndex: 1 }}>
                <div className='service-container'>
                    <div className="title">
                        <h2>{pageData.title[0]} {' '} {pageData.title[1]}</h2>
                        {/* <h2>{pageData.title[1]}</h2> */}
                        {/* <p>{pageData.description}</p> */}
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={pageOffset} speed={0.5} style={{ zIndex: 1 }}>
                <div className={`page service-container ${align}`}>
                    <div className="title">
                        <p>{pageData.description}</p>
                    </div>
                    <div className="content" id={id}>
                        <ImageCompare imageBefore={pageData.imageBefore} imageAfter={pageData.imageAfter} scrollTo={0} />
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={pageOffset} speed={1} >
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