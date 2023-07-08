import { useAppContext } from '../Common/AppContext/AppContext'
import logo from '../../assets/logo/logo.svg'
import './styles.scss'
import CollapsibleCloseButton from '../Common/Button/CollapsibleCloseButton/CollapsibleCloseButton';
import { useState } from 'react';
import { scrollToId } from '../Common/helper';
import { scrollToContact, scrollToGallary, scrollToHome, scrollToServices } from './helper';
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
    const shrinkStyle = (pageConfig?.hideFloatingMenu || menuOpen) ? 'shrink' : ''
    // default - bar
    // shrink - round with menu
    // expand - full page
    return (
        <div className={`floating-nav ${shrinkStyle} ${menuOpen ? 'expand' : ''}`}>
            <div className='top-bar'>
                <div className="nav-item logo">
                    <img src={logo} />
                </div>
                <div className="nav-item page-name">
                    <span>
                        {pageName?.toLowerCase()}
                    </span>
                </div>
                <div className='nav-item menu-btn'>
                    <CollapsibleCloseButton isOpen={menuOpen} handleClick={handleMenuButtonClick} />
                </div>
                {menuOpen ? (
                    <div className='nav-page'>

                    </div>
                ) : null}
            </div>
            {menuOpen ? (
                <div className='menu'>
                    <h2 className={pageName === 'HOME' ? 'active' : ''} onClick={() => {
                        scrollToHome();
                        closeMenu();
                    }}>Home</h2>
                    <h2 className={pageName === 'SERVICES' ? 'active' : ''} onClick={() => {
                        scrollToServices();
                        closeMenu();
                    }}>Services</h2>
                    <h2 className={pageName === 'GALLARY' ? 'active' : ''} onClick={() => {
                        scrollToGallary();
                        closeMenu();
                    }}>Gallary</h2>
                    <h2 className={pageName === 'FOOTER' ? 'active' : ''} onClick={() => {
                        scrollToContact();
                        closeMenu();
                    }}>Contact</h2>
                </div>
            ) : null}
        </div>
    )
}