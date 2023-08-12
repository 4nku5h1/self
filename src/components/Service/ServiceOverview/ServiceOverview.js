import { Link } from 'react-router-dom';
import Button from '../../Common/Button/Primary/Button';
import { scrollToId } from '../../Common/helper';
import AnimatedItems from '../../Common/Motion/AnimatedItems';
import { services, videoServices } from '../../data';
import './styles.scss'

export default function ServiceOverview({ data = services, uid }) {
    const ItemImageEditing = (item, index) => {
        return (
            <Link to="/services">
                <div onClick={() => {
                    setTimeout(() => {
                        scrollToId(`SERVICE-${index + 1}`)
                    }, 400)
                }}>
                    <h2 c>{item.title}</h2>
                    <p>{item.descriptionOverview}</p>
                </div>
            </Link>
        )
    }
    const ItemVideoEditing = (item, index) => {
        return (
            <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>

            </div>
        )
    }
    return (
        <div className='page service themer service-overview' id={uid}>
            <div className='container'>
                <h2 className='heading-h2'>Services</h2>
                <p className='paragraph'>Graphicnix boasts over 10,000 accomplished projects, accompanied by the esteemed recognition of winning the German Editing Award for our exceptional editing. Partnering with us means collaborating with a dedicated team of professionals who are passionate about driving your success.</p>
                <h5 className='small-capital-heading'>Image Editing</h5>
                <AnimatedItems className="service-card" animate={true} data={data} child={ItemImageEditing} />
                <h5 className='small-capital-heading'>Video Editing</h5>
                <AnimatedItems className="service-card" animate={true} data={videoServices} child={ItemVideoEditing} />
                <Link to="/services">
                    <Button label="Get In Touch" />
                </Link>
            </div>
        </div>
    )
}