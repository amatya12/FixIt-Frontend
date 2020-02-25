import React,{useState} from 'react';
import {Card} from 'react-native-paper';
import { AppRegistry, StyleSheet,Modal, View, Dimensions, Alert, Text, Image,Button,FlatList,TouchableOpacity } from 'react-native';
import{MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewForm'

export default function DamageScreen({navigation}) {
  const [modalOpen,setModalOpen]=useState(false);
  const[reviews,setReviews]=useState([
    {title:'Road broken',rating:9,body:'It is excellent',key:'1'},
    {title:'Sign missing',rating:10,body:'It is excellent',key:'2'},
    {title:'Trash can needed',rating:11,body:'It is excellent',key:'3'}

  ]);
  
 const addReview= (review)=> {
   review.key=Math.random().toString();
   setReviews((currentReviews)=> {
     return [reviews, ...currentReviews];

   });
   setModalOpen(false);
 }

  return (
<View style={{padding:20 }} >
  <Modal visible={modalOpen}>
    <View style={styles.modalContent}>
    <MaterialIcons
            name='close'
            size={24}
            style={{...styles.modalToggle,...styles.modalClose}}
            onPress={()=>setModalOpen(false)}
     />
                  <ReviewForm addReview={addReview}/>
    </View>
  
  </Modal>
  

 
  <MaterialIcons
  name='add'
  size={24}
  style={styles.modalToggle}
  onPress={()=>setModalOpen(true)}
                >

  </MaterialIcons>

  <FlatList
    data={reviews}
    renderItem={({item})=>(
     <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
       <Card style={styles.container}>
        <Text style={{fontSize:20,padding:20}}>
          {item.title}
        </Text>
       </Card>
      

     </TouchableOpacity>

          )}>

    </FlatList>
 
</View>
  );

}
const styles=StyleSheet.create({
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
  }

});

DamageScreen.navigationOptions = {
 header:null

};
