
import before_after_prod from '../../../assets/img/images/before_after_prod.jpg'
import image_enhancement from '../../../assets/img/images/image_enhancement.gif';
import day_to_dusk from '../../../assets/img/images/day_to_dusk.gif';
import virtual_staging from '../../../assets/img/images/virtual_staging.gif';
import item_removal from '../../../assets/img/images/item_removal.gif';
import floor from '../../../assets/img/images/floor_1.jpg';
import render from '../../../assets/img/images/render.jpg';
import software_development from '../../../assets/img/images/software_development.jpg';
import video from '../../../assets/video/back_vid_3.gif'


import s1 from '../../../assets/img/slides/desktop/1.jpg'
import s2 from '../../../assets/img/slides/desktop/2.jpg'
import s3 from '../../../assets/img/slides/desktop/3.jpg'

import sm1 from '../../../assets/img/slides/mobile/1.jpg'
import sm2 from '../../../assets/img/slides/mobile/3.png'
import sm3 from '../../../assets/img/slides/mobile/2.jpg'

import appLogo from '../../../assets/img/vr.png';


export const sliderImages = [
    {
        url: s1,
    },
    {
        url: s2,
    },
    {
        url: s3
    },
];
export const sliderImagesMobile = [
    {
        url: sm1,
    },
    {
        url: sm2,
    },
    {
        url: sm3,
    },
];

const data = {
    appLogo: appLogo,
    product: {
        productName: 'Films',
        productSubName: 'Post Production',
        productInfo: 'Professional photo editing, virtual staging, floor plan redraws, & renders at unbeatable prices.',
        src: video
    },
    extra: {
        id: 'services',
        index: 1,
        name: 'Product Editing',
        text: 'Professional jewelry photo retouching attracts potential buyers and presents precious gemstones in the most appealing way. Necklaces, earrings, rings and other jewelry will shine after photoshopping.',
        src: before_after_prod
    },
    about: {
        site: 'vrfilmspostproduction.com',
        text: 'is the leading online hub for all things digital. Our global team of professional editing experts are ready to transform your photos into eye-catching professional images. Simply upload your photos and let our professionals take care of the rest. We offer a wide range of services including, photo editing, virtual staging, floor plan redraws, renders, and virtual renovations. The process is fast, easy-to-use and extremely affordable.',
        info: {
            adddress: 'New Delhi, India',
            linkedin: 'https://www.linkedin.com/in/vr-films-post-production-80134624a',
            instagram: 'https://www.instagram.com/vrfilmspostproduction22/',
            facebook: 'https://www.facebook.com/VR-films-Post-Production-100828186086590/?ref=pages_you_manage',
            twitter: 'https://twitter.com/films_post',
            email: 'vrfilmspostproduction@gmail.com',
            phone: '+91 7880121259'

        }
    },
    services: [
        {
            id: 'service1',
            index: 1,
            name: 'Image Enhancement',
            text: 'Perfect for real estate photo editing so you can present your listing with top-notch, retouched professional-looking photos.',
            src: image_enhancement
        },
        {
            id: 'service2',
            index: 2,
            name: 'Virtual Staging',
            text: 'Our team can add furniture to real estate photography to show potential buyers just how versatile the space is.',
            src: virtual_staging
        },
        {
            id: 'service3',
            index: 3,
            name: 'Day to Dusk',
            text: 'Our photo retouching service will take your exterior property photo from drab to fab by replacing your sky with a beautiful dusk setting.',
            src: day_to_dusk
        },
        {
            id: 'service4',
            index: 4,
            name: 'Item removal',
            text: 'Our photo editing experts can remove unwanted items from your photos.',
            src: item_removal
        },
        {
            id: 'service5',
            index: 5,
            name: 'Floor Plan Redraws',
            text: 'Clearly showcase your listing to potential buyers with an online floorplan available in a range of 2D and 3D options.',
            src: floor
        },
        {
            id: 'service6',
            index: 6,
            name: 'Renders',
            text: 'Bring plans to life with our render service available for a range of plans and designs.',
            src: render
        },
        {
            id: 'service7',
            index: 7,
            name: 'Software Development',
            text: 'Develop a custom software in accordance with the changing needs of business and end users. VR Films helps businesses by developing fully functional, feature-rich and compatible Web and Mobile applications to drive growth and overcome business challenges',
            src: software_development
        }
    ]
}

export default data;
