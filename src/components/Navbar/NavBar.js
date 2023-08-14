import navigationActions from './actions'
import NavDesktop from "./Desktop/NavDesktop";
import NavMobile from "./Mobile/NavMobile";

export default function NavBar() {
    return (
        <>
            <NavDesktop actions={navigationActions} />
            <NavMobile actions={navigationActions} />
        </>
    )
}