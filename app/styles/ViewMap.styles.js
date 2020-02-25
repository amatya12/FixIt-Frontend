import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
    map: {

        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0

    },
    gps: {
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
      compass: {
        position: 'absolute',
        margin:16,
        right: 16,
        bottom: 650,
        backgroundColor:'#ffffff'
        
      },
      latlong: {
        position: 'absolute',
        margin:16,
        right: 100,
        bottom: 20,
        backgroundColor:'transparent'
        
      },
});
