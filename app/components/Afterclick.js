import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { globalStyles } from "../styles/global.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import { FAB } from "react-native-paper";
import style from "../styles/AfterClick.styles";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { Dropdown } from "react-native-material-dropdown";
const items = [
  {
    name: "Signs and Lights",
    id: 0,
    children: [
      {
        name: "stop signs",
        id: 10
      },
      {
        name: "Street signs",
        id: 17
      },
      {
        name: "one way",
        id: 13
      },
      {
        name: "DOnot enter",
        id: 14
      },
      {
        name: "Stop Lights",
        id: 15
      },
      {
        name: "Speed Limits",
        id: 16
      }
    ]
  },
  {
    name: "Roads",
    id: 1,
    children: [
      {
        name: "potholes",
        id: 20
      },
      {
        name: "Debris",
        id: 21
      },
      {
        name: "Paints",
        id: 22
      },
      {
        name: "cracking",
        id: 23
      },
      {
        name: "washout",
        id: 24
      },
      {
        name: "street lights",
        id: 25
      },
      {
        name: "other",
        id: 26
      }
    ]
  },
  {
    name: "Roadside",
    id: 2,
    children: [
      {
        name: "Drainage",
        id: 30
      },
      {
        name: "grass cutting",
        id: 31
      },
      {
        name: "overgrowth",
        id: 32
      },
      {
        name: "other",
        id: 33
      }
    ]
  }
];
export class Afterclick extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      modalVisible: false,
      selectedItems: []
    };
    this.toggle = this.toggle.bind(this);
    this._onPressAdd = this._onPressAdd.bind(this);
  }
  openModal() {
    this.setState({ modalVisible: true });
  }
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  closeModal() {
    this.setState({ modalVisible: false });
  }

  toggle = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  _onPressAdd() {
    // alert("You add Item");
    this.refs.addModal.showAddModal();
  }

  render() {
    let data = [
      {
        value: "High"
      },
      {
        value: "Medium"
      },
      {
        value: "Low"
      }
    ];
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.closeModal()}
        >
          <View
            style={{
              margin: 0,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "#ffb3b3",
              backgroundColor: /*//"rgba(0,0,0,0.5)"*/ "white"
            }}
          >
            <TextInput
              numberOfLines={1}
              style={globalStyles.input}
              placeholder="Issues"
            />
            <View
              style={{
                margin: 10,
                paddingLeft: 15,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 6
              }}
            >
              <SectionedMultiSelect
                style={globalStyles.input}
                items={items}
                uniqueKey="id"
                subKey="children"
                selectText="Click here to choose categories."
                showDropDowns={true}
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChange}
                selectedItems={this.state.selectedItems}
              />
            </View>

            <View
              style={{
                margin: 10,
                paddingLeft: 15,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 6
              }}
            >
              <Dropdown label="Priority" data={data} />
            </View>
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Location"
            />
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="ImagePicker"
            />
            <Text style={{ marginLeft: 20, fontSize: 20 }}>GPS Coordinate</Text>
            <View
              style={{
                width: "90%",
                margin: 10,
                borderWidth: 2,
                borderColor: "black",
                borderRadius: 2
              }}
            >
              <Text style={globalStyles.input}>
                {this.props.dataFromParent}
              </Text>
              <Text style={globalStyles.input}>{this.props.dataFromP}</Text>
            </View>
            <View
              style={{
                width: "90%",
                margin: 10,

                flexDirection: "row"
              }}
            >
              <View style={{ flex: 1, marginRight: 10 }}>
                <Button
                  onPress={() => this.closeModal()}
                  title="Cancel"
                  borderRadius="10"
                  color="red"
                />
              </View>

              <View style={{ flex: 1, marginRight: 10 }}>
                <Button title="Submit" color="green" borderRadius="10" />
              </View>
            </View>
          </View>
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
          onPress={this.toggle}
        />

        <Icon1 name="map-pin" style={style.mappin} size={50} color="#000000" />
        <Icon name="target" style={style.target} size={50} color="#000000" />
      </View>
    );
  }
}
