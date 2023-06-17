export default function Extra({ title, description, images }) {

    return (
        <div className='page extra'>
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