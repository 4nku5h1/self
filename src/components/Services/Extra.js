export default function Extra({ id, title, description, images }) {

    return (
        <div className='page extra' id={id}>
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="gallary">
            {images.map((image)=><img src={image}></img>)}
            </div>

        </div>

    )
}