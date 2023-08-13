
export default function Spacer({ className = null, height = 0, width = 0, unit = 'px' }) {
    if (className) {
        return (
            <div className={className} />
        )
    }
    return (
        <div style={{ height: `${height + unit}`, width: `${width + unit}` }} />
    )

}