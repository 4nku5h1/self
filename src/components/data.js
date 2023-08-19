// Product
import productBefore from '../assets/services/productBefore.jpg'
import productAfter from '../assets/services/productAfter.jpg'
import productBanner from '../assets/services/product/banner.jpg'
import productImage1 from '../assets/services/product/image1.jpg'

// Image Enhancement
import imageEnhancementBefore from '../assets/services/imageEnhancementBefore.jpeg'
import imageEnhancementAfter from '../assets/services/imageEnhancementAfter.jpeg'
import enhancementBanner from '../assets/services/enhancement/banner.jpg'
import enhancementImage1 from '../assets/services/enhancement/image1.jpg'

// Virtual Staging
import virtualStagingBefore from '../assets/services/virtualStagingBefore.jpg'
import virtualStagingAfter from '../assets/services/virtualStagingAfter.jpg'
import stagingBanner from '../assets/services/staging/banner.jpg'
import stagingImage1 from '../assets/services/staging/image1.jpg'

// Day to dusk
import day2DuskBefore from '../assets/services/day2DuskBefore.jpg'
import day2DuskAfter from '../assets/services/day2DuskAfter.jpg'
import duskBanner from '../assets/services/d2d/banner.jpg'
import duskImage1 from '../assets/services/d2d/image1.jpg'

// Item Removal
import itemRemovalBefore from '../assets/services/itemRemovalBefore.jpg'
import itemRemovalAfter from '../assets/services/itemRemovalAfter.jpg'
import itemRemovalBanner from '../assets/services/itemRemoval/banner.jpg'
import itemRemovalImage1 from '../assets/background/rose.webp'

