export default function Card({title, description}) {
    return (<div className="id-card">
       <div className="content flex-column">
        <h2>{title}</h2>
        <p>{description}</p>
       </div>
    </div>)
}