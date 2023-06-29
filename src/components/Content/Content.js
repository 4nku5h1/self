import { motion } from "framer-motion";
import './styles.scss'
export default function Content({ id, title, description, images, imageHeight, imageWidth }) {
    const imageStyle = { height: ` ${imageHeight}px`, width: ` ${imageWidth}px` }
    return (
        <motion.div className='page content flex-center' id={id}>
            {!Array.isArray(images) ? (
                <img src={images} style={imageStyle} />) : null}
            <motion.div className="text-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </motion.div>
            {Array.isArray(images) ? (
                <motion.div className="gallary flex-center">
                    {images.map((image) => {
                        return (
                            <img src={image} style={imageStyle} />
                        )
                    })}
                </motion.div>
            ) : null}

        </motion.div>
    )
}