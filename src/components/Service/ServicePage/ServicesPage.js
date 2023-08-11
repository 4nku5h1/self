import AllServices from "../AllServices/AllServices";
import ServiceOverview from "../ServiceOverview/ServiceOverview";
// import img from '../../../assets/background/servicePageBanner.jpg'

import './styles.scss'
export default function ServicesPage() {
    return (
        <div className="services-page"> 
            {/* <img className="banner" src={img} /> */}
            <ServiceOverview />
            <AllServices />
        </div>
    )
}