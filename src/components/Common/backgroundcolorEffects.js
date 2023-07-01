import { observeElementById } from "./helper";

const colorConfig = {
    headingLight: '#E3E3E3',
    headingDark: '#111111',
    contentDark: '#5E5E5E',
    borderDark: '#525252',
    borderLight:'#e4d6d6',
    buttonLight: '#E3E3E3',
    buttonDark:'#5E5E5E',
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
const pageConfigObj = {
    'HOME': {
        backgroundColor: '#fff',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonDark,
        borderColor: colorConfig.borderLight,
        pageName: "HOME",
        // hideFloatingMenu: true,
    },
    'ABOUT': {
        backgroundColor: '#fff',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonDark,
        borderColor: colorConfig.borderLight,
        pageName: "ABOUT",
    },
    'SERVICE-TITLE': {
        backgroundColor: '#fff',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        borderColor: colorConfig.borderLight,
        pageName: "SERVICES",
    },
    'SERVICE-1': {
        backgroundColor: 'rgb(240, 240, 240)',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        borderColor: colorConfig.borderLight,
        pageName: "SERVICES",
    },
    'SERVICE-2': {
        backgroundColor: '#0d0d0d',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonLight,
        borderColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'SERVICE-3': {
        backgroundColor: '#0d0d0d',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonLight,
        borderColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'SERVICE-4': {
        backgroundColor: 'rgb(240, 240, 240)',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonDark,
        borderColor: colorConfig.borderLight,
        pageName: "SERVICES",
    },
    'SERVICE-5': {
        backgroundColor: 'rgb(240, 240, 240)',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonDark,
        borderColor: colorConfig.borderLight,
        pageName: "SERVICES",
    },
    'SERVICE-RENDER': {
        backgroundColor: '#000',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonLight,
        borderColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'GRAPHICNIX-ROSE': {
        backgroundColor: '#000',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonLight,
        borderColor: colorConfig.borderDark,
    },
    'CLIENTS': {
        backgroundColor: '#fff',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonLight,
        borderColor: colorConfig.borderDark,
    },
    'FOOTER': {
        backgroundColor: '#000',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonDark,
        borderColor: colorConfig.borderDark,
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