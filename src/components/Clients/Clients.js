import InfiniteImageGallary from "../Common/InfiniteImageGallary/InfiniteImageGallary";
import { motion } from "framer-motion";
import ClientsData from './data.js'
export default function Clients({id}) {
    
    return (
        <motion.div className='page clients' id={id}>
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