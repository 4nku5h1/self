import { videoServices } from "../../data";
import { servicesConfig } from "../../Common/Themer/config/pageConfig";
import { scrollToId } from "../../Common/helper";

import Spacer from "../../Common/Spacer/Spacer";
import MaterialPageData from "../../Common/MaterialPageData/MaterialPageData";

import './styles.scss';

export default function VideoServices({data=videoServices}) {
    const serviceIds = Object.keys(servicesConfig).filter((id) => id.includes("SERVICE"));
    serviceIds.shift();
    return (
        <div className="services-page themer">
            <Spacer className="spacer" />
            <MaterialPageData
                uid='SERVICE-OVERVIEW'
                data={data}
                heading="Video Services"
                paragraph="Graphicnix boasts over 10,000 accomplished projects, accompanied by the esteemed recognition of winning the German Editing Award for our exceptional editing. Partnering with us means collaborating with a dedicated team of professionals who are passionate about driving your success."
                // dataHeading="Video Editing"
                buttonOptions={{ label: "CONTACT US", onClick: ()=>scrollToId("FOOTER") }}
            />
        </div>
    )
}