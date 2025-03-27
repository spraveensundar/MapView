import React from 'react';
import { View, Text, Image } from 'react-native';

import { dropoff, pickup, share } from '../../assets/images';

import styles from '../../assets/styles';

const Location = () => {
    return (
        <View style={styles.tripDetails}>
            <View style={styles.dir}>
                <Text style={styles.sectionTitle}>Your Trip</Text>
                <Image source={share} style={styles.shareButton} />
            </View>
            <View style={styles.pickUpContainer}>
                <Image source={pickup} />
                <View style={styles.location}>
                    <Text style={styles.head}>Pickup</Text>
                    <Text style={styles.subTitle}>Trichy, Airport</Text>
                </View>
            </View>
            <View style={styles.dropContainer}>
                <Image source={dropoff} />
                <View style={styles.location}>
                    <Text style={styles.head}>Dropoff</Text>
                    <Text style={styles.subTitle}>Madurai, Airport</Text>
                </View>
            </View>
        </View>
    )
}

export default Location;