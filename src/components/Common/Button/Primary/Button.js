export default function Button({ className, label }) {
    return (
        <button className={`button ${className}`}>{label}</button>
    )
}