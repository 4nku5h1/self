import { motion } from "framer-motion";
import './styles.scss'
import ClientsData from "./data";
export default function Client({ uid }) {
    const images = ClientsData
    return (
        <div className="client-container" id={uid}>
            <div className='text-content text-heading  client-heading page'>
                <h3>TRUSTED CLIENTS</h3>
            </div>
            <motion.div className='page client flex-center'>


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
        </div>

    )
}