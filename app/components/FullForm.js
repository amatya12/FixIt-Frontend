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
import axios from "axios";
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
    id: 1,
    children: [
      {
        name: "stop signs",
        id: 1
      },
      {
        name: "Street signs",
        id: 2
      },
      {
        name: "one way",
        id: 3
      },
      {
        name: "DO not enter",
        id: 4
      },
      {
        name: "Stop Lights",
        id: 5
      },
      {
        name: "Speed Limits",
        id: 6
      },
      {
        name: "Crossing Signs",
        id: 7
      },
      {
        name: "U Turn",
        id: 8
      },
      {
        name: "Warning Signs",
        id: 9
      }
    ]
  },
  {
    name: "Roads",
    id: 4,
    children: [
      {
        name: "potholes",
        id: 11
      },
      {
        name: "Debris",
        id: 12
      },
      {
        name: "Paints",
        id: 13
      },
      {
        name: "cracking",
        id: 14
      },
      {
        name: "washout",
        id: 15
      },
      {
        name: "street lights",
        id: 16
      },
      {
        name: "other",
        id: 17
      }
    ]
  },
  {
    name: "Roadside",
    id: 5,
    children: [
      {
        name: "Drainage",
        id: 18
      },
      {
        name: "grass cutting",
        id: 19
      },
      {
        name: "overgrowth",
        id: 20
      },
      {
        name: "other",
        id: 21
      }
    ]
  }
];
export class FullForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagebase64: null,
      image: null,
      issues: "",
      location: "",
      subCategoryId: [],
      imageUrl: "",
      location: "",
      latitude: this.props.lat,
      longitude: this.props.long,
      priority: ""
    };
    this.submit = this.submit.bind(this);
    this.postInitialIssue = this.postInitialIssue.bind(this);
  }

  postInitialIssue() {
    axios
      .post("http://192.168.1.249:5001/api/issue", {
        issues: this.state.issues,
        subCategoryId: this.state.subCategoryId,
        imageUrl: this.state.imagebase64,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        priority: this.state.priority
      })
      .then(response => {
        console.log(response.data);
        console.log(response.status);
        this.props.fetchCoordinates();
      })
      .catch(function (error) {
        console.log(error);
      });
    this.props.modelclosed();

    // axios.get("https://api.github.com/users/mapbox").then(response => {
    //   console.log(response.data);
    //   console.log(response.status);
    // });
    alert(" posted succesfully");
  }

  onSelectedItemsChange = subCategoryId => {
    this.setState({ subCategoryId });
    console.log(subCategoryId);
  };
  onSelectedItemObjectsChange = subCategoryId => {
    console.log(subCategoryId); // should display [{id: '92iijs7yta', name: 'Ondo'}, ...]
  };
  componentDidMount() {
    this.getPermissionAsync();
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
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      const base64ImageUri = result
        ? `data:image/jpg;base64,${result.base64}`
        : null;

      this.setState({ imagebase64: base64ImageUri });
    }
  };
  submit(
    issues,
    location,
    latitude,
    longitude,
    priority,
    subCategoryId,
    image
  ) {
    alert(
      "Issue: " +
      issues +
      " Location: " +
      location +
      " latitude: " +
      latitude +
      " longitude: " +
      longitude +
      "priority:" +
      priority +
      "subcategoryID:" +
      subCategoryId +
      "image:" +
      image
    );
  }

  render() {
    let { image } = this.state;
    return (
      <View style={globalStyles.formView}>
        <ScrollView style={globalStyles.scroll}>
          <TextInput
            multilines={true}
            numberOfLines={5}
            style={globalStyles.input}
            placeholder="Issues"
            blurOnSubmit={false}
            enablesReturnKeyAutomatically={true}
            onChangeText={text => this.setState({ issues: text })}
            value={this.state.issues}
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
              selectedItems={this.state.subCategoryId}
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
              <Picker.Item label="High" value="high" />
              <Picker.Item label="medium" value="medium" />
              <Picker.Item label="low" value="low" />
            </Picker>
          </View>

          <TextInput
            style={globalStyles.input}
            multiline
            placeholder="Location"
            onChangeText={text => this.setState({ location: text })}
            value={this.state.location}
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
              value={this.state.image}
            />
          </View>

          {image && (
            <TouchableOpacity>
              <Image
                source={{
                  uri: image
                }}
                style={{ margin: 20, width: 300, height: 200 }}
              />
            </TouchableOpacity>
          )}

          <Text style={{ marginLeft: 20, fontSize: 20 }}>GPS Coordinate</Text>

          <View style={globalStyles.gpscord}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ left: 10 }}>Latitude</Text>
              <Text value={this.state.latitude} style={globalStyles.input}>
                {this.state.latitude}
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ left: 10 }}>Longitude</Text>
              <Text value={this.state.longitude} style={globalStyles.input}>
                {this.state.longitude}
              </Text>
            </View>
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
                onPress={this.postInitialIssue}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
