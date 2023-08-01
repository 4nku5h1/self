import './styles.scss'

export default function Tablet({ title, child, height = 0, width = 0 }) {
    return (
        <div className='tablet-container'>
            <p className='paragraph'>Discover the impressive transformations achieved through our exceptional {title} services. After our skilled team at <span style={{ color: '#00948C' }}>Graphicnix</span> worked its magic.</p>
            <div className='tablet' style={{ height: `${height + 25}px`, width: `${width + 25}px` }}>
                <div className='tablet-home-bar'></div>
                <div className='tablet-child'>
                    {child}
                </div>
            </div>
        </div>

    )
}