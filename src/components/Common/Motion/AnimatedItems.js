import { motion } from "framer-motion";

import './styles.scss'
export default function AnimatedItems({ className, data = [], child, animate }) {
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
        <motion.div
            className="item-container"
            variants={container}
            initial="hidden"
            viewport={{ once: true }}
            animate={animate ? "visible" : "hidden"}
        >
            {data.map((itemData, index) => {
                return (
                    <motion.div className={className ? className : 'item'} variants={item} >
                        {child(itemData, index)}
                    </motion.div>
                )
            })}
        </motion.div>
    )
}