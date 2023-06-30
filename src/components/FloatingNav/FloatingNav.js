import { scrollToId } from '../Common/helper'
import Logo from '../Logo/Logo'
import './styles.scss'
export default function FloatingNav() {
    return (
        <div className='floating-nav'>
            <Logo size={5} />
            <span onClick={() => {
                scrollToId('navbar')
            }}> Home </span>
            <span onClick={() => {
                scrollToId('page-2')
            }}> Services </span>
            <span> Gallary </span>
            
            <span  onClick={() => {
                scrollToId('page-8')
            }}> Contact </span>
        </div>
    )
}