import { observeElementById } from "./helper";

const colorConfig = {
    headingLight: '#E3E3E3',
    headingDark: '#111111',
    contentDark: '#5E5E5E',
    borderDark: '#525252',
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
        backgroundColor: 'rgb(231, 228, 229)',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "HOME",
        // hideFloatingMenu: true,
    },
    'ABOUT': {
        backgroundColor: '#fff',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "ABOUT",
    },
    'SERVICE-TITLE': {
        backgroundColor: '#fff',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'SERVICE-1': {
        backgroundColor: 'rgb(25, 25, 25)',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'SERVICE-2': {
        backgroundColor: 'rgb(240, 240, 240)',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'SERVICE-3': {
        backgroundColor: 'rgb(231, 228, 229)',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'SERVICE-4': {
        backgroundColor: '#000',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'SERVICE-5': {
        backgroundColor: '#000',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
    },
    'SERVICE-RENDER': {
        backgroundColor: '#000',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
    },
    'GRAPHICNIX-ROSE': {
        backgroundColor: '#000',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
    },
    'CLIENTS': {
        backgroundColor: '#fff',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
    },
    'FOOTER': {
        backgroundColor: '#000',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
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
        document.documentElement.style.setProperty('--button-border', pageConfigObj[id].buttonColor);
    }
    pages.map((id) => {
        observeElementById(id, changeColor);
        return id;
    })
}