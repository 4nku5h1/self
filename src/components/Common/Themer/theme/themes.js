const colorConfig = {
    headingLight: '#E3E3E3',
    headingDark: '#111111',
    contentDark: '#5E5E5E',
    borderDark: '#525252',
    borderLight: '#e4d6d6',
    buttonLight: '#E3E3E3',
    buttonDark: '#5E5E5E',
    accentColor:'#00948C',
}
const theme = {
    themeLight : {
        backgroundColor: '#fff',
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonDark,
        borderColor: colorConfig.borderLight,
        accentColor: colorConfig.accentColor
    },
    themeGray : {
        backgroundColor: '#0d0d0d',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonLight,
        borderColor: colorConfig.borderDark,
        accentColor: colorConfig.accentColor
    },
    themeDark : {
        backgroundColor: '#000',
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonLight,
        borderColor: colorConfig.borderDark,
        accentColor: colorConfig.accentColor
    }

}
export default theme;