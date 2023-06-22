import InfiniteImageGallary from "../Common/ImageCompare/InfiniteImageGallary/InfiniteImageGallary";
import { useViewportScroll, motion } from "framer-motion";
export default function Clients() {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    return (
        <div className='page clients'>
            <h2>TRUSTED CLIENTS </h2>
            <motion.div
                style={{ scale }}
            >
                <motion.div
                    style={{
                        scaleY: scrollYProgress
                    }}
                >
                    <h1>asdfhj</h1>
                </motion.div>
            </motion.div>
        </div>
    )
}