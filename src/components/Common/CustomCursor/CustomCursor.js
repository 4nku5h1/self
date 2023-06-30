import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useAppContext } from '../AppContext/AppContext'

import './styles.scss'

export default function () {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })
    const appContext = useAppContext();
    const cursorVarient = appContext.state.cursorVarient;

    const variants = {
        default: {
        },
        ball: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
        },
        text: {
            height: 100,
            width: 100,
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            backgroundColor: "white",
            mixBlendMode: "difference"
        }
    }
    function mouseMove(e) {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        })

    }
    useEffect(() => {
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, [])
    useEffect(() => {
        if (cursorVarient === 'default') {
            window.removeEventListener("mousemove", mouseMove);
        } else {
            window.addEventListener("mousemove", mouseMove);
        }
    }, [cursorVarient])
    return (
        <motion.div
            className={cursorVarient === 'default' ? 'cursor' : 'cursor active'}
            variants={variants}
            animate={cursorVarient}
        />

    )
}