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
        right: 100,
        bottom: 100,
        backgroundColor:'#32CD32'
        
      },
      cancel: {
        position: 'absolute',
        margin:16,
        right: 250,
        bottom: 100,
        backgroundColor:'#ff0000'
        
      },
      mappin: {
        position: 'absolute',
        margin:16,
        right:175,
        bottom: 425,
       
        
      },
      target: {
        position: 'absolute',
        margin:16,
        right: 165,
        bottom: 375,
       
        
      },
});
