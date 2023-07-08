import theme from "../theme/themes"
// backgroundColor:"#F0F0F0",
const pageConfig = {
    'HOME': {
        pageName: "HOME",
        ...theme.themeGray,
    },
    'SERVICE-LANDING': {
        ...theme.themeDark,
        pageName: "SERVICES",
        id:"SERVICE-LANDING",
        hideFloatingMenu: true,
    },
    'SERVICE-1': {
        ...theme.themeDark,
        pageName: "SERVICES",
        id:"SERVICE-1",
        hideFloatingMenu: true,
    },
    'SERVICE-2': {
        ...theme.themeGray,
        pageName: "SERVICES",
        hideFloatingMenu: true,
    },
    'SERVICE-3': {
        ...theme.themeGray,
        pageName: "SERVICES",
        hideFloatingMenu: true,
    },
    'SERVICE-4': {
        ...theme.themeLight,
        pageName: "SERVICES",
        hideFloatingMenu: true,
    },
    'SERVICE-5': {
        ...theme.themeLight,
        pageName: "SERVICES",
        hideFloatingMenu: true,
    },
    'SERVICE-6': {
        ...theme.themeDark,
        pageName: "SERVICES",
        hideFloatingMenu: true,
    },
    'ABOUT': {
        ...theme.themeDark,
        pageName: "ABOUT",
        hideFloatingMenu: true,
    },
    'CLIENTS': {
        ...theme.themeGray,
        pageName: "CLIENTS",
        hideFloatingMenu: true,
    },
    'FOOTER': {
        ...theme.themeGray,
        pageName: "FOOTER",
        hideFloatingMenu: false,
    }
}
export default pageConfig;