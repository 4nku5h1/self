import Button from '../../Common/Button/Primary/Button';
import { scrollToId } from '../../Common/helper';
import './styles.scss';

export default function Stats({ uid }) {
    const StatsCard = ({ title, description }) => {
        return (
            <div className='stats-card'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        )
    }
    return (
        <div className='page stats' id={uid}>
            <div className='cards container'>
                <StatsCard title={"10 +"} description={"YEARS OF EDITING EXPERIANCE"} />
                <StatsCard title={"10 K +"} description={"PROJECT DELIVERED"} />
                <StatsCard title={"500 +"} description={"HAPPY CLINTS"} />
                <StatsCard title={"150 +"} description={"PROFESSIONAL EMPLOYEES"} />
            </div>
            <Button label={'CONTACT US'} onClick={()=>scrollToId("FOOTER")}/>
        </div>
    )
}