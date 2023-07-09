import { contactData, socialdata } from "./data.js";

import video from '../../assets/video/backgroundVideo.mp4'
import './styles.scss';
import Logo from "../Logo/Logo";

export default function Footer({ uid }) {
    return (
        <div className='page footer' id={uid}>
            {/* <video preload="auto" autoplay="" loop="true" muted="" playsinline="" id="bgvid" className="video">
                <source src={video} type="video/mp4" />
            </video> */}
            <div className="container">
                <Logo size={10} />
                <div className="talk-to-us">
                    <h1><span>Got a brand on your hands?</span> Let’s talk about it.</h1>
                    <button className="button">Get In Touch</button>
                </div>
                <div className="footer-bar">
                    <div className="contact">
                        <div className="item">
                            <p className="highlight">graphicnix.com</p>
                            <p>Privacy Policy © 2023 <span className="highlight"> Graphicnix</span></p>
                        </div>
                        <div className="item">
                            <p>South Extension 42</p>
                            <p>New Delhi, India</p>
                        </div>
                        <div className="item">
                            <p className="highlight">graphicnix@gmail.com</p>
                            <p>(+91) <span className="highlight">74171 89899</span></p>
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


            </div>
        </div>
    )
}