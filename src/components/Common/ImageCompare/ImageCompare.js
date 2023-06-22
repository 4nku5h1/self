
import { useEffect, useRef, useState } from 'react'
import useCheckVisibility from '../hooks/useCheckVisibility';

import './styles.scss'

export default function ImageCompare({ imageBefore, imageAfter }) {
    const imageRef = useRef(null);
    const isImageInViewport = useCheckVisibility(imageRef);
    const [controllerValue, setControllerValue] = useState(100);
    function handleController(e) {
        setControllerValue(e.target.value);
    }
    useEffect(()=>{
        if(isImageInViewport){
            setControllerValue(50);
        }else{
            setControllerValue(100);
        }
    },[isImageInViewport])
    return (
        <div class="image-compare" ref={imageRef}>
            <div class="controller">
                {/* Dummy image to make slider width equal to image */}
                <img src={imageBefore} />
                <input type="range" min="0" max="100" defaultValue={50} onChange={handleController} />
            </div>
            <div className={`imageBefore ${isImageInViewport ? 'active' : ''}`} style={{ width: `${controllerValue}%` }}>
                <img src={imageBefore}
                    alt="GFG_Image" />
            </div>
            <img src={imageAfter}
                alt="GFG_Image" />
        </div>
    )
}