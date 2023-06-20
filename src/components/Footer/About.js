import { about } from "../Services/data/data";

export default function About() {
    return (
        <div className='page footer-about'>
            <div className='logo'>
                <h2>GRAPHIC<span>NIX</span></h2>
            </div>
            <p>{about}</p>
            <div className='contact'>
            <div className="item">
                <p className="trnsparent-text">Email</p>
            </div>
            <div className="item">
                <p>Instagram</p>
            </div>
            <div className="item">
                <p>Twitter</p>
            </div>
            <div className="item">
                <p>Facebook</p>
            </div>
            <div className="item">
                <p>Linkedin</p>
            </div>
        </div>
        </div>
    )
}