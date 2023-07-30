import { useParams } from 'react-router-dom'

import './styles.scss'
import { services } from '../data';
import AnimatedItems from '../Common/Motion/AnimatedItems';
import ImageCompare from '../Common/ImageCompare/ImageCompare';
import Tablet from '../Common/Tablet/Tablet';

export default function ServicePage() {
    const { id: pageName } = useParams();
    const pageData = services.filter((service) => service.path === pageName)[0];
    console.log(pageData)
    const Item = (item) => {
        return (
            <span className='small-capital-heading'>{item}</span>
        )
    }

    return (
        <div className='service-page themer' id={'SERVICE-PAGE'}>
            <img className="banner" src={pageData.imageBanner} />
            <div className='container'>
                <div className='content-hp section'>
                    <h3>{pageData.title}</h3>
                    {pageData.additionalData?.description.map((para) => {
                        return (
                            <p className='paragraph'>{para}</p>
                        )
                    })}

                </div>
                <div className="process section">
                    <p className='paragraph'>{pageData.additionalData?.types?.description}</p>
                    <AnimatedItems className="process-items" animate={true} data={pageData.additionalData?.types?.list} child={Item} />
                </div>
                <div className="images section">
                    <Tablet title={pageData.title} child={
                        <div className='compare'>
                            <ImageCompare imageBeforeOverview={pageData.imageBeforeOverview} imageAfterOverview={pageData.imageAfterOverview} disablecompare={false} />
                        </div>
                    } />
                </div>
            </div>
        </div>
    )
}