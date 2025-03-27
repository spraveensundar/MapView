import React from 'react';
import { View, Text, Image } from 'react-native';

import { cash } from '../../assets/images';

import styles from '../../assets/styles';

const Payment = () => {
    return (
        <View style={styles.payment}>
            <View style={styles.dir}>
                <Text style={styles.sectionTitle}>Payment</Text>
                <Text style={styles.vehicleCar}>Change</Text>
            </View>
            <View style={[styles.dir, styles.cash]}>
                <View style={styles.dir}>
                    <Image source={cash} />
                    <Text>  Cash</Text>
                </View>
                <Text>₹1500</Text>
            </View>
        </View>
    )
}

export default Payment;