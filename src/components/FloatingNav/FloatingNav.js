import { useState } from 'react';
import { useAppContext } from '../Common/AppContext/AppContext'
import logo from '../../assets/logo/logo.svg'
import CollapsibleCloseButton from '../Common/Button/CollapsibleCloseButton/CollapsibleCloseButton';
import { scrollToContact, scrollToGallary, scrollToHome, scrollToServices } from './helper';

import './styles.scss'

export default function FloatingNav() {
    const [menuOpen, setMenuOpen] = useState(false)
    const appContext = useAppContext();
    const pageConfig = appContext.state.pageConfig;
    const pageName = appContext.state?.pageConfig?.pageName;

    function handleMenuButtonClick() {
        setMenuOpen(!menuOpen)
    }
    function closeMenu() {
        setTimeout(() => {
            setMenuOpen(false);
        }, 1000)
    }
    return (
        <div className={`dynamic-island-container ${menuOpen ? 'expand': ''}`}>
            <div className='btn item'>
                <CollapsibleCloseButton isOpen={menuOpen} handleClick={handleMenuButtonClick} />
            </div>
            <div className={`dynamic-island ${menuOpen ? 'active' : ''}`}>
                <div className={`top-bar ${menuOpen ?'shrink' :''}`}>
                    <div className="item">
                        <img src={logo} />
                    </div>
                    <div className="item">
                        <span>{pageName?.toLowerCase()}</span>
                    </div>
                </div>
                <h2 className={pageName === 'HOME' ? 'highlight' : ''} onClick={() => {
                    scrollToHome();
                    closeMenu();
                }}>Home</h2>
                <h2 className={pageName === 'SERVICES' ? 'highlight' : ''} onClick={() => {
                    scrollToServices();
                    closeMenu();
                }}>Services</h2>
                <h2 className={pageName === 'GALLARY' ? 'highlight' : ''} onClick={() => {
                    scrollToGallary();
                    closeMenu();
                }}>Gallary</h2>
                <h2 className={pageName === 'FOOTER' ? 'highlight' : ''} onClick={() => {
                    scrollToContact();
                    closeMenu();
                }}>Contact</h2>
            </div>
        </div>
    )
}