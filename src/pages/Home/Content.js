import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../assets/styles';

const Content = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.arrivalText}> The driver will arrive in</Text>
            <Text style={styles.timer}>04:22 Mins</Text>
        </View>
    )
}

export default Content;