import productBefore from '../assets/services/productBefore.jpg'
import productAfter from '../assets/services/productAfter.jpg'

import virtualStagingBefore from '../assets/services/virtualStagingBefore.jpg'
import virtualStagingAfter from '../assets/services/virtualStagingAfter.jpg'

import day2DuskBefore from '../assets/services/day2DuskBefore.jpg'
import day2DuskAfter from '../assets/services/day2DuskAfter.jpg'

import imageEnhancementBefore from '../assets/services/imageEnhancementBefore.jpeg'
import imageEnhancementAfter from '../assets/services/imageEnhancementAfter.jpeg'

import itemRemovalBefore from '../assets/services/itemRemovalBefore.jpg'
import itemRemovalAfter from '../assets/services/itemRemovalAfter.jpg'

import render1 from '../assets/services/render1.jpeg'

// import i1 from '../assets/horizontalgallary/1.webp'
// import i3 from '../assets/horizontalgallary/3.webp'

export const about = 'Graphicnix is the leading online hub for all things digital. Our global team of professional editing experts are ready to transform your photos into eye-catching professional images. Simply upload your photos and let our professionals take care of the rest. The process is fast, easy-to-use and extremely affordable.'
export const services = [
    {
        id: 'services',
        path: 'product-editing',
        title: 'Product Editing',
        description: 'Enhancing product images to make them look more appealing and professional, which can be crucial for e-commerce businesses and marketing campaigns.',
        descriptionOverview: 'Edit Product/ecommerce photos and make them Amazon or catalog-worthy. (e.g: Jewellery, Shoes, Bags, etc.)',
        imageBeforeOverview: productBefore,
        imageAfterOverview: productAfter,
        imageBanner: productAfter

    },
    {
        id: 'service1',
        path: 'image-enhancement',
        title: 'Image Enhancement',
        description: 'Improving the quality and visual appeal of images through various editing techniques, such as color correction, retouching, and cropping.',
        descriptionOverview: 'Sky Replacement, White Balancing, Sharpening, Lens correction, Tone Adjustment, Lawn Enhancement, Flash &  Reflection Removal, etc',
        imageBeforeOverview: imageEnhancementBefore,
        imageAfterOverview: imageEnhancementAfter,
        imageBanner: imageEnhancementAfter,
        additionalData: {
            description: [
                'we offer a diverse range of image enhancement services, from color correction and flawless retouching to perspective correction, background refinement, and dynamic contrast boost.',
                'Our creative filters and effects, specialized object enhancement, HDR imaging, noise reduction, and glamour and beauty retouching cater to diverse needs. Additionally, we provide creative color grading to set the right mood and tone in your visuals.',
                ' At Graphicnix, we are passionate about enhancing photographs to leave a lasting impact on your audience, regardless of your field.'
            ],
            types:{
                description:'We provide a wide array of image enhancement services to suit your specific needs.',
                list: ['White Balancing', 'Sharpening', 'Remove Blemishes', 'Brightness Adjustment', 'Contrast  Adjustment', 'Tone Adjustment', 'Sky Replacement', 'Lawn Enhancement', 'TV Screen Replacement', 'Flash Removal', 'HDR Bracketing', 'Lens Distortion Removal', 'Indoor Window Replacement', 'Ocean/River Water Enhancement', 'Photographer’s Reflection Removal'],

            }
        },

    },
    {
        id: 'service2',
        path: 'virtual-staging',
        title: 'Virtual Staging',
        description: ' Adding virtual furniture and decor to empty spaces, making them more attractive and inviting for potential buyers or renters.',
        descriptionOverview: 'clutter removal, interior and exterior virtual renovation/remodeling',
        imageBeforeOverview: virtualStagingBefore,
        imageAfterOverview: virtualStagingAfter,
        imageBanner: virtualStagingAfter,

    },
    {
        id: 'service3',
        path: 'day-to-dusk',
        title: 'Day to Dusk',
        description: 'Transforming daytime photos into captivating dusk or twilight scenes, adding a different mood and atmosphere to the images.',
        descriptionOverview: 'Sky Replacement, Correct light & shadows',
        imageBeforeOverview: day2DuskBefore,
        imageAfterOverview: day2DuskAfter,
        imageBanner: day2DuskAfter,
        process: {
            title: '10 Step Enhancement Process',
            list: []
        },


    },
    {
        id: 'service4',
        path: 'item-removal',
        title: 'Item Removal',
        description: 'Removing unwanted objects or elements from images to create a clean and polished final result.',
        descriptionOverview: 'Removes unwanted items without leaving any trace of editing.',
        imageBeforeOverview: itemRemovalBefore,
        imageAfterOverview: itemRemovalAfter,
        imageBanner: itemRemovalAfter,

    },
    {
        id: 'service6',
        path: 'reners-and-floor-plan',
        title: 'Renders and Floor Plan',
        description: 'Creating realistic 3D renders of architectural designs and providing floor plans for real estate projects.',
        descriptionOverview: '3D rendering, 2D/3D floor plans and Site plans renders',
        imageBeforeOverview: render1,
        imageAfterOverview: render1,
        imageBanner: render1,
    }
]

export const videoServices = [
    {
        title: 'Video Editing',
        description: 'Editing and arranging video footage to create compelling and engaging videos for various purposes.'
    },
    {
        title: 'VFX',
        description: 'Incorporating computer-generated visual effects into videos or images to achieve stunning and eye-catching results.'
    },
    {
        title: 'Sound-FX',
        description: 'Adding sound effects to videos to enhance the overall audiovisual experience.'
    },
    {
        title: 'Compositing',
        description: 'Combining multiple images or video elements to create a seamless and cohesive final composition.'
    },
    {
        title: 'Motion Graphics',
        description: ' Designing and animating graphic elements to add movement and visual interest to videos or presentations.'
    },
    {
        title: 'Animation',
        description: 'Creating animated sequences or characters to convey messages or tell stories effectively.'
    }
]

const clientNames = ["GOLD MARK", 'Geeky Estate', 'BIMBRA', "IGNITE CREATIVE", 'INTERPRETING', "FOX MORTGAGE", 'RHINO', 'CITI ESTATE', 'NEON TREE', 'GREEN STREET', 'CHOPSTYX', 'ROTNGRX', 'AURA', 'ENLIVEN SENIOR', 'HOUSES MART'];
const clientDescription = "Our dedication to delivering exceptional quality and exceeding expectations has earned us the trust and loyalty of countless individuals, businesses, and creative professionals. From aspiring photographers to established studios, from e-commerce entrepreneurs to advertising agencies, our client list encompasses a diverse range of industries and creative pursuits."
export { clientNames, clientDescription };