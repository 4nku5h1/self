import { scrollToId } from '../../Common/helper';
import AnimatedItems from '../../Common/Motion/AnimatedItems';

import './styles.scss'

export default function ServiceTitle({ appContext, data }) {

    const isCurrentPage = ["SERVICE-LANDING", "SERVICE-1"].includes(appContext.state?.pageConfig?.id);
    const ItemImageEditing = (item, index) => {
        return (
            <div onClick={() => {
                scrollToId(`SERVICE-${index + 1}`)
            }}>{item.title}</div>
        )
    }
    const ItemVideoEditing = (item, index) => {
        return (
            <div>{item}</div>
        )
    }
    return (
        <div className='page service themer service-landing' id="SERVICE-LANDING">
            {/* https://www.sublimio.com/about/ */}
            <div className='container'>
                <h2 className='heading-h2'>Our Services</h2>
                <p className='paragraph'>Graphicnix boasts over 10,000 accomplished projects, accompanied by the esteemed recognition of winning the German Editing Award for our exceptional editing. Partnering with us means collaborating with a dedicated team of professionals who are passionate about driving your success.</p>
                <h5 className='heading-h5'>Image Editing</h5>
                <AnimatedItems className="" animate={isCurrentPage} data={data} child={ItemImageEditing}/>
                <h5 className='heading-h5'>Video Editing</h5>
                <AnimatedItems animate={isCurrentPage} data={['video editing', 'vfx', 'sound fx', 'compositing', 'motion graphics', 'animation',]} child={ItemVideoEditing} />
            </div>
        </div>
    )
}