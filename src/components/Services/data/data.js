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

// import i1 from '../../../assets/horizontalgallary/1.webp'
// import i3 from '../../../assets/horizontalgallary/3.webp'

export const about = 'Graphicnix is the leading online hub for all things digital. Our global team of professional editing experts are ready to transform your photos into eye-catching professional images. Simply upload your photos and let our professionals take care of the rest. We offer a wide range of services including, photo editing, virtual staging, floor plan redraws, renders, and virtual renovations. The process is fast, easy-to-use and extremely affordable.'
export const services = [
    {
        id: 'services',
        title: 'Product Editing',
        description: 'Professional jewelry photo retouching attracts potential buyers and presents precious gemstones in the most appealing way. Necklaces, earrings, rings and other jewelry will shine after photoshopping.',
        descriptionOverview:'Edit Product/ecommerce photos and make them Amazon or catalog-worthy. (e.g: Jewellery, Shoes, Bags, etc.)',
        imageBefore: productBefore,
        imageAfter: productAfter,

    },
    {
        id: 'service1',
        title: 'Image Enhancement',
        description: 'Perfect for real estate photo editing so you can present your listing with top-notch, retouched professional-looking photos.',
        descriptionOverview:'Sky Replacement, White Balancing, Sharpening, Lens correction, Tone Adjustment, Lawn Enhancement, Flash &  Reflection Removal, etc',
        imageBefore: imageEnhancementBefore,
        imageAfter: imageEnhancementAfter,
        process: {
            title: '10 Step Enhancement Process',
            list: ['White Balancing, Sharpening', 'Remove Minor Blemishes', 'Lens Distortion Removal', 'Brightness Contrast & Tone Adjustment', 'Sky Replacement', 'Lawn Enhancement – Repair or Replace', 'Ocean/River Water Enhancement', 'TV Screen Replacement', 'Flash & Photographer’s Reflection Removal', 'HDR Bracketing with Indoor Window Replacement']
        },

    },
    {
        id: 'service2',
        title: 'Virtual Staging',
        description: 'Our team can add furniture to real estate photography to show potential buyers just how versatile the space is.',
        descriptionOverview:'clutter removal, interior and exterior virtual renovation/remodeling',
        imageBefore: virtualStagingBefore,
        imageAfter: virtualStagingAfter,

    },
    {
        id: 'service3',
        title: 'Day to Dusk',
        description: 'Dusk is a beautiful time of the day but is notoriously hard to photograph,We can turn any daytime or gloomy sky into a breathtaking sunset to really make your listing stand out from the rest. Our photo retouching service will take your exterior property photo from drab to fab by replacing your sky with a beautiful dusk setting.',
        descriptionOverview:'Sky Replacement, Correct light & shadows',
        imageBefore: day2DuskBefore,
        imageAfter: day2DuskAfter,
        process: {
            title: '10 Step Enhancement Process',
            list: []
        },


    },
    {
        id: 'service4',
        title: 'Item Removal',
        description: 'Our photo editing experts can remove unwanted items from your photos.',
        descriptionOverview:'Removes unwanted items without leaving any trace of editing.',
        imageBefore: itemRemovalBefore,
        imageAfter: itemRemovalAfter,

    },
    {
        id: 'service6',
        title: 'Renders and Floor Plan',
        description: 'Our talented professionals use their skills and recent technological advancements to produce professional 3D renderings that allow clients to see every part of the interior/Exterior',
        descriptionOverview:'3D rendering, 2D/3D floor plans and Site plans renders',
        imageBefore: render1,
        imageAfter: render1,
    }
]