import {motion} from 'framer-motion'
import './styles.scss'

export default function BigText({line1, line2, fontSize, capitalize, multiline=true, showdivider=true}) {
    return (
        <motion.div className="text" style={{textTransform:capitalize? 'uppercase' : '', flexDirection:multiline?'column': 'row'}}>
            <h2 style={{ fontSize:`${fontSize}px`}}>{line1}</h2>
            <h2 style={{ fontSize:`${fontSize}px`}}>{line2}</h2>
            {showdivider ? <div className="line" /> : null}
        </motion.div>
    )
}