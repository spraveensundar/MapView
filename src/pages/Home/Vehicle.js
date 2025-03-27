import React from 'react';
import { View, Text, Image } from 'react-native';

import { car } from '../../assets/images';

import styles from '../../assets/styles';

const Vehicle = () => {
    return (
        <View style={styles.vehicleInfo}>
            <View>
                <Text style={styles.vehicleText}>TN-63-1212</Text>
                <Text style={styles.vehicleCar}>Mahindra Xylo</Text>
            </View>
            <Image source={car} style={styles.vehicleImage} />
        </View>
    )
}

export default Vehicle;