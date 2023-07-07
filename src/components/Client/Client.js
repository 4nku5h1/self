import AnimatedItems from "../Common/Motion/AnimatedItems";
import clientNames from "./data";

import './styles.scss'
export default function Client({ uid }) {
    return (
        <div className="page-text  client page" id={uid}>
            <div className='container'>
                <h3 className='center-small-capital-heading'>TRUSTED CLIENTS</h3>
                <AnimatedItems  animate={true} data={clientNames} child={(item) => <span>{item}</span>} />
            </div>
        </div>

    )
}