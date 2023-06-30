import { motion } from "framer-motion";
import './styles.scss'
import ClientsData from "./data";
export default function Client({ id }) {
    const images = ClientsData
    return (
        <motion.div className='page content flex-center' id={id}>
            <motion.div className="text-content">
                <h1>Our trusted Client</h1>
            </motion.div>
            <motion.div className="gallary flex-center">
                {images.map((image) => {
                    return (
                        <div className="image-wrapper">
                            <img src={image} />
                        </div>
                    )
                })}
            </motion.div>


        </motion.div>
    )
}