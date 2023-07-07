import theme from "../theme/themes"
// backgroundColor:"#F0F0F0",
const pageConfig = {
    'HOME': {
        pageName: "HOME",
        ...theme.themeLight,
    },
    'SERVICE-LANDING': {
        ...theme.themeDark,
        pageName: "SERVICES",
        id:"SERVICE-LANDING"
    },
    'SERVICE-1': {
        ...theme.themeDark,
        pageName: "SERVICES",
        id:"SERVICE-1"
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
        ...theme.themeDark,
        pageName: "SERVICES",
    },
    'ABOUT': {
        ...theme.themeDark,
    },
    'CLIENTS': {
        ...theme.themeGray,
    },
    'FOOTER': {
        ...theme.themeGray,
        pageName: "FOOTER",
        hideFloatingMenu: true,
    }
}
export default pageConfig;