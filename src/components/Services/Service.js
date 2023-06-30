import { useAppContext } from '../Common/AppContext/AppContext';
import { setCursorDefault, setCursorText } from '../Common/CustomCursor/helper';
import ImageCompare from '../Common/ImageCompare/ImageCompare'
import { serviceIds } from '../Common/backgroundcolorEffects';
import { services } from './data/data';

import './styles.scss';

export function Service() {
    const appContext = useAppContext();
    return (
        <>
            <div id="SERVICE-TITLE" className='page heading'>
                <div className='text-content text-heading'>
                    <h1>OUR SERVICES</h1>
                </div>
            </div>
            {services.map((data, index) => {
                const { title, description, imageBefore, imageAfter } = data;
                const id = serviceIds[index]
                return (
                    <div id={id} className='page service'>
                        <div className='image' id={id}>
                            <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={0} />
                        </div>
                        <div className='text-content'>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <button className='button' onMouseEnter={() => setCursorText(appContext)} onMouseLeave={() => setCursorDefault(appContext)}>Explore more</button>
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