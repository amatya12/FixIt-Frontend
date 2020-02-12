import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, AnimatedRegion} from 'react-native-maps';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';
import styles from '../styles/ViewMap.styles';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export class ViewMap extends React.Component {

    render() {
        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.container}
                initialRegion={{
                    latitude: 30.460929,
                    longitude: -89.987643,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
                showsUserLocation ={true}
            >

            </MapView>
        );
    }
}
