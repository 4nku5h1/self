import React from 'react';
// import MouseMove from './MouseMove/MouseMove';
import TextAnimation from '../Common/TextAnimation';
import image from '../../assets/home-background.webp'
import Card from './Card/Card';
import { idCards } from '../../js/sitedata';
export default function Home() {

    const a = ['asd', 'htasd', 'fdfgh', 'dfgdfg']
    return (

        <div className='home page flex-center'>

            {/* <img className='background-image' src={image}></img> */}

            <div className='info-left'>
                <h2>GRAPHIC<span>NIX</span></h2>
                <h4>Design & Development Studio</h4>
                <div className='subtitle'>
                    <span>Turning Ideas into</span>
                    <h2><TextAnimation texts={['Reality.', 'PHOTO.', 'VIDEO.', 'Web Apps.', 'Android Apps.']} /></h2>
                </div>

                <div className='home-id-cards'>
                    {idCards.map((item) => <Card {...item} />)}
                </div>
                {/* <div className='description'>
                    <button className='contact-button'>Contact Us</button>
                </div> */}
            </div>
            <div className='info-right flex-row'>
            </div>
        </div>

    )
}
{/* <div className='info-right'>
                <h5>phone</h5>
                <h5>email</h5>
                <h5>Instagram</h5>
                <h5>twitter</h5>
                <h5>facebook</h5>
                <h5>linkedin</h5>
            </div> */}