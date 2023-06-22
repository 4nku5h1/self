import { motion } from "framer-motion"
import { ParallaxLayer } from "@react-spring/parallax";
import { about, services } from "../Services/data/data";
import { contactData, socialdata } from "./data.js";

import backgroundImage from './../../assets/absbackcircle.svg'

export default function Footer({ pageOffset }) {

    const AboutUs = () => {
        return (
            <div className="about">
                <p>{about}</p>
            </div>
        )
    }
    const ContactUs = () => {
        return (
            <div className="contact-us">
                <h2>Contact Us</h2>
                <div className="container">
                    {contactData.map((item) => {
                        return (
                            <div className="item">
                                <img src={item.image}></img>
                                <span>{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    const Logo = () => {
        return (
            <div className='logo'>
                <h2>GRAPHIC<span>NIX</span></h2>
                <h3>A design studio</h3>
            </div>
        )
    }
    const Social = () => {
        return (
            <div className='social'>
                {socialdata.map((item) => {
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
        )
    }
    const Services = () => {
        return (
            <div className="services">
                <h2>Services</h2>
                <div>
                    {services.map((it) => {
                        return (<p>{it.title}</p>)
                    })}
                </div>
            </div>
        )
    }
    return (
        <>
            <ParallaxLayer offset={pageOffset} speed={1}>
                <div className='page footer'>
                    <div className="footer-banner">
                        <img src={backgroundImage}></img>
                        <Logo />
                        <Social />
                    </div>
                    <div className="footer-content">
                        <Services />
                        <ContactUs />
                    </div>
                    <AboutUs />
                </div>
            </ParallaxLayer>
        </>
    )
}