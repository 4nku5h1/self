export default function Image({ className = 'image', img }) {
    return (
        < div className={className} >
            <img src={img} />
        </div >
    )
}