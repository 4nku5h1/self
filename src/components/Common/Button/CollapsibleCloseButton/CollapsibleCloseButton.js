import { useState } from 'react';
import './styles.scss';
export default function CollapsibleCloseButton({ handleClick }) {
    const [isCloseButtonVisible, setCloseButtonVisible] = useState(false)
    function onClick() {
        const visible = !isCloseButtonVisible;
        setCloseButtonVisible(visible)
        handleClick(visible)
    } 
    return (
        <div className='hamburger-container' onClick={onClick}>
            <div className={`hamburger ${isCloseButtonVisible ? 'active' : ''}`}><span></span></div>
        </div>
    )
}