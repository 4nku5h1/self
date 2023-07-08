import { useState } from 'react';
import './styles.scss';
export default function CollapsibleCloseButton({ handleClick }) {
    const [isCollapsed, setMenuCollapsed] = useState(false)
    function onClick() {
        const isMenuOpen = !isCollapsed;
        setMenuCollapsed(isMenuOpen)
        handleClick(isMenuOpen)
    } 
    return (
        <div className='hamburger-container' onClick={onClick}>
            <div className={`hamburger ${isCollapsed ? 'active' : ''}`}><span></span></div>
        </div>
    )
}