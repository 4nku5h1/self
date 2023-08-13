import { services } from "../../data";
import { servicesConfig } from "../../Common/Themer/config/pageConfig";

import ImageCompare from "../../Common/ImageCompare/ImageCompare";
import MaterialPage from "../../Common/MaterialPage/MaterialPage";
import Spacer from "../../Common/Spacer/Spacer";
import ServiceOverview from "../ServiceOverview/ServiceOverview";

import './styles.scss';

export default function ImageServices() {
    const serviceIds = Object.keys(servicesConfig).filter((id) => id.includes("SERVICE"));
    serviceIds.shift();
    return (
        <div className="services-page themer">
            <Spacer className="spacer" />
            <ServiceOverview uid='SERVICE-OVERVIEW' />
            {services.map((data, index) => {
                const { title, description, imageBeforeOverview, imageAfterOverview } = data;
                const id = serviceIds[index]
                return (
                    <MaterialPage
                        uid={id}
                        imageOptions={{ default: false, child: <ImageCompare imageBeforeOverview={imageBeforeOverview} imageAfterOverview={imageAfterOverview} scrollTo={0} /> }}
                        title={title}
                        description={description}
                        buttonOptions={{ label: 'Explore More', path: `/services/${data.path}` }}
                    />
                )
            })}
        </div>
    )
}