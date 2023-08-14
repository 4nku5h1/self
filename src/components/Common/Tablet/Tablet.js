import './styles.scss'

export default function Tablet({ className, title, child}) {
    return (
        <div className='tablet-container'>
            <p className='paragraph'>Discover the impressive transformations achieved through our exceptional {title} services. After our skilled team at <span style={{ color: '#00948C' }}>Graphicnix</span> worked its magic.</p>
            <div className='tablet'>
                <div className='tablet-home-bar'></div>
                <div className='tablet-child'>
                    {child}
                </div>
            </div>
        </div>

    )
}