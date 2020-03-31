import React, { Component } from "react";
import { View, StyleSheet, Modal, Button } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import { FAB } from "react-native-paper";
import style from "../styles/AfterClick.styles";
import styles from "../styles/ViewMap.styles";
import { FullForm } from "../components/FullForm";

export class Afterclick extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false
    };
  }
  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.closeModal()}
          onSwipeComplete={() => this.closeModal()}
          swipeDirection="left"
        >
          <FullForm
            lat={this.props.coordinates.latitude}
            long={this.props.coordinates.longitude}
            modelclosed={() => this.closeModal()}
            fetchCoordinates={this.props.fetchCoordinates}
          />
        </Modal>
        <FAB
          style={style.ok}
          label="OK"
          icon="check-circle"
          onPress={() => this.openModal()}
        />
        <FAB
          style={style.cancel}
          icon="alpha-x-circle"
          label="Cancel"
          onPress={this.props.hideOverlay}
        />
        <Icon1 name="map-pin" style={style.mappin} size={50} color="#FF6347" />
        <Icon name="target" style={style.target} size={50} color="#FF6347" />
      </View>
    );
  }
}
