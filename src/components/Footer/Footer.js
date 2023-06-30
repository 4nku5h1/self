import { motion } from "framer-motion"
import { about, services } from "../Services/data/data";
import { contactData, socialdata } from "./data.js";

import './styles.scss';
import Logo from "../Logo/Logo";

export default function Footer({ id }) {
    return (
        <div className='page footer flex-center' id={id}>
            {/* <Logo /> */}
            <div className="text">
                <h2>GET IN</h2>
                <h2>CONTACT</h2>
            </div>
            {/* <div className="talk-to-us">
                <h1>Got a brand on your hands? Let’s talk about it.</h1>
                <button className="button">Get In Touch</button>
            </div> */}
            <div className="social">
                <div className="item">
                    <p className="highlight">graphicnix.com</p>
                    <p>Privacy Policy © 2023 <span className="highlight"> Graphicnix</span></p>
                </div>
                <div className="item">
                    <p>Bichpuri</p>
                    <p>00145 Rome — Italy</p>
                </div>
                <div className="item">
                    <p className="highlight">abxcs@aa.com</p>
                    <p>(+39) <span className="highlight">333 329 77</span></p>
                </div>
                <div className="item-img">
                    {socialdata.map((e) => {
                        return (
                            <div className="item">

                                <img src={e.image}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
{/* <div className="footer-banner">
<Logo />
<Social />
</div>
<div className="footer-content">
<Services title={'Image Services'} data={['Custom Editing', 'Enhancement', 'Virtual Staging', 'Day to Dusk', 'Item removal', 'Renders']} />
<Services title={'Video Services'} data={['Custom Editing', 'Animation', 'Motion Graphics', 'Compositing', 'Sound FX', 'VFX']} />
<Services title={'Extra Services'} data={['Product (Shoes, Bags, Cloth)', 'Jewellery', 'Real Estate', 'Restoration']} />
<ContactUs />
</div>
<AboutUs /> */}