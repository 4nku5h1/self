const colorConfig = {
    headingLight: '#E3E3E3',
    headingDark: '#111111',
    contentDark: '#5E5E5E',
    contentLight:'#999999',
    borderDark: '#525252',
    borderLight: '#e4d6d6',
    buttonLight: '#E3E3E3',
    buttonDark: '#5E5E5E',
    accentColor: '#00948C',
    gray: '#101010',
    white: '#fff',
    black: '#000'
}
const theme = {
    themeLight: {
        backgroundColor: colorConfig.white,
        foregroundColor: colorConfig.black,
        headingColor: colorConfig.headingDark,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonDark,
        borderColor: colorConfig.borderLight,
        accentColor: colorConfig.accentColor,
    },
    themeGray: {
        backgroundColor: colorConfig.gray,
        foregroundColor: colorConfig.black,
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentDark,
        buttonColor: colorConfig.buttonLight,
        borderColor: colorConfig.borderDark,
        accentColor: colorConfig.accentColor
    },
    themeDark: {
        backgroundColor: colorConfig.black,
        foregroundColor: colorConfig.gray,
        headingColor: colorConfig.headingLight,
        contentColor: colorConfig.contentLight,
        buttonColor: colorConfig.buttonLight,
        borderColor: colorConfig.borderDark,
        accentColor: colorConfig.accentColor
    }

}
export default theme;