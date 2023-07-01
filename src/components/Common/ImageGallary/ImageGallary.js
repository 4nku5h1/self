import b1 from '../../../assets/parallax/b3.webp'

import './styles.scss';

export default function ImageGallary({ id, data }) {
    data = {
        row1: [b1, b1, b1, b1, b1,b1,b1,b1],
        row2: [b1, b1, b1, b1, b1,b1,b1,b1],
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