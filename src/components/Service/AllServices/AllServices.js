import { Link } from 'react-router-dom';
import ImageCompare from '../../Common/ImageCompare/ImageCompare';
import pageConfig from '../../Common/Themer/config/pageConfig';
import { services } from '../../data';

import '../styles.scss';

export default function AllServices() {
    const serviceIds = Object.keys(pageConfig).filter((id) => id.includes("SERVICE"));
    serviceIds.shift()
    return (
        <>
            {services.map((data, index) => {
                const { title, description, imageBeforeOverview, imageAfterOverview } = data;
                const id = serviceIds[index]
                return (
                    <div id={id} className='page service'>
                        <div className='container'>
                            <div className='image'>
                                <ImageCompare imageBeforeOverview={imageBeforeOverview} imageAfterOverview={imageAfterOverview} scrollTo={0} />
                            </div>
                            <div className='text-content'>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <Link to={`/services/${data.path}`}>
                                <button className='button'>Explore more</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                )
            })}
        </>

    )
}




// PROCESS
{/* <div className="process">
                <p>{process?.title}</p>
                {process?.list.map((pItem) => <li>{pItem}</li>)}
            </div> */}