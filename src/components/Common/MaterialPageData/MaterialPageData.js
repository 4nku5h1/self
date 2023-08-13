import { Link } from 'react-router-dom';
import Button from '../Button/Primary/Button';
import { scrollToId } from '../helper';
import AnimatedItems from '../Motion/AnimatedItems';
import './styles.scss'

export default function MaterialPageData({ uid, heading, paragraph, dataHeading, data = [], action = { label: '', path: null, onClick: () => { } } }) {
    const Item = (item, index) => {
        return (
            <div onClick={() => {
                setTimeout(() => {
                    scrollToId(`SERVICE-${index + 1}`)
                }, 400)
            }}>
                <h2 c>{item.title}</h2>
                <p>{item.descriptionOverview || item.description}</p>
            </div>
        )
    }
    return (
        <div className='page service themer service-overview' id={uid}>
            <div className='container'>
                <h2 className='heading-h2'>{heading}</h2>
                <p className='paragraph'>{paragraph}</p>
                <h5 className='small-capital-heading'>{dataHeading}</h5>
                <AnimatedItems className="service-card" animate={true} data={data} child={Item} />
                <Link to={action?.path}>
                    <Button label={action.label} onClick={action?.onClick} />
                </Link>



            </div>
        </div>
    )
}