import Logo from '../Logo/Logo'
import './styles.scss'
export default function FloatingNav() {
    return (
        <div className='floating-nav'>
            <Logo size={8}/>
            <span> Home </span>
            <span> Services </span>
            <span> Contact </span>
        </div>
    )
}