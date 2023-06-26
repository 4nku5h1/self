export default function ServiceCard({ title, description, process, aligh }) {

    return (
        <div className={`page service-card ${aligh}`}>
            <div className="title">
                <h2>{title[0]}</h2>
                <h2>{title[1]}</h2>
            </div>
            <p>{description}</p>
            {/* <div className="process">
                <p>{process?.title}</p>
                {process?.list.map((pItem) => <li>{pItem}</li>)}
            </div> */}
        </div>

    )
}