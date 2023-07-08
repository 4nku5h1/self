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
    return (
        <div className={`floating-nav ${pageConfig?.hideFloatingMenu ? 'hidden' : ''}`}>
            <div className='nav-bar'>
                <div className='nav-icon' >
                    <img src={logo} />
                </div>
                <div className='nav-items'>
                    <span className={pageConfig?.pageName === 'HOME' ? 'active' : ''} onClick={() => { scrollToId('navbar') }}>
                        Home
                    </span>
                    <span className={pageConfig?.pageName === 'SERVICES' ? 'active' : ''} onClick={() => { scrollToId('SERVICE-LANDING') }}>
                        Services
                    </span>
                    <span> Gallary </span>

                    <span className={pageConfig?.pageName === 'FOOTER' ? 'active' : ''} onClick={() => { scrollToId('FOOTER') }}>
                        Contact
                    </span>
                </div>
                <div className='nav-icon dummy' onClick={() => setMenuOpen(!menuOpen)}>
                    <CollapsibleCloseButton isOpen={menuOpen} />
                </div>
            </div>
            {menuOpen ? (
                <div className='nav-page'>

                </div>
            ) : null}
        </div>
    )
}