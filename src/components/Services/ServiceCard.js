export default function ServiceCard({ title, description, process }) {

    return (
        <div className='page details'>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="process">
                <p>{process?.title}</p>
                {process?.list.map((pItem) => <li>{pItem}</li>)}
            </div>
        </div>

    )
}