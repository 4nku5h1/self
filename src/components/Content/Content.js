import './styles.scss'
export default function Content({ uid, title, description, image }) {
    return (
        <div className="themer page content" id={uid}>
            <div className="container">
                <img src={image}/>
                <h3 className='center-small-capital-heading'>{title}</h3>
                <p className='paragraph'>{description}</p>
            </div>

        </div>

    )
}