import { motion } from "framer-motion";

import './styles.scss'
export default function About() {

    return (
        <motion.div className='page about'>
            <motion.div className="text-content">
                <h2>Grahicnix</h2>
                <p>We do brand strategy and brand design
                    . When asked to pick between beauty
                    and reason, we choose both: we
                    believe they need each other.</p>
            </motion.div>


        </motion.div>
    )
}