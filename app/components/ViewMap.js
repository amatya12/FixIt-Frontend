import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions,TextInput,Button,TouchableOpacity ,Alert,Text,Image } from 'react-native';
import MapView, { Callout,PROVIDER_GOOGLE,Marker } from 'react-native-maps';

import RetroMapStyles from '../MapStyles/RetroMapStyles.json';
import { FAB } from 'react-native-paper';
import styles from '../styles/ViewMap.styles';
// import callout from  '../styles/Callout.styles';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";


import openMap from 'react-native-open-maps';


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
      },
      show : false
      
      
    };
    this.toggleDiv = this.toggleDiv.bind(this)
    this.autolocate = this.autolocate.bind(this)
   
  }
  autolocate() {
    openMap({ latitude: 37.865101, longitude: -119.538330 });
  }
   
  toggleDiv = () => {
    const { show } = this.state;
    this.setState( { show : !show } )
}

  ButtonClickCheckFunction = () =>{

    Alert.alert("Button Clicked")

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
            zoomEnabled={true}
            showsBuildings={true}
            showsTraffic={true}
            showsIndoors={true}
            showsMyLocationButton={true}
     
            onRegionChangeComplete={ region => this.setState({region}) }
      >
      
         
        { <MapView.Marker
            coordinate={ this.state.region }
            onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate })}
        /> }
      </MapView>
{/*       
      <Callout>
            <View style={callout.calloutView} >
            <TextInput style={callout.calloutSearch}
                placeholder={"Search"}
            />
            </View>
         </Callout> */}
         <FAB
              style={gps.fab}
              
              icon="map-marker-plus"
              onPress={ this.toggleDiv }
            />
          <FAB
              style={fabi.fab}
              
              icon="crosshairs-gps"                                                   
              onPress={this.autolocate }
            />
           
                                                                     
               
                { this.state.show && <Box /> }
               
                
                <View style={latlong.fab}>
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

const gps = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 50,
    paddingTop:2,
    paddingBottom:2,
    paddingLeft:2,
    paddingRight:2,
    backgroundColor:'#ff0000',
  },
})
const fabi = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin:16,
    right: 16,
    bottom: 650,
    backgroundColor:'#ffffff'
    
  },
})
const ok = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin:16,
    right: 100,
    bottom: 100,
    backgroundColor:'#32CD32'
    
  },
})
const latlong = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin:16,
    right: 100,
    bottom: 50,
    backgroundColor:'#32CD32'
    
  },
})
const cancel = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin:16,
    right: 250,
    bottom: 100,
    backgroundColor:'#ff0000'
    
  },
})
const ico = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin:16,
    right:175,
    bottom: 425,
   
    
  },
})
const tar = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin:16,
    right: 165,
    bottom: 375,
   
    
  },
})
class Box extends Component{
  constructor() {
    super();
    this.state = {
     
      show : false
      
      
    };
    this.toggle = this.toggle.bind(this)
    
  }
   
  toggle = () => {
    const { show } = this.state;
    this.setState( { show : !show } )
}
  render(){
      return(
        <View style={styles.map}>
           <FAB
              style={ok.fab}
              
              icon="check-circle"
              onPress={ this.toggle}
            />
            { this.state.show && <Form /> }
           <FAB
              style={cancel.fab}
              
              icon="alpha-x-circle"
            
              onPress={ this.toggleDiv }
            />
           <Icon1 name="map-pin" style={ico.fab} size={50} color="#000000" />
           <Icon name="target" style={tar.fab} size={50} color="#000000" />
  
        </View>
        
       
      )
  }
}
class Form extends Component{
  
  render(){
      return(
        <Text>This is good</Text>
       
      )
  }
}

AppRegistry.registerComponent('ViewMap', () => ViewMap);