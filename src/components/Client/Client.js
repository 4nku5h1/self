import './styles.scss'
import clientNames from "./data";
import AnimatedItems from "../Common/Motion/AnimatedItems";
export default function Client({ uid }) {
    return (
        <div className="page-text  client-container page" id={uid}>
            <div className='client-heading'>
                <h3>TRUSTED CLIENTS</h3>
            </div>
            
            <AnimatedItems animate={true} data={clientNames} child={(item)=><span>{item}</span>} />
        </div>

    )
}