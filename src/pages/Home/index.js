import React, { useRef } from "react";
import { Text, StatusBar, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import Map from "../../components/Map";

import Driver from "./Driver";
import Content from "./Content";
import Payment from "./Payment";
import Vehicle from "./Vehicle";
import Location from "./Location";

import styles from "../../assets/styles";

const Home = () => {
    const bottomSheetRef = useRef(null);
    return (
        <GestureHandlerRootView style={styles.container}>
            <StatusBar
                translucent
                barStyle="dark-content"
                backgroundColor="transparent"
            />
            <Map />
            <BottomSheet ref={bottomSheetRef} snapPoints={["25%", "60%"]} >
                <BottomSheetView style={styles.sheetContainer}>
                    <Content />
                    <Vehicle />
                    <Driver />
                    <Location />
                    <Payment />
                    <Pressable style={styles.cancelButton}>
                        <Pressable style={styles.buttonContainer}>
                            <Text style={styles.cancelText}>Cancel Ride</Text>
                        </Pressable>
                    </Pressable>
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

export default Home;