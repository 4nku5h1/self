import { observeElementById } from "./helper";

const colorConfig = {
    headingLight: '#E3E3E3',
    headingDark: '#111111',
    contentDark: '#5E5E5E',
    borderDark: '#525252',
}

const pageConfigObj = {
    'page-0': {
        backgroundColor: 'rgb(231, 228, 229)',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "HOME",
        // hideFloatingMenu: true,
    },
    'page-1': {
        backgroundColor: '#fff',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "ABOUT",
    },
    'page-2': {
        backgroundColor: '#fff',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'page-3': {
        backgroundColor: 'rgb(25, 25, 25)',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'page-4': {
        backgroundColor: 'rgb(240, 240, 240)',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'page-5': {
        backgroundColor: 'rgb(231, 228, 229)',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'page-6': {
        backgroundColor: '#000',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "SERVICES",
    },
    'page-7': {
        backgroundColor: 'rgb(25, 25, 25)',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
    },
    'page-8': {
        backgroundColor: 'rgb(25, 25, 25)',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.borderDark,
        pageName: "FOOTER",
        hideFloatingMenu: true,
    }
}
export default function registerBackgroundColorEffect(setPageConfig) {
    function changeColor(id) {
        setPageConfig(pageConfigObj[id])
        document.documentElement.style.setProperty('--color-background', pageConfigObj[id].backgroundColor);
        document.documentElement.style.setProperty('--font-color-heading', pageConfigObj[id].headingColor);
        document.documentElement.style.setProperty('--font-color-content', pageConfigObj[id].contentColor);
        document.documentElement.style.setProperty('--button-border', pageConfigObj[id].buttonColor);
    }
    new Array(9).fill(0).map((item, index) => {
        const id = `page-${index}`
        observeElementById(id, changeColor);
        return id;
    })
}