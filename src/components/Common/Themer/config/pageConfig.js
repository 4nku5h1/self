import theme from "../theme/themes"

const pageConfig = {
    'HOME': {
        pageName: "HOME",
        ...theme.themeLight,
    },
    'ABOUT': {
        ...theme.themeLight,
        pageName: "ABOUT",
    },
    'SERVICE-TITLE': {
        ...theme.themeLight,
        backgroundColor:"#F0F0F0",
        pageName: "SERVICES",
        id:"SERVICE-TITLE"
    },
    'SERVICE-1': {
        ...theme.themeLight,
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
    'GRAPHICNIX-ROSE': {
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