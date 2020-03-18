import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Picker,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";

import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { globalStyles } from "../styles/global.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import { FAB } from "react-native-paper";
import style from "../styles/AfterClick.styles";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { Dropdown } from "react-native-material-dropdown";
import { ViewMap } from "../components/ViewMap";

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
export class FullForm extends React.Component {
  constructor() {
    super();
    this.state = {
      priority: "",
      selectedItems: [],
      image: null,
      Issue: "",
      Location: ""
    };
    this.submit = this.submit.bind(this);
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
    console.log(selectedItems);
  };
  onSelectedItemObjectsChange = selectedItems => {
    console.log(selectedItems); // should display [{id: '92iijs7yta', name: 'Ondo'}, ...]
  };
  componentDidMount() {
    this.getPermissionAsync();
    console.log("hi");
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  submit(Issue, Location, latitude, longitude, priority, selectedItems) {
    alert(
      "Issue: " +
        Issue +
        " Location: " +
        Location +
        " latitude: " +
        latitude +
        " longitude: " +
        longitude +
        "priority:" +
        priority +
        "selected items:" +
        selectedItems
    );
    console.log("wow");
  }

  render() {
    console.log(this.props);
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
    let { image } = this.state;
    return (
      <View style={globalStyles.formView}>
        <ScrollView style={globalStyles.scroll}>
          <TextInput
            numberOfLines={1}
            style={globalStyles.input}
            placeholder="Issues"
            onChangeText={text => this.setState({ Issue: text })}
            value={this.state.Issue}
          />

          <View style={globalStyles.formelement}>
            <SectionedMultiSelect
              items={items}
              uniqueKey="id"
              subKey="children"
              selectText="Choose some things..."
              showDropDowns={true}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedItemsChange}
              // onSelectedItemObjectsChange={this.onSelectedItemObjectsChange}
              selectedItems={this.state.selectedItems}
            />
          </View>

          <View style={globalStyles.formelement}>
            <Picker
              mode="dialog"
              selectedValue={this.state.priority}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ priority: itemValue })
              }
            >
              <Picker.Item label="High" value="High" />
              <Picker.Item label="medium" value="medium" />
              <Picker.Item label="low" value="low" />
            </Picker>
          </View>

          <TextInput
            style={globalStyles.input}
            multiline
            placeholder="Location"
            onChangeText={text => this.setState({ Location: text })}
            value={this.state.Location}
          />

          <View style={globalStyles.searchSection}>
            <Icon1
              style={{
                padding: 10
              }}
              name="camera"
              size={25}
              color="#000"
              onPress={this._pickImage}
            />
            <TextInput
              placeholder="Pick images"
              underlineColorAndroid="transparent"
              editable={false}
            />
          </View>

          {image && (
            <TouchableOpacity>
              <Image
                source={{ uri: image }}
                style={{ margin: 20, width: 300, height: 200 }}
              />
            </TouchableOpacity>
          )}

          <Text style={{ marginLeft: 20, fontSize: 20 }}>GPS Coordinate</Text>

          <View style={globalStyles.gpscord}>
            <Text value={this.props.lat} style={globalStyles.input}>
              {this.props.lat}
            </Text>
            <Text value={this.props.long} style={globalStyles.input}>
              {this.props.long}
            </Text>
          </View>

          <View style={globalStyles.buttonSection}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Button
                onPress={this.props.modelclosed}
                title="Cancel"
                borderRadius="10"
                color="red"
              />
            </View>

            <View style={{ flex: 1, marginRight: 10 }}>
              <Button
                title="Submit"
                color="green"
                borderRadius="10"
                onPress={() =>
                  this.submit(
                    this.state.Issue,
                    this.state.Location,
                    this.props.lat,
                    this.props.long,
                    this.state.priority,
                    this.state.selectedItems
                  )
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
