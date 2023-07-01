import React from 'react';
import TextAnimation from '../Common/TextAnimation';
import Card from './Card/Card';
import { idCards } from '../../js/sitedata';
import backg from '../../assets/parallax/b3.webp'

import './styles.scss';
export default function Home({ id }) {
    return (
        <div className='home page' id={id}>
            <div className='text'>
                <h2>Design studio </h2>
                <h2> DRIVEN BY RESEARCH  </h2>
                <h2>& STRATEGY</h2>
            </div>
            <div className='banner'>
                <img src={backg} />
            </div>
            {/* <div className='service-card'>
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
            </div> */}
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