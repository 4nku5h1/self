import { motion } from "framer-motion";
import './styles.scss'
export default function Content({ uid, title, description, image, imageHeight, imageWidth }) {
    const imageStyle = { height: ` ${imageHeight}px`, width: ` ${imageWidth}px` }
    return (
        <div className="themer page-text flex-column flex-center">
            <motion.div className='content ' id={uid}>
                <img src={image} style={imageStyle} />
                <h3 className='center-small-capital-heading'>{title}</h3>
                <p>{description}</p>
            </motion.div>
        </div>

    )
}