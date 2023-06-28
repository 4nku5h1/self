import { motion } from "framer-motion"
import { about, services } from "../Services/data/data";
import { contactData, socialdata } from "./data.js";

import backgroundImage from './../../assets/absbackcircle.svg'

export default function Footer({ id }) {

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
                <div className="line" />
                {contactData.map((item) => {
                    return (
                        <div className="item">
                            <img src={item.image}></img>
                            <span>{item.title}</span>
                        </div>
                    )
                })}
                <button>Call now</button>
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
    const Services = ({ title, data }) => {
        return (
            <div className="services-container">
                <h2>{title}</h2>
                <div className="line" />
                <div className="item">
                    {data.map((service) => {
                        return (<p>{service}</p>)
                    })}
                </div>
            </div>
        )
    }
    return (
        <>
                <div className='page footer' id={id}>
                    <div className="footer-banner">
                        <img src={backgroundImage}></img>
                        <Logo />
                        <Social />
                    </div>
                    <div className="footer-content">
                        <Services title={'Image Services'} data={['Custom Editing', 'Enhancement', 'Virtual Staging', 'Day to Dusk', 'Item removal', 'Renders']} />
                        <Services title={'Video Services'} data={['Custom Editing', 'Animation', 'Motion Graphics', 'Compositing', 'Sound FX', 'VFX']} />
                        <Services title={'Extra Services'} data={['Product (Shoes, Bags, Cloth)', 'Jewellery', 'Real Estate', 'Restoration']} />
                        <ContactUs />
                    </div>
                    <AboutUs />
                </div>
        </>
    )
}