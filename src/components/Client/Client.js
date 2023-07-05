import './styles.scss'
import clientNames from "./data";
import AnimatedItems from "../Common/Motion/AnimatedItems";
export default function Client({ uid }) {
    return (
        <div className="page-text  client-container page" id={uid}>
            <h3 className='center-small-capital-heading'>TRUSTED CLIENTS</h3>
            <AnimatedItems className={'client-item'} animate={true} data={clientNames} child={(item) => <span>{item}</span>} />
        </div>

    )
}