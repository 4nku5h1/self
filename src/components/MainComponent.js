import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import ServicesPage from "./Service/ServicePage/ServicesPage";
import ServiceDetail from "./Service/ServiceDetail/ServiceDetail";

import '../css/styles.scss'

export default function MainComponent() {

    return (
        <div className='main'>
            <Routes>
                <Route path="/page-not-found" element={<h1>Page Not Found</h1>} />
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
            </Routes>
        </div>
    )
}