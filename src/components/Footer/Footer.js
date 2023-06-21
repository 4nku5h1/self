import { motion } from "framer-motion"
import { ParallaxLayer } from "@react-spring/parallax";
import { about, services } from "../Services/data/data";
import socialData from './data.js'


import twitter from '../../assets/social/twitter.svg';
export default function Footer({ pageOffset }) {
    return (
        <>
            <ParallaxLayer offset={pageOffset} speed={1}>
                <div className='page footer'>
                    <div className="left">
                        <h2>About us</h2>
                        <p>{about}</p>
                        <div className="services">
                            <h2>Services</h2>
                            <div>
                                {services.map((it) => {
                                    return (<p>{it.title}</p>)
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="right">
                        <div className="right-container">
                            <div className='logo'>
                                <h2>GRAPHIC<span>NIX</span></h2>
                                <h3>A design studio</h3>
                            </div>
                            <div className="contact">
                                <h2>Follow us</h2>
                                <div className='social'>
                                    {socialData.map((item) => {
                                        return (
                                            <motion.div
                                                className="item"
                                                whileHover={{ scale: 1.2, rotate: 90 }}
                                                whileTap={{
                                                    scale: 0.8,
                                                    rotate: -90,
                                                    borderRadius: "100%"
                                                }}
                                            >

                                                <img src={item.image}></img>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>
        </>
    )
}