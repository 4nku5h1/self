import './styles.scss'
export default function ImageSlideCompare({ imageBefore, imageAfter }) {


    return (
        <div class="image-slider">
            <div className='imageBefore'>
                <img src={imageBefore}
                    alt="GFG_Image" />
            </div>
            <img src={imageAfter}
                alt="GFG_Image" />
        </div>
    )
}