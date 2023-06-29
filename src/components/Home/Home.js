import React from 'react';
import TextAnimation from '../Common/TextAnimation';
import Card from './Card/Card';
import { idCards } from '../../js/sitedata';
import b1 from '../../assets/parallax/b1.webp'

import './styles.scss';
export default function Home({ id }) {
    return (

        <div className='home page' id={id}>
            <div className='banner'>
                {/* <Logo size={36} subtitleAlign='' /> */}

                <div className='text'>
                    <h4> We believe </h4>
                    <h4> Brands Shape the </h4>
                    <h3> future </h3>
                </div>


            </div>
            <div className='service-card'>
                <h4>We deals in</h4>
                <div className='image-container'>
                    <div className='image-wrapper'>
                        <img src={b1} />
                        <p>Photo</p>
                    </div>
                    <div className='image-wrapper'>
                        <img src={b1} />
                        <p>Video</p>
                    </div>
                    <div className='image-wrapper'>
                        <img src={b1} />
                        <p>Graphic</p>
                    </div>
                    <div className='image-wrapper'>
                        <img src={b1} />
                        <p>Post production</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
{/* <div className='subtitle'>
                    <span>Turning Ideas into</span>
                    <h2><TextAnimation texts={['Reality.', 'PHOTO.', 'VIDEO.']} /></h2>
                </div> */}
{/* <div className='home-id-cards'>
                    {idCards.map((item) => <Card {...item} />)}
                </div> */}