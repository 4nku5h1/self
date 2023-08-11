import roseImage from '../../assets/background/rose.webp'
import AnimatedItems from '../Common/Motion/AnimatedItems'
import { about, clientDescription, clientNames } from '../data'

import './styles.scss'
export default function About({ uid }) {
    return (
        <div className="themer page content" id={uid}>
            <div className="container">
                <img src={roseImage} />
                <h3 className='small-capital-heading'>ABOUT US</h3>
                <p className='paragraph'>{about}</p>
                <div className='spacer' />
                <h3 className='small-capital-heading'>TRUSTED CLIENTS</h3>
                <p className='paragraph'>{clientDescription}</p>
                <AnimatedItems animate={true} data={clientNames} child={(item) => <span>{item}</span>} />
            </div>

        </div>

    )
}