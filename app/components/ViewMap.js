import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  Alert,
  Text,
  TouchableOpacity
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import RetroMapStyles from "../MapStyles/RetroMapStyles.json";
import { FAB } from "react-native-paper";
import styles from "../styles/ViewMap.styles";

import { Afterclick } from "../components/Afterclick";
import Geocoder from "react-native-geocoding";
import { TouchableOpacityBase } from "react-native";
let { width, height } = Dimensions.get("window");
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
        longitudeDelta: LONGITUDE_DELTA
      },
      show: false
    };
    this.toggleDiv = this.toggleDiv.bind(this);
    this.hide_overlay = this.hide_overlay.bind(this);
    this.autolocate = this.autolocate.bind(this);
    this.switchMapType = this.switchMapType.bind(this);
  }
  autolocate = position => {
    this.map.animateToRegion({
      ...this.state.region,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  };
  picklocationHandler = event => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.map.animateToRegion({
          ...this.state.region,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, maximumAge: 1000 }
    );
  };

  toggleDiv = () => {
    this.setState({ show: true });
  };
  hide_overlay() {
    this.setState({ show: false });
  }

  ButtonClickCheckFunction = () => {
    Alert.alert("Button Clicked");
  };
  switchMapType = () => {
    console.log("changing");
    this.setState({
      mapType: this.state.mapType === "satellite" ? "standard" : "satellite"
    });
  };

  render() {
    return (
      <View style={styles.map}>
        <MapView
          ref={map => (this.map = map)}
          style={styles.container}
          customMapStyle={RetroMapStyles}
          // mapType={"hybrid"}

          showsUserLocation={true}
          region={this.state.region}
          zoomEnabled={true}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
          //showsMyLocationButton={true}

          onRegionChangeComplete={region => this.setState({ region })}
        >
          {/* {
            <MapView.Marker
              coordinate={this.state.region}
              onDragEnd={e =>
                this.setState({ region: e.nativeEvent.coordinate })
              }
            />
          } */}
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

        {this.state.show && (
          <Afterclick
            dataFromParent={this.state.region.latitude}
            dataFromP={this.state.region.longitude}
            hideOverlay={this.hide_overlay}
          />
        )}

        <View style={styles.latlong}>
          <Text>Latitude:: {this.state.region.latitude}</Text>
          <Text>Longitude:: {this.state.region.longitude}</Text>
          {/* <TouchableOpacity
            onPress={() => {
              this.getData();
            }}
          >
            <Text>Address</Text>
          </TouchableOpacity> */}

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
            longitudeDelta: LONGITUDE_DELTA
          }
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }
      });
    });
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
}
