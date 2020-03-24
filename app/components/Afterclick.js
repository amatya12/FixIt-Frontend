import React, { Component } from "react";
import { View, StyleSheet, Modal } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import { FAB } from "react-native-paper";
import style from "../styles/AfterClick.styles";

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
            lat={this.props.dataFromParent}
            long={this.props.dataFromP}
            modelclosed={() => this.closeModal()}
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

        <Icon1 name="map-pin" style={style.mappin} size={50} color="#000000" />
        <Icon name="target" style={style.target} size={50} color="#000000" />
      </View>
    );
  }
}
