import { useEffect } from 'react';
import './styles.scss'

export default function RangeSlider({ min, max, value, onChange, sliderSize }) {
    useEffect(()=>{
        document.documentElement.style.setProperty('--thumb-size', `${sliderSize}px`);
    },[])
    return (
        <div class="range-slider">
            <div className="thumb-track" style={{ width: `calc(${value}% + ${40}px)` }}>
                <div id="slider_thumb" class="thumb">
                    <div className='slider-circle'>
                        <div className='arrow-left' />
                        <div className='arrow-right' />
                    </div>
                </div>
            </div>
            <input id="slider_input" class="input" type="range" min={min} max={max} value={value} onChange={onChange} />
        </div>
    )
}