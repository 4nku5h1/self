
import { useEffect, useRef, useState } from 'react'
import useCheckVisibility from '../hooks/useCheckVisibility';

import RangeSlider from '../RangeSlider/RangeSlider';

import './styles.scss'

export default function ImageCompare({ imageBefore, imageAfter }) {
    const imageRef = useRef(null);
    const isImageInViewport = useCheckVisibility(imageRef);
    const [controllerValue, setControllerValue] = useState(100);
    const [controllerVisible, setControllerVisible] = useState(false);
    function handleController(e) {
        setControllerValue(e.target.value);
    }
    function toggleControllerVisibility(v){
        if(v){
            setTimeout(() => {
                setControllerVisible(v)
            }, 2000);
        }else{
            setControllerVisible(v)
        }
        
    }
    useEffect(() => {
        if (isImageInViewport) {
            setControllerValue(50);
            toggleControllerVisibility(true);
        } else {
            setControllerValue(100);
            toggleControllerVisibility(false);
        }
    }, [isImageInViewport])
    return (
        <div class="image-compare" ref={imageRef}>
            <div class="controller">
                {/* Dummy image to make slider width equal to image */}
                <img src={imageBefore} />
               {controllerVisible ?  <RangeSlider onChange={handleController} min={0} max={100} value={controllerValue} show={isImageInViewport}/> : null}
            </div>
            <div className={`imageBefore ${isImageInViewport ? 'active' : ''}`} style={{ width: `${controllerValue}%`, transition:`${controllerVisible?'none' : 'all 2s'}` }}>
                <img src={imageBefore}
                    alt="GFG_Image" />
            </div>
            <img src={imageAfter}
                alt="GFG_Image" />
        </div>
    )
}