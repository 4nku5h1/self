import b1 from '../../../assets/parallax/b3.webp'
import b2 from '../../../assets/horizontalgallary/1.webp'
import b3 from '../../../assets/horizontalgallary/2.webp'
import b4 from '../../../assets/horizontalgallary/4.webp'
import b5 from '../../../assets/horizontalgallary/5.webp'
import './styles.scss';

export default function ImageGridBanner({ uid, data }) {
    data = {
        row1: [b1, b2, b5, b1],
        row2: [b3, b4, b5, b1],
    }
    function handleScroll(e){
        console.log(e)
    }
    return (
        <div className='page themer'>
            <div id={uid} className='image-gallary' onScroll={handleScroll}>
                <div className='image-gallary-container'>
                    {Object.values(data).map((row) => {
                        return (
                            <div className='row'>
                                {row.map((img) => {
                                    return (
                                        <img src={img}></img>
                                    )
                                })}

                            </div>
                        )
                    })}
                </div>
                
                <button  className='button btn-view-gallery-mobile'>View Gallery</button>
                <div className='image-gallary-foreground' >
                    <h2>Want to see more?</h2>
                    <button  className='button'>View Gallery</button>
                </div>
            </div>

        </div>
    )
}