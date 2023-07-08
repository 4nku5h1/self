import { useState } from 'react';
import './styles.scss';
export default function CollapsibleCloseButton({ isOpen, handleClick }) {
    return (
        <div className='hamburger-container' onClick={handleClick}>
            <div className={`hamburger ${isOpen ? 'active' : ''}`}><span></span></div>
        </div>
    )
}