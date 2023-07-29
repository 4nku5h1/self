import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';

import '../css/styles.scss'

export default function MainComponent() {
    return (
        <div className='main'>
                <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/gallary" element={<Home />} /> */}
                </Routes>
        </div>
    )
}