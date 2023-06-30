import { useAppContext } from '../Common/AppContext/AppContext'
import { scrollToId } from '../Common/helper'
import Logo from '../Logo/Logo'
import './styles.scss'
export default function FloatingNav() {
    const appContext = useAppContext();
    const pageConfig = appContext.state.pageConfig;
    return (
        <div className={`floating-nav ${pageConfig?.hideFloatingMenu ? 'hidden' : ''}`}>
            <Logo size={5} />
            <span className={pageConfig?.pageName ==='HOME' ? 'active' : ''}onClick={() => {scrollToId('navbar')}}>
                Home
            </span>
            <span className={pageConfig?.pageName ==='SERVICES' ? 'active' : ''} onClick={() => {scrollToId('page-2')}}>
                Services
            </span>
            <span> Gallary </span>

            <span className={pageConfig?.pageName ==='FOOTER' ? 'active' : ''} onClick={() => {scrollToId('page-8')}}>
                Contact
            </span>
        </div>
    )
}