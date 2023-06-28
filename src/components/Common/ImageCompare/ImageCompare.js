
import { useEffect, useRef, useState } from 'react'
import useCheckVisibility from '../hooks/useCheckVisibility';

import RangeSlider from '../RangeSlider/RangeSlider';

import './styles.scss'

export default function ImageCompare({ imageBefore, imageAfter, disablecompare = true, scrollTo=50, sliderSize=40 }) {
    const imageRef = useRef(null);
    const isImageInViewport = useCheckVisibility(imageRef);
    const [controllerValue, setControllerValue] = useState(100);
    function handleController(e) {
        setControllerValue(e.target.value);
    }

    useEffect(() => {
        if (isImageInViewport) {
            setControllerValue(scrollTo);
        } else {
            setControllerValue(100);
        }
    }, [isImageInViewport])
    return (
        <div class="image-compare" ref={imageRef}>
            <div class="controller">
                {/* Dummy image to make slider width equal to image */}
                <img src={imageBefore} />
                {!disablecompare ? <RangeSlider onChange={handleController} min={0} max={100} value={controllerValue} show={isImageInViewport} sliderSize={sliderSize}/> : null}
            </div>
            <div className={`imageBefore ${isImageInViewport ? 'active' : ''}`} style={{ width: `${controllerValue}%`, transition: `${disablecompare ? 'all 2s' : 'none'}` }}>
                <img src={imageBefore}
                    alt="GFG_Image" />
            </div>
            <img src={imageAfter}
                alt="GFG_Image" />
        </div>
    )
}