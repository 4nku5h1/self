
export default function Spacer({ className = null, height = 0, width = 0 }) {
    if (className) {
        return (
            <div className={className} />
        )
    }
    return (
        <div style={{ height: `${height}px`, width: `${width}px` }} />
    )

}