import React from 'react';
// import MouseMove from './MouseMove/MouseMove';
import TextAnimation from '../Common/TextAnimation';
import image from '../../assets/home-background.webp'
import Card from './Card/Card';
import { idCards } from '../../js/sitedata';
export default function Home({id}) {

    const a = ['asd', 'htasd', 'fdfgh', 'dfgdfg']
    return (

        <div className='home page flex-center' id={id}>

            {/* <img className='background-image' src={image}></img> */}

            <div className='info-left'>
                <h2>GRAPHIC<span>NIX</span></h2>
                <h4>A Design  Studio</h4>
                <div className='subtitle'>
                    <span>Turning Ideas into</span>
                    <h2><TextAnimation texts={['Reality.', 'PHOTO.', 'VIDEO.']} /></h2>
                </div>

                <div className='home-id-cards'>
                    {idCards.map((item) => <Card {...item} />)}
                </div>
                {/* <div className='description'>
                    <button className='contact-button'>Contact Us</button>
                </div> */}
            </div>
        </div>

    )
}