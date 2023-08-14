import { services } from "../../data";
import { servicesConfig } from "../../Common/Themer/config/pageConfig";
import { scrollToId } from "../../Common/helper";

import ImageCompare from "../../Common/ImageCompare/ImageCompare";
import MaterialPage from "../../Common/MaterialPage/MaterialPage";
import Spacer from "../../Common/Spacer/Spacer";
import MaterialPageData from "../../Common/MaterialPageData/MaterialPageData";

import './styles.scss';

export default function ImageServices() {
    const serviceIds = Object.keys(servicesConfig).filter((id) => id.includes("SERVICE"));
    serviceIds.shift();
    return (
        <div className="services-page themer">
            <Spacer className="spacer" />
            <MaterialPageData
                uid='SERVICE-OVERVIEW'
                data={services}
                heading="Image Services"
                paragraph="Graphicnix boasts over 10,000 accomplished projects, accompanied by the esteemed recognition of winning the German Editing Award for our exceptional editing. Partnering with us means collaborating with a dedicated team of professionals who are passionate about driving your success."
                dataHeading="Image Editing"
                buttonOptions={{ label: "CONTACT US", onClick: ()=>scrollToId("FOOTER") }}
            />
            {services.map((data, index) => {
                const { title, description, imageBeforeOverview, imageAfterOverview } = data;
                const id = serviceIds[index]
                return (
                    <MaterialPage
                        uid={id}
                        imageOptions={{ default: false, child: <ImageCompare imageBeforeOverview={imageBeforeOverview} imageAfterOverview={imageAfterOverview} scrollTo={0} /> }}
                        title={title}
                        description={description}
                        buttonOptions={{ label: 'Explore More', path: `${data.path}` }}
                    />
                )
            })}
        </div>
    )
}