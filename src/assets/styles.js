import { StyleSheet } from "react-native";

import { colors, fontScale, size } from "../helpers/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sheetContainer: {
        padding: size.xxx_small
    },
    arrivalText: {
        fontSize: fontScale(21),
        fontWeight: "700"
    },
    call: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cash: {
        paddingTop: size.small,
        paddingBottom: size.xxbig
    },
    rate: {
        backgroundColor: colors.white,
        paddingVertical: size.x_tiny,
        paddingHorizontal: size.xx_tiny,
        borderRadius: size.xxx_small
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: size.xx_tiny
    },
    timer: {
        backgroundColor: colors.smokyBlack,
        color: "white",
        fontSize: fontScale(14),
        padding: size.tiny,
        paddingHorizontal: size.xx_tiny,
        borderRadius: size.xx_tiny,
        fontWeight: "500"
    },
    picker: {
        position: "absolute",
        left: 12,
        top: size.x_big
    },
    vehicleInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: size.xx_tiny,
        padding: size.normal,
        borderRadius: size.xx_tiny,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
    vehicleText: {
        fontSize: fontScale(16)
    },
    vehicleCar: {
        paddingTop: size.five,
        color: colors.greyGreen
    },
    vehicleImage: {
        width: size.xx_big,
        height: size.big
    },
    driverInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: size.xxx_small,
        borderBottomWidth: 1,
        borderColor: colors.dark
    },
    driverImage: {
        width: size.xx_big,
        height: size.xx_big,
        borderRadius: 100,
        marginRight: size.xx_tiny
    },
    driverName: {
        fontSize: fontScale(18)
    },
    driverRating: {
        color: "gray",
        marginTop: size.five
    },
    callButton: {
        width: size.xxxx_medium,
        height: size.xxxx_medium
    },
    chatButton: {
        width: size.xxxx_medium,
        height: size.xxxx_medium,
        marginLeft: size.xx_tiny
    },
    tripDetails: {
        marginTop: size.small,
        borderBottomWidth: 1,
        borderColor: colors.dark
    },
    sectionTitle: {
        fontSize: fontScale(18)
    },
    payment: {
        marginVertical: 10,
    },
    cancelButton: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
    },
    buttonContainer: {
        padding: size.xxx_small,
        backgroundColor: colors.red,
        borderRadius: size.small
    },
    cancelText: {
        color: colors.white,
        fontSize: fontScale(16),
        textAlign: "center"
    },
    shareButton: {
        width: size.xx_normal,
        height: size.xx_normal
    },
    dir: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dropContainer: {
        flexDirection: "row",
        paddingVertical: size.xx_tiny,
        paddingBottom: size.small
    },
    head: {
        fontSize: fontScale(11),
        color: colors.somke
    },
    subTitle: {
        fontSize: fontScale(16)
    },
    pickUpContainer: {
        flexDirection: "row",
        paddingVertical: size.xx_tiny
    },
    location: {
        paddingLeft: size.xx_tiny
    }
})

export default styles;