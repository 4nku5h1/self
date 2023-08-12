import theme from "../theme/themes"
// backgroundColor:"#F0F0F0",

const commonConfig = {
    'FOOTER': {
        ...theme.themeDark,
        pageName: "FOOTER",
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
    'SERVICE-OVERVIEW': {
        ...theme.themeDark,
        pageName: "SERVICES",
        id: "SERVICE-OVERVIEW",
    },
    'STATS': {
        ...theme.themeDark,
        pageName: "SERVICES",
        id: "SERVICE-OVERVIEW",
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
        ...theme.themeDark,
        pageName: "SERVICES",
    },
    'SERVICE-1': {
        ...theme.themeDark,
        pageName: "SERVICES",
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
        'SERVICE-DETAILS-SECTION': {
            ...theme.themeLight,
            pageName: "DETAILS-SECTION",
        },
        'SERVICE-DETAILS-CONTENT': {
            ...theme.themeLight,
            pageName: "DETAILS-SECTION",
        },
        'SERVICE-DETAILS-TABLET': {
            ...theme.themeLight,
            pageName: "DETAILS-SECTION",
            backgroundColor: '#F0F0F0'
        }
    },
    'image-enhancement': {
        ...commonConfig,
        'SERVICE-DETAILS-SECTION': {
            ...theme.themeDark,
            pageName: "DETAILS-SECTION",
        },
        'SERVICE-DETAILS-CONTENT': {
            ...theme.themeDark,
            pageName: "DETAILS-SECTION",
        },
        'SERVICE-DETAILS-TABLET': {
            ...theme.themeLight,
            pageName: "DETAILS-SECTION",
            backgroundColor: '#dcd6d3',
        }
    },
    'virtual-staging': {
        ...commonConfig,
        'SERVICE-DETAILS-SECTION': {
            ...theme.themeGray,
            pageName: "DETAILS-SECTION",
        },
        'SERVICE-DETAILS-CONTENT': {
            ...theme.themeLight,
            pageName: "DETAILS-SECTION",
        },
        'SERVICE-DETAILS-TABLET': {
            ...theme.themeLight,
            pageName: "DETAILS-SECTION",
            backgroundColor: '#F0F0F0'
        }
    },
    'day-to-dusk': {
        ...commonConfig,
        'SERVICE-DETAILS-SECTION': {
            ...theme.themeGray,
            pageName: "DETAILS-SECTION",
        },
        'SERVICE-DETAILS-CONTENT': {
            ...theme.themeLight,
            pageName: "DETAILS-SECTION",
        },
        'SERVICE-DETAILS-TABLET': {
            ...theme.themeLight,
            pageName: "DETAILS-SECTION",
            backgroundColor: '#F0F0F0'
        }
    },
    renderAndFloorPlan: {
        ...commonConfig,
        'SERVICE-DETAILS-SECTION': {
            ...theme.themeGray,
            pageName: "DETAILS-SECTION",
        },
        'SERVICE-DETAILS-CONTENT': {
            ...theme.themeLight,
            pageName: "DETAILS-SECTION",
        },
        'SERVICE-DETAILS-TABLET': {
            ...theme.themeLight,
            pageName: "DETAILS-SECTION",
            backgroundColor: '#F0F0F0'
        }
    }
}