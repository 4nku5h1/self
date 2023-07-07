import { useAppContext } from '../Common/AppContext/AppContext';
import ImageCompare from '../Common/ImageCompare/ImageCompare'
import pageConfig from '../Common/Themer/config/pageConfig';
import { services } from './data/data';

import './styles.scss';
import { ServiceTitle } from './ServiceTitle/ServiceTitle';

export function Service() {
    const appContext = useAppContext();
    const serviceIds = Object.keys(pageConfig).filter((id) => id.includes("SERVICE"));
    serviceIds.shift()
    return (
        <>

            <ServiceTitle appContext={appContext} data={services} />
            {services.map((data, index) => {
                const { title, description, imageBefore, imageAfter } = data;
                const id = serviceIds[index]
                return (
                    <div id={id} className='page service'>
                        <div className='service-container'>
                            <div className='image'>
                                <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={0} />
                            </div>
                            <div className='text-content'>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <button className='button'>Explore more</button>
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