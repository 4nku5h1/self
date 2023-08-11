import { useParams } from 'react-router-dom'
import { services } from '../../data';

import DetailsSection from '../../Common/DetailsSection/DetailsSection';
import ImageCompare from '../../Common/ImageCompare/ImageCompare';
import Tablet from '../../Common/Tablet/Tablet';

import './styles.scss'

export default function ServiceDetail() {
    const { id: pageName } = useParams();
    const pageData = services.filter((service) => service.path === pageName)[0];
    const Image = ({ img }) => {
        return (
            <div className='image'>
                <img src={img} />
            </div>
        )
    }
    return (
        <div className='service-details themer' id={'SERVICE-DETAIL'}>
            <img className="banner" src={pageData.additionalData?.banner} />
            <div className='container'>
                <DetailsSection heading={pageData.title} paragraph={pageData.additionalData?.types?.description} items={pageData.additionalData?.types?.list} />
                <Image img={pageData?.additionalData?.images[0]} />
                <div className='content-hp section'>
                    {pageData.additionalData?.description.map((para) => {
                        return (
                            <p className='paragraph'>{para}</p>
                        )
                    })}
                </div>
                {/* <Image img={pageData?.additionalData?.images[1]} /> */}
                {/* capcule adobe xdd */}
                <div className="images section">
                    <Tablet title={pageData.title} height={400} width={800} child={
                        <ImageCompare imageBeforeOverview={pageData.imageBeforeOverview} imageAfterOverview={pageData.imageAfterOverview} disablecompare={false} />
                    } />
                </div>
            </div>
        </div>
    )
}