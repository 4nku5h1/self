import Logo from '../Logo/Logo'
import './styles.scss'
export default function FloatingNav() {
    return (
        <div className='floating-nav'>
            <Logo size={6}/>
            <span> Home </span>
            <span> Gallary </span>
            <span> Services </span>
            <span> Contact </span>
        </div>
    )
}