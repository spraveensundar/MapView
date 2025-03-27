import { Dimensions, PixelRatio, Platform } from "react-native";

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const normalize = (size) => {
    const scale = screenWidth / 390;
    const newSize = size * scale;
    if (Platform.OS == 'ios') return Math.round(PixelRatio.roundToNearestPixel(newSize));
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) + 1;
}

export const fontScale = (size) => {
    return size / PixelRatio.getFontScale();
}

export const size = {
    xxx_large: normalize(300),
    xx_large: normalize(250),
    xlarge: normalize(200),
    large: normalize(150),
    xxxxx_big: normalize(140),
    xxxx_big: normalize(120),
    xxx_big: normalize(60),
    xbig: normalize(88),
    xx_big: normalize(80),
    xxbig: normalize(58),
    x_big: normalize(55),
    big: normalize(50),
    xxxxx_medium: normalize(45),
    xxxx_medium: normalize(40),
    xxx_medium: normalize(38),
    xx_medium: normalize(36),
    x_medium: normalize(34),
    medium: normalize(32),
    xx_normal: normalize(30),
    x_normal: normalize(28),
    normal: normalize(26),
    regular: normalize(24),
    xxxx_small: normalize(22),
    xxx_small: normalize(20),
    xx_small: normalize(18),
    x_small: normalize(16),
    small: normalize(15),
    xxxx_tiny: normalize(14),
    xxx_tiny: normalize(12),
    xx_tiny: normalize(10),
    x_tiny: normalize(8),
    tiny: normalize(6),
    five: normalize(5),
    four: normalize(4),
    two: normalize(2)
}

export const colors = {
    white: "#FFFFFF",
    black: "#000000",
    oil: "#1A1A1A",
    greyGreen: "#729F84",
    blue: "#2689E6",
    orange: "#E97F50",
    smokyBlack: "#121212",
    red: "#FF5757",
    squash: "#FFAE27",
    dark: "#ECECEC",
    somke: "#888888"
}