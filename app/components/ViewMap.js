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
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
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
const pinColor = "#000000";

export class ViewMap extends React.Component {
  constructor() {
    super();
    this.state = {
      markersForRoads: [],
      markersForRoadSides: [],
      markersForSigns: [],
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
      isLoaded: false,
      isLoadedForRoad: false,
      isLoadedForRoadSide: false,
      isLoadedForSign: false
    };
    this.toggleDiv = this.toggleDiv.bind(this);
    this.hide_overlay = this.hide_overlay.bind(this);
    // this.autolocate = this.autolocate.bind(this);
    this.switchMapType = this.switchMapType.bind(this);
    this.switchToSatellite = this.switchToSatellite.bind(this);

    this.switchToStandard = this.switchToStandard.bind(this);
    this.showmarker = this.showmarker.bind(this);
    this.fetchCoordinates = this.fetchCoordinates.bind(this);
    this.showMarkerForRoad = this.showMarkerForRoad.bind(this);
    this.fetchCoordinatesForRoad = this.fetchCoordinatesForRoad.bind(this);
    this.showMarkerForRoadSide = this.showMarkerForRoadSide.bind(this);
    this.fetchCoordinatesForRoadSide = this.fetchCoordinatesForRoadSide.bind(
      this
    );
    this.showMarkerForSign = this.showMarkerForSign.bind(this);
    this.fetchCoordinatesForSign = this.fetchCoordinatesForSign.bind(this);
  }
  async fetchCoordinates() {
    const damages = await ajax.fetchDamages();
    console.log("markers: ", damages);

    this.setState({ markers: damages.data });
  }
  async fetchCoordinatesForRoad() {
    const damages = await ajax.fetchDamagesforRoad();
    console.log("The damages for road are", damages);

    this.setState({ markersForRoads: damages.data });
  }
  async fetchCoordinatesForRoadSide() {
    const damages = await ajax.fetchDamagesforRoadSide();

    this.setState({ markersForRoadSides: damages.data });
  }
  async fetchCoordinatesForSign() {
    const damages = await ajax.fetchDamagesforSign();

    this.setState({ markersForSigns: damages.data });
  }


  // showmarker() {
  //   const { isLoaded } = this.state;

  //   console.log("THe initial value of isloaded", this.state.isLoaded);
  //   this.setState({ isLoaded: !isLoaded });
  //   console.log("The final value of isloaded", this.state.isLoaded);
  //   setTimeout(() => {
  //     console.log("The final value of isloaded", this.state.isLoaded);
  //   });
  // }
  async showmarker() {
    let {
      isLoaded,
    } = this.state;



    //console.log("THe initial value of isloaded", isLoaded);
    isLoaded = !isLoaded;
    this.setState({ isLoaded: isLoaded });
    //console.log("The final value of isloaded", isLoaded);

    if (isLoaded === true) {
      this.showMarkerForRoad();
      this.showMarkerForRoadSide();
      this.showMarkerForSign();


      //console.log("The isLoaded value is", isloaded);
      this.setState({ isLoadedForRoad: true });
      // console.log("The isloaded value for road is", isLoadedForRoad);
      this.setState({ isLoadedForRoadSide: true });
      this.setState({ isLoadedForSign: true });
    } else {
      this.setState({ isLoadedForRoad: false });
      this.setState({ isLoadedForRoadSide: false });
      this.setState({ isLoadedForSign: false });
    }
  }



  async showMarkerForRoad() {
    let { isLoadedForRoad } = this.state;
    isLoadedForRoad = !isLoadedForRoad;
    this.setState({ isLoadedForRoad: isLoadedForRoad });
    if (isLoadedForRoad) {
      console.log("i am here");
      this.fetchCoordinatesForRoad();
    }
  }
  async showMarkerForRoadSide() {

    let { isLoadedForRoadSide } = this.state;
    isLoadedForRoadSide = !isLoadedForRoadSide;
    this.setState({ isLoadedForRoadSide: isLoadedForRoadSide });
    if (isLoadedForRoadSide) {
      this.fetchCoordinatesForRoadSide();
    }

  }
  async showMarkerForSign() {
    let { isLoadedForSign } = this.state;
    isLoadedForSign = !isLoadedForSign;
    this.setState({ isLoadedForSign: isLoadedForSign });
    if (isLoadedForSign) {
      this.fetchCoordinatesForSign();
    }
  }

  picklocationHandler = event => {
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
          {/* {this.state.isloaded &&
            this.state.markers.map((marker, index) => {
              return (
                <MapView.Marker
                  key={index}
                  coordinate={marker.coordinates}
                ></MapView.Marker>
              );
            })} */}
          {this.state.isLoadedForRoad &&
            this.state.markersForRoads.map((markersForRoad, index) => {
              return (
                <MapView.Marker
                  key={index}
                  coordinate={markersForRoad.coordinates}
                  pinColor={"gold"}
                >
                  <Callout>
                    <Text>Issue:{markersForRoad.issues}</Text>
                    <Text>Location: {markersForRoad.location}</Text>
                    <Text>Date Created: {markersForRoad.dateCreated}</Text>
                    <Text>Status: {markersForRoad.status}</Text>
                  </Callout>
                </MapView.Marker>
              );
            })}
          {this.state.isLoadedForRoadSide &&
            this.state.markersForRoadSides.map((markersForRoadSide, index) => {
              return (
                <MapView.Marker
                  key={index}
                  coordinate={markersForRoadSide.coordinates}
                  pinColor={"navy"}
                >
                  <Callout>
                    <Text>Issue: {markersForRoadSide.issues}</Text>
                    <Text>Location: {markersForRoadSide.location}</Text>
                    <Text>Date Created: {markersForRoadSide.dateCreated}</Text>
                    <Text>Status: {markersForRoadSide.status} </Text>

                  </Callout>

                </MapView.Marker>
              );
            })}
          {this.state.isLoadedForSign &&
            this.state.markersForSigns.map((markersForSign, index) => {
              return (
                <MapView.Marker
                  key={index}
                  coordinate={markersForSign.coordinates}
                  pinColor={"plum"}
                >
                  <Callout>
                    <Text>Issue: {markersForSign.issues}</Text>
                    <Text>Location: {markersForSign.location}</Text>
                    <Text>Date Created: {markersForSign.dateCreated}</Text>
                    <Text>Status: {markersForSign.status} </Text>
                  </Callout>
                </MapView.Marker>
              );

            })}
        </MapView>
        <Button
          onPress={this.showMarkerForRoad}
          mode="contained"
          color={this.state.isLoadedForRoad ? "red" : "grey"}
          style={styles.road}
        >
          Road
        </Button>

        <Button
          onPress={this.showmarker}
          mode="contained"
          color={this.state.isLoaded ? "red" : "grey"}
          style={styles.marker}
        >
          All
        </Button>
        <Button
          onPress={this.showMarkerForRoadSide}
          mode="contained"
          color={this.state.isLoadedForRoadSide ? "red" : "grey"}
          style={styles.roadside}
        >
          Roadside
        </Button>
        <Button
          onPress={this.showMarkerForSign}
          mode="contained"
          color={this.state.isLoadedForSign ? "red" : "grey"}
          style={styles.SignAndLights}
        >
          Sign & Lights
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
