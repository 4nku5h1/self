import InfiniteImageGallary from "../Common/ImageCompare/InfiniteImageGallary/InfiniteImageGallary";
import { motion } from "framer-motion";
import ClientsData from './data.js'
export default function Clients() {
    
    return (
        <motion.div className='page clients'>
            <h2>TRUSTED CLIENTS </h2>
            <motion.div className="item">
            {ClientsData.map((image)=>{
                return(
                    <img src={image}></img>
                )
            })}
            </motion.div>
           

        </motion.div>
    )
}