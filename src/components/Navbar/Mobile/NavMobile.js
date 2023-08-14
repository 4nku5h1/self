import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../Common/AppContext/AppContext'
import { scrollToId } from '../../Common/helper';
import logo from '../../../assets/logo/logo.svg'
import CollapsibleCloseButton from '../../Common/Button/CollapsibleCloseButton/CollapsibleCloseButton';

import './styles.scss'

export default function NavMobile({ actions = [] }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const appContext = useAppContext();
    const shrinkIsland = !appContext.state?.pageConfig?.showFullDynamicIsland;
    const pageName = appContext.state?.pageConfig?.pageName;

    function handleMenuButtonClick() {
        setMenuOpen(!menuOpen)
    }
    function closeMenu() {
        setTimeout(() => {
            setMenuOpen(false);
        }, 1000)
    }
    function NavAction(action) {
        return (
            <Link to={action.path}>
                <h2 className={pageName?.toLowerCase() === action?.name?.toLowerCase()  ? 'highlight' : ''} onClick={() => {
                    if (action?.id) {
                        setTimeout(() => {
                            scrollToId(action.id);
                        }, 200)
                    }
                    closeMenu();
                }}>{action.name}</h2>
            </Link>
        )
    }
    return (
        <div className={`dynamic-island-container ${menuOpen ? 'expand' : ''} ${shrinkIsland && !menuOpen ? 'shrink' : ''}`}>
            <div className='btn item'>
                <CollapsibleCloseButton isOpen={menuOpen} handleClick={handleMenuButtonClick} />
            </div>
            <div className={`dynamic-island ${menuOpen ? 'active' : ''}`}>
                <div className={`top-bar ${menuOpen || shrinkIsland ? 'shrink' : ''}`}>
                    <div className="item">
                        <img src={logo} />
                    </div>
                    <div className="item">
                        <span>{pageName?.toLowerCase()}</span>
                    </div>
                </div>
                {actions.map((act) => <NavAction {...act} />)}
            </div>
        </div>
    )
}