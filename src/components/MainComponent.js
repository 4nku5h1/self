import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';

import '../css/styles.scss'

export default function MainComponent() {
    return (
        <div className='main'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Home />} />

                <Route path="*" element={<h1>Page Not Found</h1>}/>
            </Routes>
        </div>
    )
}