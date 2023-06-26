import productBefore from '../../../assets/services/productBefore.jpg'
import productAfter from '../../../assets/services/productAfter.jpg'

import virtualStagingBefore from '../../../assets/services/virtualStagingBefore.jpg'
import virtualStagingAfter from '../../../assets/services/virtualStagingAfter.jpg'


import day2DuskBefore from '../../../assets/services/day2DuskBefore.jpg'
import day2DuskAfter from '../../../assets/services/day2DuskAfter.jpg'

import imageEnhancementBefore from '../../../assets/services/imageEnhancementBefore.jpeg'
import imageEnhancementAfter from '../../../assets/services/imageEnhancementAfter.jpeg'

import itemRemovalBefore from '../../../assets/services/itemRemovalBefore.jpg'
import itemRemovalAfter from '../../../assets/services/itemRemovalAfter.jpg'


import render1 from '../../../assets/services/render1.jpeg'
import render2 from '../../../assets/services/render2.jpeg'
import render3 from '../../../assets/services/render3.jpeg'
import render4 from '../../../assets/services/render4.webp'


import b1 from '../../../assets/parallax/b1.webp'
import b2 from '../../../assets/parallax/b2.webp'
import b3 from '../../../assets/parallax/b3.webp'
import b4 from '../../../assets/parallax/b4.webp'
import b5 from '../../../assets/parallax/b5.webp'

export const about = 'graphicnix.com is the leading online hub for all things digital. Our global team of professional editing experts are ready to transform your photos into eye-catching professional images. Simply upload your photos and let our professionals take care of the rest. We offer a wide range of services including, photo editing, virtual staging, floor plan redraws, renders, and virtual renovations. The process is fast, easy-to-use and extremely affordable.'
export const services = [
    {
        id: 'services',
        pageOffset: 1,
        title: ['Product', 'Editing'],
        description: 'Professional jewelry photo retouching attracts potential buyers and presents precious gemstones in the most appealing way. Necklaces, earrings, rings and other jewelry will shine after photoshopping.',
        imageBefore: productBefore,
        imageAfter: productAfter,
        background:b1
    },
    {
        id: 'service1',
        pageOffset: 2,
        title: ['Image', 'Enhancement'],
        description: 'Perfect for real estate photo editing so you can present your listing with top-notch, retouched professional-looking photos.',
        imageBefore: imageEnhancementBefore,
        imageAfter: imageEnhancementAfter,
        process: {
            title: '10 Step Enhancement Process',
            list: ['White Balancing, Sharpening ', 'Remove Minor Blemishes', 'Lens Distortion Removal', 'Brightness Contrast & Tone Adjustment', 'Sky Replacement', 'Lawn Enhancement – Repair or Replace', 'Ocean/River Water Enhancement', 'TV Screen Replacement', 'Flash & Photographer’s Reflection Removal', 'HDR Bracketing with Indoor Window Replacement']
        },
        background:b2
    },
    {
        id: 'service2',
        pageOffset: 3,
        title: ['Virtual', 'Staging'],
        description: 'Our team can add furniture to real estate photography to show potential buyers just how versatile the space is.',
        imageBefore: virtualStagingBefore,
        imageAfter: virtualStagingAfter,
        background:b3
    },
    {
        id: 'service3',
        pageOffset: 4,
        title: ['Day to', 'Dusk'],
        description: 'Dusk is a beautiful time of the day but is notoriously hard to photograph,We can turn any daytime or gloomy sky into a breathtaking sunset to really make your listing stand out from the rest. Our photo retouching service will take your exterior property photo from drab to fab by replacing your sky with a beautiful dusk setting.',
        imageBefore: day2DuskBefore,
        imageAfter: day2DuskAfter,
        process: {
            title: '10 Step Enhancement Process',
            list: []
        },
        background:b4


    },
    {
        id: 'service4',
        pageOffset: 5,
        title: ['Item', 'Removal'],
        description: 'Our photo editing experts can remove unwanted items from your photos.',
        imageBefore: itemRemovalBefore,
        imageAfter: itemRemovalAfter,
        background:b5
    }
]

export const extraServices = [
    {
        id: 'service6',
        pageOffset: 13,
        title: ['Image', 'Renders'],
        description: 'Bring plans to life with our render service available for a range of plans and designs.',
        images: [render1, render2, render3, render4]
    }
]