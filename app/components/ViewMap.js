import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from '../styles/ViewMap.styles';


export class ViewMap extends React.Component {

    render() {
        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.container}
                initialRegion={{
                    latitude: 30.460929,
                    longitude: -89.987643,
                    latitudeDelta: 0.51,
                    longitudeDelta: 0.51,
                }}
                showsUserLocation ={true}

            />
        );
    }
}
