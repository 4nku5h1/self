import { useAppContext } from '../Common/AppContext/AppContext'
import logo from '../../assets/logo/logo.svg'
import './styles.scss'
import CollapsibleCloseButton from '../Common/Button/CollapsibleCloseButton/CollapsibleCloseButton';
import { useState } from 'react';
import { scrollToId } from '../Common/helper';
export default function FloatingNav() {
    const [menuOpen, setMenuOpen] = useState(false)
    const appContext = useAppContext();
    const pageConfig = appContext.state.pageConfig;
    const pageName = appContext.state?.pageConfig?.pageName;

    function handleMenuButtonClick(isMenuOpen) {
        setMenuOpen(isMenuOpen)
    }
    function scrollTo(id){
        scrollToId(id);
        setTimeout(()=>{
            setMenuOpen(false);
        },1000)
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
                    <h2 className={pageName === 'HOME' ? 'active' : ''} onClick={()=>scrollTo("HOME")}>Home</h2>
                    <h2 className={pageName === 'SERVICES' ? 'active' : ''} onClick={()=>scrollTo("SERVICES")}>Services</h2>
                    <h2 className={pageName === 'GALLARY' ? 'active' : ''} onClick={()=>scrollTo("GALLARY")}>Gallary</h2>
                    <h2 className={pageName === 'FOOTER' ? 'active' : ''} onClick={()=>scrollTo("FOOTER")}>Contact</h2>
                </div>
            ) : null}
        </div>
    )
}