import theme from "../theme/themes"
// backgroundColor:"#F0F0F0",

const commonConfig = {
    'FOOTER': {
        ...theme.themeDark,
        pageName: "CONTACT",
        showFullDynamicIsland: true,
        backgroundColor: 'transparent'
    },
}

// for '/'
export const homeConfig = {
    ...commonConfig,
    'HOME': {
        pageName: "HOME",
        ...theme.themeDark,
        showFullDynamicIsland: true,
        backgroundColor: 'transparent'
    },
    'SERVICE-IMAGE-EDITING': {
        ...theme.themeGray,
        pageName: "SERVICES",
        id: "SERVICE-OVERVIEW",
    },
    'SERVICE-VIDEO-EDITING': {
        ...theme.themeLight,
        pageName: "SERVICES",
        id: "SERVICE-OVERVIEW",
        backgroundColor: '#F0F0F0'
    },
    'GALLERY': {
        ...theme.themeDark,
        pageName: "GALLERY",
    },
    'ABOUT': {
        ...theme.themeDark,
        pageName: "ABOUT",
    },
}

// for '/services'
export const servicesConfig = {
    ...commonConfig,
    'SERVICE-OVERVIEW': {
        ...theme.themeLight,
        pageName: "SERVICES",
        showFullDynamicIsland: true,
    },
    'SERVICE-1': {
        ...theme.themeLight,
        pageName: "SERVICES",
        backgroundColor: '#F0F0F0'
    },
    'SERVICE-2': {
        ...theme.themeGray,
        pageName: "SERVICES",
    },
    'SERVICE-3': {
        ...theme.themeGray,
        pageName: "SERVICES",
    },
    'SERVICE-4': {
        ...theme.themeLight,
        pageName: "SERVICES",
    },
    'SERVICE-5': {
        ...theme.themeLight,
        pageName: "SERVICES",
    },
    'SERVICE-6': {
        ...theme.themeGray,
        pageName: "SERVICES",
    },
    'ABOUT': {
        ...theme.themeDark,
        pageName: "ABOUT",
    },
}

export const serviceDetailsConfig = {
    'product-editing': {
        ...commonConfig,
        'SERVICE-DETAILS-BANNER': {
            ...theme.themeDark,
            pageName: "Product Editing",
            showFullDynamicIsland: true,
        },
        'SERVICE-DETAILS-SECTION': {
            ...theme.themeLight,
            pageName: "Product Editing",
        },
        'SERVICE-DETAILS-CONTENT': {
            ...theme.themeLight,
            pageName: "Product Editing",
        },
        'SERVICE-DETAILS-TABLET': {
            ...theme.themeLight,
            pageName: "Product Editing",
            backgroundColor: '#F0F0F0'
        }
    },
    'image-enhancement': {
        ...commonConfig,
        'SERVICE-DETAILS-BANNER': {
            ...theme.themeDark,
            pageName: "Image Enhancement",
            showFullDynamicIsland: true,
        },
        'SERVICE-DETAILS-SECTION': {
            ...theme.themeDark,
            pageName: "Image Enhancement",
        },
        'SERVICE-DETAILS-CONTENT': {
            ...theme.themeDark,
            pageName: "Image Enhancement",
        },
        'SERVICE-DETAILS-TABLET': {
            ...theme.themeLight,
            pageName: "Image Enhancement",
            backgroundColor: '#dcd6d3',
        }
    },
    'virtual-staging': {
        ...commonConfig,
        'SERVICE-DETAILS-BANNER': {
            ...theme.themeDark,
            pageName: "Virtual Staging",
            showFullDynamicIsland: true,
        },
        'SERVICE-DETAILS-SECTION': {
            ...theme.themeGray,
            pageName: "Virtual Staging",
        },
        'SERVICE-DETAILS-CONTENT': {
            ...theme.themeLight,
            pageName: "Virtual Staging",
        },
        'SERVICE-DETAILS-TABLET': {
            ...theme.themeLight,
            pageName: "Virtual Staging",
            backgroundColor: '#F0F0F0'
        }
    },
    'day-to-dusk': {
        ...commonConfig,
        'SERVICE-DETAILS-BANNER': {
            ...theme.themeGray,
            pageName: "Day to Dusk",
            showFullDynamicIsland: true,
        },
        'SERVICE-DETAILS-SECTION': {
            ...theme.themeGray,
            pageName: "Day to Dusk",
        },
        'SERVICE-DETAILS-CONTENT': {
            ...theme.themeLight,
            pageName: "Day to Dusk",
        },
        'SERVICE-DETAILS-TABLET': {
            ...theme.themeLight,
            pageName: "Day to Dusk",
            backgroundColor: '#F0F0F0'
        }
    },
    'item-removal': {
        ...commonConfig,
        'SERVICE-DETAILS-BANNER': {
            ...theme.themeGray,
            pageName: "Item Removal",
            showFullDynamicIsland: true,
        },
        'SERVICE-DETAILS-SECTION': {
            ...theme.themeGray,
            pageName: "Item Removal",
        },
        'SERVICE-DETAILS-CONTENT': {
            ...theme.themeGray,
            pageName: "Item Removal",
        },
        'SERVICE-DETAILS-TABLET': {
            ...theme.themeLight,
            pageName: "Item Removal",
            backgroundColor: '#F0F0F0'
        }
    },
    'reners-and-floor-plan': {
        ...commonConfig,
        'SERVICE-DETAILS-BANNER': {
            ...theme.themeLight,
            pageName: "Renders",
            showFullDynamicIsland: true,
        },
        'SERVICE-DETAILS-SECTION': {
            ...theme.themeLight,
            pageName: "Renders",
        },
        'SERVICE-DETAILS-CONTENT': {
            ...theme.themeLight,
            pageName: "Renders",
        },
        'SERVICE-DETAILS-TABLET': {
            ...theme.themeLight,
            pageName: "Renders",
            backgroundColor: '#F0F0F0'
        }
    }
}