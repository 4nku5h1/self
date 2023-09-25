import { contactData, socialdata } from "./data.js";

import './styles.scss';
import Logo from "../Logo/Logo";

export default function Footer() {
    return (
        <div className='page footer'>
            <div className="container">
                <Logo size={10} />
                <div className="talk-to-us">
                    <h1><span>Got a brand on your hands?</span> Let’s talk about it.</h1>
                    <a href="https://wa.me/+919457776161">
                        <button className="button">Get In Touch</button>
                    </a>
                </div>
                <div className="footer-bar">
                    <div className="contact">
                        <div className="item">
                            <p className="highlight">pixobrew.com</p>
                            <p>Privacy Policy © {new Date().getFullYear()} <span className="highlight"> Pixobrew</span></p>
                        </div>
                        <div className="item">
                            <p>South Extension 42</p>
                            <p>New Delhi, India</p>
                        </div>
                        <div className="item">
                            <p className="highlight link"><a href="mailto:pixobrew.studio@gmail.com?subject=Request for Editing Services&body=Hi,">pixobrew@gmail.com</a></p>
                            <p className="link"><a href="tel:+919457776161">(+91) <span className="highlight">94577 76161</span></a></p>
                        </div>

                    </div>
                    <div className="social">
                        {socialdata.map((e) => {
                            return (
                                <img src={e.image}></img>
                            )
                        })}
                    </div>
                </div>
                <div className="developer-text" id="FOOTER">
                    <a href="https://wa.me/+919457776161">Love this Site?<span> Get in Touch with Skilled Developers and Bring Your Vision to Life.</span></a>
                </div>
            </div>
        </div>
    )
}