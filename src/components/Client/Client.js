import { motion } from "framer-motion";
import './styles.scss'
import ClientsData from "./data";
export default function Client({ id }) {
    const images = ClientsData
    return (
        <motion.div className='page content flex-center' id={id}>
            <div className='text-content text-heading'>
                <h1>TRUSTED CLIENTS</h1>
            </div>
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