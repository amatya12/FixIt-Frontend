import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
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
    ok: {
        position: 'absolute',
        margin:16,
        right: 75,
        bottom: 125,
        backgroundColor:'#F0E9E7'
        
      },
      cancel: {
        position: 'absolute',
        margin:16,
        right: 200,
        bottom: 125,
        backgroundColor:'#EBCA10'
        
      },
      mappin: {
        position: 'absolute',
        margin:16,
        right:175,
        bottom: 400,
       
        
      },
      target: {
        position: 'absolute',
        margin:16,
        right: 165,
        bottom: 350,
       
        
      }
    
});