// Rendering
import render1 from '../assets/services/render1.jpeg'
import renderingBanner from '../assets/services/rendering/banner.jpg'
import renderingImage1 from '../assets/services/rendering/image1.jpg'

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
        additionalData: {
            banner:productBanner, 
            images:[productImage1],
            description: [
                'Transforming products into visual perfection is our specialty at Graphicnix. Our expert product editing services are designed to make your offerings stand out in a crowded marketplace.',
                'From enhancing details to ensuring accurate colors, we meticulously refine your product images, resulting in visuals that captivate and convert.',
                ' Let us elevate your products to the next level and leave a lasting impression on your customers.'
            ],
            types: {
                description: 'We offer an extensive range of product editing services tailored to meet your specific requirements. Our expertise extends to assisting with over 500+ products, ensuring that each one receives meticulous attention.',
                list: [
                    'Color Correction',
                    'Color Variants',
                    'Reflection Addition',
                    'Packaging Mockups',
                    'Background Removal',
                    'Shadow Addition',
                    'Product Retouching',
                    'Logo Application',
                    'Background Replacement',
                    'Image Cropping & Resizing',
                    '360-Degree View Creation',
                    'Composite Product Images',
                ],

            }
        },

    },
    {
        id: 'service1',
        path: 'image-enhancement',
        title: 'Image Enhancement',
        description: 'Improving the quality and visual appeal of images through various editing techniques, such as color correction, retouching, and cropping.',
        descriptionOverview: 'Sky Replacement, White Balancing, Sharpening, Lens correction, Tone Adjustment, Lawn Enhancement, Flash &  Reflection Removal, etc',
        imageBeforeOverview: imageEnhancementBefore,
        imageAfterOverview: imageEnhancementAfter,
        additionalData: {
            banner:enhancementBanner, 
            images:[enhancementImage1],
            description: [
                'We offer a diverse range of image enhancement services, from color correction and flawless retouching to perspective correction, background refinement, and dynamic contrast boost.',
                'Our creative filters and effects, specialized object enhancement, HDR imaging, noise reduction, and glamour and beauty retouching cater to diverse needs. Additionally, we provide creative color grading to set the right mood and tone in your visuals.',
                'At Graphicnix, we are passionate about enhancing photographs to leave a lasting impact on your audience, regardless of your field.'
            ],
            types: {
                description: 'Welcome to Graphicnix, your comprehensive creative partner. We are here to elevate your visuals across a wide spectrum of services that cater to every need.',
                list: [
                    'White Balancing',
                    'Sharpening',
                    'Remove Blemishes',
                    'Brightness Adjustment',
                    'Contrast  Adjustment',
                    'Tone Adjustment',
                    'Sky Replacement',
                    'Lawn Enhancement',
                    'TV Screen Replacement',
                    'Flash Removal',
                    'HDR Bracketing',
                    'Lens Distortion Removal',
                    'Indoor Window Replacement',
                    'Ocean/River Water Enhancement',
                    'Photographer’s Reflection Removal'
                ],

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
        additionalData: {
            banner:stagingBanner, 
            images:[stagingImage1],
            description: [
                'Transform empty spaces into captivating, furnished environments with our virtual staging expertise at Graphicnix',
                'Our virtual staging services are designed to showcase the potential of properties, whether for real estate listings, interior design concepts, or architectural presentations.',
                ' By adding virtual furniture, decor, and ambiance, we help clients envision the possibilities, making properties more enticing and engaging for potential buyers or tenants. Let us bring your spaces to life and create a visual narrative that resonates.'
            ],
            types: {
                description: 'We provide a wide array of virtual staging services to suit your specific needs.',
                list: [
                    "Residential Staging",
                    "Commercial Staging",
                    "Interior Concepts",
                    "Home Staging for Sale",
                    "Outdoor Space Staging",
                    "Aesthetic Theme Staging",
                    "Home Flipping Presentation",
                    "Rental Property Marketing",
                    "Architectural Visualization",
                    "Vacant Property Enhancement",
                    "Custom Furniture Arrangements",
                    "Virtual Renovation Visualization",
                ],

            }
        },

    },
    {
        id: 'service3',
        path: 'day-to-dusk',
        title: 'Day to Dusk',
        description: 'Transforming daytime photos into captivating dusk or twilight scenes, adding a different mood and atmosphere to the images.',
        descriptionOverview: 'Sky Replacement, Correct light & shadows',
        imageBeforeOverview: day2DuskBefore,
        imageAfterOverview: day2DuskAfter,
        additionalData: {
            banner:duskBanner, 
            images:[duskImage1],
            description: [
                'Transform the mood of your property images from day to enchanting dusk with our Day to Dusk service at Graphicnix. ',
                'We specialize in enhancing the ambiance of your visuals, making them radiate warmth and allure',
                ' By seamlessly transitioning your daytime shots into mesmerizing twilight scenes, we create a captivating atmosphere that leaves a lasting impression on viewers.',
                ' Let us add a touch of magic to your property images and evoke emotions that resonate.'
            ],
            types: {
                description: 'We provide a wide array of day to dusk services to suit your specific needs.',
                list: [
                    "Residential Real Estate",
                    "Commercial Properties",
                    "Outdoor Landscapes",
                    "Hospitality Industry",
                    "Event Venues",
                    "Real Estate Listings",
                    "Outdoor Amenities",
                    "Architectural Visualization",
                    "Interior-Exterior Balance"
                ],

            }
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
        additionalData: {
            banner:itemRemovalBanner, 
            images:[itemRemovalImage1],
            description: [
                'At Graphicnix, we specialize in perfecting visual narratives by seamlessly removing unwanted elements from your images.',
                'Our Item Removal service is designed to create clean, clutter-free compositions that highlight your subject. Whether it is removing distracting objects or enhancing the overall aesthetics, we ensure your images convey a clear and captivating message.',
                'Let us craft images that make an impact and leave a lasting impression.'
            ],
            types: {
                description: 'We provide a wide array of item removal services to suit your specific needs.',
                list: [
                    "Background Cleanup",
                    "Object Erasure",
                    "Blemish  Removal",
                    "Imperfection Removal",
                    "Logo Removal",
                    "Watermark Removal",
                    "Crowds Removal",
                    "Wires  Removal",
                    "Vehicle Removal",
                    "Unwanted Text Removal",
                    "Graphics Removal",
                    "Complex Object Removal",
                    "Glare Removal",
                    "Reflection Removal",
                    "Distraction Removal"
                ],

            }
        },

    },
    {
        id: 'service6',
        path: 'reners-and-floor-plan',
        title: 'Renders and Floor Plan',
        description: 'Creating realistic 3D renders of architectural designs and providing floor plans for real estate projects.',
        descriptionOverview: '3D rendering, 2D/3D floor plans and Site plans renders',
        imageBeforeOverview: render1,
        imageAfterOverview: render1,
        additionalData: {
            banner:renderingBanner, 
            images:[renderingImage1],
            description: [
                'At Graphicnix, we excel in creating clean and uncluttered visual narratives through our Renders and Floor Plan Enhancement service.',
                'Our expertise lies in removing unwanted elements and refining floor plans to convey a clear and inviting representation of spaces. ',
                'Whether it is decluttering interior renders or optimizing architectural floor plans, we ensure your visuals tell a compelling story. Let us transform your renders and floor plans into polished masterpieces that captivate and impress.',
            ],
            types: {
                description: 'We provide a wide array of rendering services to suit your specific needs.',
                list: [
                    "Interior Design",
                    "Outdoor Design",
                    "Architectural Render",
                    "Interior Ambiance Creation",
                    "Real Estate Presentation",
                    "Event Venue Marketing",
                    "Architectural Enhancement",
                    "Outdoor Venue Enhancement",
                    "Nature and Landscape",
                ],

            }
        },
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