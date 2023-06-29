import ImageCompare from '../Common/ImageCompare/ImageCompare'

import './styles.scss';

export function Service({ id, data }) {

    const { title, description, imageBefore, imageAfter } = data;
    return (
        <div id={id} className='page service'>
            <div className='image' id={id}>
                <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={0} />
            </div>
            <div className='text-content'>
                <h3>{title}</h3>
                <p>{description}</p>
                <button>Explore more</button>
            </div>
        </div>
    )
}




// PROCESS
{/* <div className="process">
                <p>{process?.title}</p>
                {process?.list.map((pItem) => <li>{pItem}</li>)}
            </div> */}