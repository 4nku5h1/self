import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import ImageServices from "./Service/ImageServices/ImageServices";
import ServiceDetail from "./Service/ServiceDetail/ServiceDetail";

import '../css/styles.scss'

export default function MainComponent() {

    return (
        <div className='main'>
            <Routes>
                <Route path="/page-not-found" element={<h1>Page Not Found</h1>} />
                <Route path="/" element={<Home />} />
                <Route path="/image-services" element={<ImageServices />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
            </Routes>
        </div>
    )
}