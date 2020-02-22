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




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min)) + min;

}
const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export class ViewMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: []

        }
        this.handlePress = this.handlePress.bind(this);
    }
        handlePress(e){
            this.setState({
                markers: [
                ... this.state.markers,
            {
                coordinate: e.nativeEvent.coordinate,
                    cost: `$${getRandomInt(50,300)}`

            }
            ]
            })

        }


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
                showsUserLocation={true}
                onPress={this.handlePress}
            >
                {this.state.markers.map((marker, index) => {
                    return <Marker
                            key={index}
                            {...marker} />
                })}

            </MapView>
        );

    }
}

