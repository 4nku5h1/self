import { scrollToId } from '../../Common/helper';
import AnimatedItems from '../../Common/Motion/AnimatedItems';

import './styles.scss'

export default function ServiceTitle({ appContext, data }) {

    const isCurrentPage = ["SERVICE-LANDING", "SERVICE-1"].includes(appContext.state?.pageConfig?.id);
    const ItemImageEditing = (item, index) => {
        return (
            <div onClick={() => {
                scrollToId(`SERVICE-${index + 1}`)
            }}>
                <h2 c>{item.title}</h2>
                <p>4X HONORABLE MENTION</p>
            </div>
        )
    }
    const ItemVideoEditing = (item, index) => {
        return (
            <div>
                <h2>{item}</h2>
                <p>4X HONORABLE MENTION</p>
            </div>
        )
    }
    return (
        <div className='page service themer service-landing' id="SERVICE-LANDING">
            {/* https://www.sublimio.com/about/ */}
            <div className='container'>
                <h2 className='heading-h2'>Services</h2>
                <p className='paragraph'>Graphicnix boasts over 10,000 accomplished projects, accompanied by the esteemed recognition of winning the German Editing Award for our exceptional editing. Partnering with us means collaborating with a dedicated team of professionals who are passionate about driving your success.</p>
                <h5 className='small-capital-heading'>Image Editing</h5>
                <AnimatedItems className="service-card" animate={isCurrentPage} data={data} child={ItemImageEditing} />
                <h5 className='small-capital-heading'>Video Editing</h5>
                <AnimatedItems className="service-card" animate={isCurrentPage} data={['Video Editing', 'VFX', 'Sound-FX', 'Compositing', 'Motion Graphics', 'Animation',]} child={ItemVideoEditing} />
            </div>
        </div>
    )
}
// Custom Editing', 'Enhancement', 'Virtual Staging', 'Day to Dusk', 'Item removal', 'Renders'
// Custom Editing', 'Animation', 'Motion Graphics', 'Compositing', 'Sound FX', 'VFX'
// Product (Shoes, Bags, Cloth)', 'Jewellery', 'Real Estate', 'Restoration'