import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { GOOGLE_MAPS_APIKEY } from '../config';

const Map = () => {
    const [pickupLocation] = useState({ latitude: 10.76517, longitude: 78.70981 });
    const [dropoffLocation] = useState({ latitude: 9.83555, longitude: 78.11083 });
    return (
        <MapView
            style={StyleSheet.absoluteFillObject}
            initialRegion={{
                latitude: (pickupLocation.latitude + dropoffLocation.latitude) / 2,
                longitude: (pickupLocation.longitude + dropoffLocation.longitude) / 2,
                latitudeDelta: 3,
                longitudeDelta: 3,
            }}
        >
            <Marker
                title="Pickup"
                pinColor="blue"
                coordinate={pickupLocation}
            />
            <Marker
                title="Dropoff"
                pinColor="blue"
                coordinate={dropoffLocation}
            />
            <MapViewDirections
                origin={pickupLocation}
                destination={dropoffLocation}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="black"
                mode="DRIVING" // Ensures it's using driving directions
                resetOnChange={false} // Helps with re-render issues
                optimizeWaypoints={true} // Optimizes route if needed
                onError={(errorMessage) => console.log("Direction Error: ", errorMessage)}
            />
        </MapView>
    )
}

export default Map;