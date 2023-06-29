import './styles.scss'

export default function Logo({ size = 24, showSubtitle = true, subtitleAlign='right' }) {
    return (
        <div className='logo' style={{ fontSize: `${size}px` }}>
            <h2>GRAPHIC<span>NIX</span></h2>
            {showSubtitle ? <h3 style={{textAlign:subtitleAlign}}>A design studio</h3> : null}
        </div>
    )
}