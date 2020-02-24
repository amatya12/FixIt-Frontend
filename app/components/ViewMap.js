import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions, Alert, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import RetroMapStyles from '../MapStyles/RetroMapStyles.json';
import { FAB } from 'react-native-paper';
import styles from '../styles/ViewMap.styles';
import { Afterclick } from "../components/Afterclick";


let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 30.5123;
const LONGITUDE = -90.470122;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export class ViewMap extends React.Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      show: false,
    };
    this.toggleDiv = this.toggleDiv.bind(this)
    this.autolocate = this.autolocate.bind(this)

  }
  autolocate = () => {
   this.map.animateToRegion(
     {
       ... this.state.region,
       latitude:30.5123,
       longitude:-90.470122
     }
   )

  }
  picklocationHandler=(event)=>{
    navigator.geolocation.getCurrentPosition(
      position => {
        this.map.animateToRegion(
          {
            ... this.state.region,
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
          }
        )
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, maximumAge: 1000 },
    );
  }
 

  toggleDiv = () => {
    const { show } = this.state;

    this.setState({ show: !show })

  }


  ButtonClickCheckFunction = () => {

    Alert.alert("Button Clicked")

  }


  render() {
    return (
      <View style={styles.map}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.container}
          customMapStyle={RetroMapStyles}
          showsUserLocation={true}
          region={this.state.region}
          zoomEnabled={true}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
          showsMyLocationButton={true}

          onRegionChangeComplete={region => this.setState({ region })}
          ref={ref=>this.map=ref}
        >


          {/* { <MapView.Marker
            coordinate={ this.state.region }
            onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate })}
        /> } */}
        </MapView>

        <FAB
          style={styles.gps}

          icon="map-marker-plus"
          onPress={this.toggleDiv}
        />
        <FAB
          style={styles.compass}

          icon="crosshairs-gps"
          onPress={this.picklocationHandler}
        />



        {this.state.show && <Afterclick />}




        <View style={styles.latlong}>
          <Text>Latitude:: {this.state.region.latitude}</Text>
          <Text>Longitude:: {this.state.region.longitude}</Text>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>


      </View>

    );
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
}






