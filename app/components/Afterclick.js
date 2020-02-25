import React, { Component } from 'react';
import { View,StyleSheet,Modal,Text,Button } from 'react-native';


import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";

import { FAB } from 'react-native-paper';
import {FullForm} from "../components/FullForm";
import style from '../styles/AfterClick.styles';
  
export class Afterclick extends React.Component {
    constructor() {
        super();
        this.state = {
         
          show : false,
          modalVisible: false,
          
            };
        this.toggle = this.toggle.bind(this)
           this._onPressAdd = this._onPressAdd.bind(this);    
        
      }
      openModal() {
        this.setState({modalVisible:true});
      }
     
    
      closeModal() {
        this.setState({modalVisible:false});
      }
       
      toggle = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }
    _onPressAdd () {
      // alert("You add Item");
      this.refs.addModal.showAddModal();
  }
    
    render() {
        return (
            <View>
              <Modal
              style={styless.container}
              visible={this.state.modalVisible}
              animationType={'fade'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styless.modalContainer}>
              <View style={styless.innerContainer}>
                <Text>This is content inside of modal component</Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                >
                </Button>
              </View>
            </View>
          </Modal>
            <FAB
               style={style.ok}
               
               icon="check-circle"
               onPress={ ()=>this.openModal()}
             />
              { this.state.show && <FullForm /> } 
            <FAB
               style={style.cancel}
               
               icon="alpha-x-circle"
             
               onPress={ this.toggle }
             />
             { this.state.show && <FullForm /> } 
            <Icon1 name="map-pin" style={style.mappin} size={50} color="#000000" />
            <Icon name="target" style={style.target} size={50} color="#000000" />
   
         </View>
        );
    }
}
const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  innerContainer: {
    flex: 0.5,
    alignItems: 'center',
    backgroundColor:'blue'
  },
});
