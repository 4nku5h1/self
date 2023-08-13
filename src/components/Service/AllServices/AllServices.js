import ImageCompare from '../../Common/ImageCompare/ImageCompare';
import { servicesConfig } from '../../Common/Themer/config/pageConfig';
import { services } from '../../data';
import MaterialPage from '../../Common/MaterialPage/MaterialPage';

export default function AllServices() {
    const serviceIds = Object.keys(servicesConfig).filter((id) => id.includes("SERVICE"));
    serviceIds.shift()
    return (
        <>
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
        </>

    )
}