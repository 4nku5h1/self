import b1 from '../../../assets/parallax/b1.webp'
import b2 from '../../../assets/parallax/b2.webp'
import b3 from '../../../assets/parallax/b3.webp'

import './styles.scss';

export function ImageGallary({ id, data }) {
    data = {
        row1: [b1, b2, b3],
        row2: [b1, b2, b3],
    }
    return (
        <div id={id} className='image-gallary page'>
            {Object.values(data).map((row) => {
                return(
                    
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
    )
}