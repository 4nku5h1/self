import './styles.scss';
export default function CollapsibleCloseButton({ isOpen }) {
    return (
        <div className='hamburger-container'>
            <div className={`hamburger ${isOpen ? 'active' : ''}`}><span></span></div>
        </div>
    )
}