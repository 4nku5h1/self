import { motion } from 'framer-motion'
import './styles.scss';
import { services } from '../data/data';
import { scrollToId } from '../../Common/helper';

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
        <div className=' text-banner' id="SERVICE-TITLE">
            <div className='service-title-heading flex-center'>
                <h2>Our services</h2>
                <p>5.0 (google)</p>
            </div>
            <motion.div
                className="service-title"
                variants={container}
                initial="hidden"
                viewport={{ once: true }}
                animate={isCurrentPage ? "visible" : "hidden"}
            >
                <>{data.map((e, index) => {
                    return (
                        <motion.div className="item-card" variants={item} >
                            <div className='card-foreground'>
                            </div>
                            <img src={e.titleImage} />
                            <div className='service-title-content'>
                                <p>{e.title}</p>
                                <button className='button' onClick={()=>{
                                    scrollToId(`SERVICE-${index+1}`)
                                }}>View</button>
                            </div>
                        </motion.div>
                    )
                })}
                </>


            </motion.div>
        </div>
    )
}