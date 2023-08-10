import theme from "../theme/themes"
// backgroundColor:"#F0F0F0",
const pageConfig = {
    'HOME': {
        pageName: "HOME",
        ...theme.themeDark,
        showFullDynamicIsland:true,
        backgroundColor:'transparent'
    },
    'SERVICE-LANDING': {
        ...theme.themeDark,
        pageName: "SERVICES",
        id:"SERVICE-LANDING",
    },
    'SERVICE-1': {
        ...theme.themeDark,
        pageName: "SERVICES",
        id:"SERVICE-1",
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
    'GALLERY':{
        ...theme.themeDark,
        pageName: "GALLERY",
    },
    'ABOUT': {
        ...theme.themeDark,
        pageName: "ABOUT",
    },
    'CONTACT': {
        ...theme.themeDark,
        pageName: "CONTACT",
        showFullDynamicIsland:true,
        backgroundColor:'transparent'
    },
    'SERVICE-PAGE':{
        ...theme.themeLight,
        pageName: "SERVICES",
        // backgroundColor:'#F0F0F0'
    }
}
export default pageConfig;