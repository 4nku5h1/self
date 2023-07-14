import b1 from '../../../assets/parallax/b3.webp'

import './styles.scss';

export default function ImageGallary({ id, data }) {
    data = {
        row1: [b1, b1, , b1, b1],
        row2: [b1, b1, , b1, b1],
    }
    return (
        <div className='page'>
            <div id={id} className='image-gallary'>
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
                <div className='image-gallary-foreground' >
                    <h2>Want to see more?</h2>
                    <button  className='button'>View Gallary</button>
                </div>
            </div>

        </div>
    )
}