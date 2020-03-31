import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  Alert,
  Text,
  Animated,
  Image,
  TouchableOpacity
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import RetroMapStyles from "../MapStyles/RetroMapStyles.json";
import { FAB, Appbar, Card, Button } from "react-native-paper";
import styles from "../styles/ViewMap.styles";
import ActionButton from "react-native-action-button";
import { Afterclick } from "../components/Afterclick";
import Icon from "react-native-vector-icons/Ionicons";

import ajax from "../ajax";

let { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 30.508067876956304;

const LONGITUDE = -90.47499272972345;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export class ViewMap extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [
        // {
        //   coordinate: {
        //     latitude: 45.524548,
        //     longitude: -122.6749817
        //   }
        // },
        // {
        //   coordinate: {
        //     latitude: 45.524698,
        //     longitude: -122.6655507
        //   }
        // }
      ],
      userLocation: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      initialRegion: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      mapType: "satellite",
      show: false,
      isloaded: true
    };
    this.toggleDiv = this.toggleDiv.bind(this);
    this.hide_overlay = this.hide_overlay.bind(this);
    // this.autolocate = this.autolocate.bind(this);
    this.switchMapType = this.switchMapType.bind(this);
    this.switchToSatellite = this.switchToSatellite.bind(this);

    this.switchToStandard = this.switchToStandard.bind(this);
    this.showmarker = this.showmarker.bind(this);
    this.fetchCoordinates = this.fetchCoordinates.bind(this);
    // this.onMapReady = this.onMapReady.bind(this);
  }
  async fetchCoordinates() {
    const damages = await ajax.fetchDamages();
    this.setState({ markers: damages.data });
  }
  // autolocate = position => {
  //   this.map.animateToRegion({
  //     ...this.state.region,
  //     latitude: position.coords.latitude,
  //     longitude: position.coords.longitude
  //   });
  // };

  picklocationHandler = (event) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.map.animateToRegion({
          ...this.state.userLocation,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, maximumAge: 1000 }
    );
  };

  toggleDiv = () => {
    this.map.showsCompass = false;
    const { show } = this.state;

    this.setState({ show: !show });
  };
  async showmarker() {
    this.fetchCoordinates();
    const { isloaded } = this.state;
    this.setState({ isloaded: !isloaded });
  }
  hide_overlay() {
    this.setState({ show: false });
  }

  ButtonClickCheckFunction = () => {
    Alert.alert("Button Clicked");
  };
  switchMapType = () => {
    console.log("changing");
    this.setState({
      mapType: this.state.mapType === "standard" ? "satellite" : "standard"
    });
  };
  switchToSatellite = () => {
    console.log("changing");
    this.setState({
      mapType: "satellite"
    });
  };

  // onMapReady = () => {
  //   Platform.OS === 'ios' && this.map.animateToRegion(region = { latitude: LATITUDE, longitude: LONGITUDE }, 0.1); // TODO remove once the initialRegion is fixed in the module
  // };
  switchToStandard = () => {
    console.log("changing");
    this.setState({
      mapType: "standard"
    });
  };

  render() {
    return (
      <View style={styles.map}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={map => (this.map = map)}
          style={styles.container}
          customMapStyle={RetroMapStyles}
          mapType={this.state.mapType}
          showsCompass={true}
          showsUserLocation={true}
          zoomEnabled={true}
          showsBuildings={true}
          //region={this.state.region}
          showsTraffic={true}
          showsIndoors={true}
          //showsMyLocationButton={true}
          //onMapReady={this.onMapReady}
          onRegionChangeComplete={region => {
            console.log(region);
            this.setState({ userLocation: region });
            console.log("The new state is", this.state.userLocation);
          }}
        >
          {this.state.isloaded &&
            this.state.markers.map((marker, index) => {
              return (
                <MapView.Marker
                  key={index}
                  coordinate={marker.coordinates}
                ></MapView.Marker>
              );
            })}
        </MapView>

        <Button
          onPress={this.showmarker}
          mode="contained"
          color={this.state.isloaded ? "red" : "grey"}
          style={styles.marker}
        >
          Damages
        </Button>

        <FAB
          style={styles.gps}
          icon="map-marker-plus"
          onPress={this.toggleDiv}
        />

        <ActionButton
          title="Maptype"
          buttonColor="rgba(231,76,60,1)"
          style={styles.FAB}
        >
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Satellite"
            onPress={this.switchToSatellite}
          >
            <Icon name="md-eye" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Standard"
            onPress={this.switchToStandard}
          >
            <Icon name="md-eye-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

        <FAB
          style={styles.compass}
          icon="crosshairs-gps"
          onPress={this.picklocationHandler}
        />

        {this.state.show && (
          <Afterclick
            coordinates={this.state.userLocation}
            hideOverlay={this.hide_overlay}
            fetchCoordinates={this.fetchCoordinates}
          />
        )}

        <View style={styles.latlong}>
          <Text>Latitude:: {this.state.userLocation.latitude}</Text>
          <Text>Longitude:: {this.state.userLocation.longitude}</Text>
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
  async componentDidMount() {
    this.picklocationHandler();
    this.fetchCoordinates();

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          initialRegion: {
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
        initialRegion: {
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
