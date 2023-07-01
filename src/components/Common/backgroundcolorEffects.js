import { observeElementById } from "./helper";

const colorConfig = {
    headingLight: '#E3E3E3',
    headingDark: '#111111',
    contentDark: '#5E5E5E',
    borderDark: '#525252',
    borderLight: '#e4d6d6',
    buttonLight: '#E3E3E3',
    buttonDark: '#5E5E5E',
}
export const serviceIds = [
    'SERVICE-1',
    'SERVICE-2',
    'SERVICE-3',
    'SERVICE-4',
    'SERVICE-5',
]
const pages = [
    'HOME',
    'ABOUT',
    'SERVICE-TITLE',
    ...serviceIds,
    'SERVICE-RENDER',
    'GRAPHICNIX-ROSE',
    'CLIENTS',
    'FOOTER'
]

const theme = {
    themeLight : {
        backgroundColor: '#fff',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonDark,
        borderColor: colorConfig.borderLight,
    },
    themeGray : {
        backgroundColor: '#0d0d0d',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonLight,
        borderColor: colorConfig.borderDark,
    },
    themeDark : {
        backgroundColor: '#000',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonLight,
        borderColor: colorConfig.borderDark,
    }

}
const pageConfigObj = {
    'HOME': {
        pageName: "HOME",
    },
    'ABOUT': {
        ...theme.themeLight,
        pageName: "ABOUT",
    },
    'SERVICE-TITLE': {
        ...theme.themeLight,
        pageName: "SERVICES",
    },
    'SERVICE-1': {
        ...theme.themeLight,
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
    'SERVICE-RENDER': {
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
export default function registerBackgroundColorEffect(setPageConfig) {
    function changeColor(id) {
        console.log(id)
        setPageConfig(pageConfigObj[id])
        document.documentElement.style.setProperty('--color-background', pageConfigObj[id].backgroundColor);
        document.documentElement.style.setProperty('--font-color-heading', pageConfigObj[id].headingColor);
        document.documentElement.style.setProperty('--font-color-content', pageConfigObj[id].contentColor);
        document.documentElement.style.setProperty('--button-border', pageConfigObj[id].borderColor);
        document.documentElement.style.setProperty('--button-color', pageConfigObj[id].buttonColor);
    }
    pages.map((id) => {
        observeElementById(id, changeColor);
        return id;
    })
}