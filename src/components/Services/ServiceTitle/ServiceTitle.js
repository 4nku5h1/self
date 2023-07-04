import { motion } from 'framer-motion'
import { services } from '../data/data';
import { scrollToId } from '../../Common/helper';
import './styles.scss';

export function ServiceTitle({ appContext, data }) {

    const isCurrentPage = ["SERVICE-TITLE", "SERVICE-1"].includes(appContext.state?.pageConfig?.id);
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <div className='page-text service-title themer' id="SERVICE-TITLE">
            <h2>Our Services</h2>
            <p>Graphicnix boasts over 10,000 accomplished projects, accompanied by the esteemed recognition of winning the German Editing Award for our exceptional editing. Partnering with us means collaborating with a dedicated team of professionals who are passionate about driving your success.</p>
            <h5>Image Editing</h5>
            <motion.div
                className="item-container"
                variants={container}
                initial="hidden"
                viewport={{ once: true }}
                animate={isCurrentPage ? "visible" : "hidden"}
            >
                {data.map((e, index) => {
                    return (
                        <motion.div className="item" variants={item} >
                            <span onClick={() => {
                                scrollToId(`SERVICE-${index + 1}`)
                            }}>{e.title}</span>
                            <p className='border' />
                        </motion.div>
                    )
                })}
            </motion.div>
            <h5>Video Editing</h5>

            <motion.div
                className="item-container"
                variants={container}
                initial="hidden"
                viewport={{ once: true }}
                animate={isCurrentPage ? "visible" : "hidden"}
            >
                {['video editing', 'vfx', 'sound fx', 'compositing', 'motion graphics', 'animation',].map((e, index) => {
                    return (
                        <motion.div className="item" variants={item} >
                            <span>{e}</span>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}