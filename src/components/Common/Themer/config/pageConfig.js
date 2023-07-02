import theme from "../theme/themes"

const pageConfig = {
    'HOME': {
        pageName: "HOME",
        ...theme.themeLight,
        hideFloatingMenu: true,
    },
    'ABOUT': {
        ...theme.themeLight,
        pageName: "ABOUT",
    },
    'SERVICE-TITLE': {
        ...theme.themeLight,
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
        ...theme.themeDark,
    },
    'FOOTER': {
        ...theme.themeDark,
        pageName: "FOOTER",
        hideFloatingMenu: true,
    }
}
export default pageConfig;