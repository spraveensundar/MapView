import React from 'react';
import { View, Text, Image } from 'react-native';

import { size } from '../../helpers/variables';
import { call, driver, message } from '../../assets/images';

import styles from '../../assets/styles';

const Driver = () => {
    return (
        <View style={styles.driverInfo}>
            <View style={{ flexDirection: "row" }}>
                <Image source={driver} style={styles.driverImage} resizeMode="cover" />
                <View style={{ marginTop: size.xx_tiny }}>
                    <Text style={styles.driverName}>Jakop Herwiks</Text>
                    <Text style={styles.driverRating}>Top Rated Driver</Text>
                </View>
                <View style={styles.picker}>
                    <Text style={styles.rate}>⭐ 4.5</Text>
                </View>
            </View>
            <View style={styles.call}>
                <Image source={call} style={styles.callButton} />
                <Image source={message} style={styles.chatButton} />
            </View>
        </View>
    )
}

export default Driver;