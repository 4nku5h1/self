import roseImage from '../../assets/background/rose.webp'
import AnimatedItems from '../Common/Motion/AnimatedItems'
import Stats from '../Home/Stats/Stats'
import { about, clientDescription, clientNames } from '../data'

import './styles.scss'
export default function About({ uid }) {
    return (
        <div className="themer page content" >
            <div className="container" id={uid}>
                <img src={roseImage} />
                <h3 className='about-heading small-capital-heading'>ABOUT US</h3>
                <p className='about-paragraph paragraph'>{about}</p>

                <Stats />
                <div className='spacer' />
                <h3 className='about-heading small-capital-heading'>TRUSTED CLIENTS</h3>
                <p className='about-paragraph paragraph'>{clientDescription}</p>
                <AnimatedItems animate={true} data={clientNames} child={(item) => <span>{item}</span>} />
            </div>

        </div>

    )
}