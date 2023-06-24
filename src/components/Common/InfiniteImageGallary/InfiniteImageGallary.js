import { useEffect } from 'react';
import './styles.scss';
import imageGallaryData from './data';
const data = imageGallaryData
function setScrollDuration(duration) {
    document.documentElement.style.setProperty('--duration', `${duration}s`);
}
export default function InfiniteImageGallary(row, col, duration=20) {
    useEffect(() => {
       setScrollDuration(duration) 
    },[])
    
    return (
        <div className='infinite-image-gallary'>
            <div class="wrapper-images">
            {Object.entries(data).map(([rowKey, rowValue]) => {
                return (<div class="images-line">
                    {rowValue.map((img) => {
                        return (
                            <div class="line" style={{ backgroundImage: `url(${img})` }} />
                        )
                    })}
                </div>)
            })}
        </div>
        </div>
    )
}