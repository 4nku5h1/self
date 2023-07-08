import { useAppContext } from '../Common/AppContext/AppContext'
import { scrollToId } from '../Common/helper'
import logo from '../../assets/logo/logo.svg'
import './styles.scss'
import CollapsibleCloseButton from '../Common/Button/CollapsibleCloseButton/CollapsibleCloseButton';
import { useState } from 'react';
export default function FloatingNav() {
    const [menuOpen, setMenuOpen] = useState(false)
    const appContext = useAppContext();
    const pageConfig = appContext.state.pageConfig;
    const pageName = appContext.state?.pageConfig?.pageName;

    function handleMenuButtonClick(isMenuOpen) {
        setMenuOpen(isMenuOpen)
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
            {/* <h1>sdf</h1> */}
        </div>
    )
}