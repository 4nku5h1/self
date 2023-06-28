import ImageCompare from '../Common/ImageCompare/ImageCompare'

import './styles.scss';


function getAlignmentment(index) {
    return index % 2 === 0 ? '' : 'mirror';
}
export function Service({ id, index, data }) {

    const {title, description, imageBefore, imageAfter } = data;
    return (
        <div id={id} className='page service'>
            <div className='image' id={id}>
                <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={0} />
            </div>
            <div className='content'>
                <h2>{title}</h2>
                <p>{description}</p>
            <button>Explore more</button>
            </div>
        </div>
    )
}
// export function ServiceImage({ id, data, index }) {
//     const align = getAlignmentment(index);
//     const { imageBefore, imageAfter } = data;
//     return (
//         <div className={`page service-image ${align}`} id={id}>
//             <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={0} />
//         </div>
//     )
// }

export function ServiceGallary({ data, index }) {
    const { imageBefore, imageAfter } = data;
    const align = getAlignmentment(index);
    return (
        <div className={`page service-gallary-container ${align}`}>
            <div className="gallary">
                <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={50} disablecompare={false} sliderSize={40} />
                <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={50} disablecompare={false} sliderSize={40} />
                <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={50} disablecompare={false} sliderSize={40} />
                <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={50} disablecompare={false} sliderSize={40} />
            </div>
        </div>
    )
}

// export function ServiceBackground({ data }) {
//     const { background } = data;
//     return (
//         <div className='background-image'>
//             <img src={background} ></img>
//         </div>
//     )
// }

// export function ServiceText({ data, index }) {
//     const align = getAlignmentment(index);
//     const { title, description } = data;
//     return (
//         <div className={`page service-text-container ${align}`}>
//             <div className='service-text'>
//                 <h2>{title[0]} </h2>
//                 <h2>{title[1]}</h2>
//                 <p>{description}</p>
//             </div>
//         </div>
//     )
// }

// PROCESS
{/* <div className="process">
                <p>{process?.title}</p>
                {process?.list.map((pItem) => <li>{pItem}</li>)}
            </div> */}