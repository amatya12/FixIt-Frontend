import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions,TextInput } from 'react-native';
import MapView, { Callout,PROVIDER_GOOGLE } from 'react-native-maps';

import RetroMapStyles from '../MapStyles/RetroMapStyles.json';

import styles from '../styles/ViewMap.styles';
import callout from  '../styles/Callout.styles';
import Circle from '../components/circlebutton';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import styles1 from '../styles/fab.styles';



let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export  class ViewMap extends React.Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
  }
  
  render() {
    return (
       <View style={styles.map }>
      <MapView
            provider={ PROVIDER_GOOGLE }
            style={ styles.container }
            customMapStyle={ RetroMapStyles }
            showsUserLocation={ true }
            region={ this.state.region }
            
            onRegionChangeComplete={ region => this.setState({region}) }
      >
         
        <MapView.Marker draggable
            coordinate={ this.state.region }
            onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate })}
        />
      </MapView>
      <View style={styles.map}>
       
        <ActionButton 
        buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles1.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles1.actionButtonIcon} />
          </ActionButton.Item>
          
        </ActionButton>
      </View>
      
      <Callout>
            <View style={callout.calloutView} >
            <TextInput style={callout.calloutSearch}
                placeholder={"Search"}
            />
            </View>
         </Callout>
        
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


AppRegistry.registerComponent('ViewMap', () => ViewMap);