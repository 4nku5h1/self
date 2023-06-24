import { useEffect } from "react"
import './styles.scss'
function onMount() {
    const slider_input = document.getElementById('slider_input'),
        slider_thumb = document.getElementById('slider_thumb')

    function showSliderValue() {
        // slider_thumb.innerHTML = slider_input.value;
        const bulletPosition = (slider_input.value / slider_input.max),
            space = slider_input.offsetWidth - slider_thumb.offsetWidth;

        slider_thumb.style.left = (bulletPosition * space) + 'px';
    }

    showSliderValue();
    window.addEventListener("resize", showSliderValue);
    slider_input.addEventListener('input', showSliderValue, false);

}
export default function RangeSlider({min, max, defaultValue, onChange}) {
    useEffect(() => {
        onMount();
    }, [])
    return (
        <div class="range-slider">
            <div id="slider_thumb" class="thumb">
                <div className='slider-circle'>
                    <div className='arrow-left' />
                    <div className='arrow-right' />
                </div>
            </div>
            <input id="slider_input" class="input" type="range" min={min} max={max} defaultValue={defaultValue} onChange={onChange}/>
        </div>
    )
}