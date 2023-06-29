import './styles.scss';

export function ServiceGallary({ data, index }) {
    const { imageBefore, imageAfter } = data;
    return (
        <div className={`page service-gallary-container`}>
            <div className="gallary">
                <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={50} disablecompare={false} sliderSize={40} />
                <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={50} disablecompare={false} sliderSize={40} />
                <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={50} disablecompare={false} sliderSize={40} />
                <ImageCompare imageBefore={imageBefore} imageAfter={imageAfter} scrollTo={50} disablecompare={false} sliderSize={40} />
            </div>
        </div>
    )
}