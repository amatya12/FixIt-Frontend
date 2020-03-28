import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        borderRadius:20,
         elevation:3,
         backgroundColor:'#fff',
         shadowOffset:{width:1,height:1},
         shadowColor:'#333',
         shadowOpacity:0.3,
         shadowRadius:2.0,
         marginHorizontal:4,
         marginVertical:6
 
  
   },
   modalToggle:{
     marginBottom:10,
     borderWidth:1,
     borderColor:'#f2f2f2',
     padding:10,
     borderRadius:10,
     alignSelf:'center'
   },
   modalClose:{
     marginTop:20,
     marginBottom:0
   },
   modalContent:{
     flex:1,
   },
   box:{
      width:"100%",
      alignItems:"center"
   },
   placeholder:{
     borderWidth:1,
     borderColor:"black",
     backgroundColor:"#eee",
     width:"80%",
     height:150
   },
   buttons:{
     margin:8
   }
});
