import Spacer from "../../Common/Spacer/Spacer";
import AllServices from "../AllServices/AllServices";
import ServiceOverview from "../ServiceOverview/ServiceOverview";

import './styles.scss'
export default function ServicesPage() {
    return (
        <div className="services-page themer">
            <Spacer className="spacer" />
            <ServiceOverview uid='SERVICE-OVERVIEW' />
            <AllServices />
        </div>
    )
}