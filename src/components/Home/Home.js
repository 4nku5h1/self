import React from 'react';
import TextAnimation from '../Common/TextAnimation';
import Card from './Card/Card';
import { idCards } from '../../js/sitedata';

import './styles.scss';
export default function Home({id}) {
    return (

        <div className='home page flex-center' id={id}>
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
            </div>
        </div>

    )
}