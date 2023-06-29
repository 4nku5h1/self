import React from 'react';

import './styles.scss';
import { about } from '../Services/data/data';
function TextBanner({ id }) {
    const text = {
        r1: ["W", "E", ".", "."],
        r2: [".", "A", "R", "E"]
    }
    return (
        <div className='text-banner flex-center' id={id}>
            <div className='background-text'>
                {Object.values(text).map((row) => {
                    return (
                        <div className='text-row'>
                            {row.map((letter) => {
                                return (
                                    <h2 style={{ opacity: letter === '.' ? '0' : 1 }}>{letter}</h2>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className='foreground-text'>
                <h3>A design studio, based on bichpuri, Agra</h3>
            </div>
        </div>

    )
}
export default function AboutUs() {
    return (
        <div className='about page'>
            <TextBanner />
            <p>{about}</p>
        </div>
    )
}