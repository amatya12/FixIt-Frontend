import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { API_ENDPOINT } from "../constants/constants";
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
import { Form, FormItem } from "react-native-form-validation";
import { Dropdown } from "react-native-material-dropdown";

import { Button } from "react-native-paper";
import ajax from "../ajax";
import { validateAll } from "indicative/validator";
let item = [];
const data = [
  {
    value: "High",
  },
  {
    value: "Medium",
  },
  {
    value: "Low",
  },
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
      priority: "",
      error: {},
      userAllData: "",
      userData: "",
    };
    this.submit = this.submit.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  confirm = async (data) => {
    const rules = {
      issues: "required|string",
      location: "required|string",
      subCategoryId: "required|min:1",
      priority: "required|string",
    };

    const messages = {
      required: (field) => `${field} is required`,
      "issues.issues": "Issues is required ",
      "subCategoryId.min": "Please choose one or more category",
      "priority.priority": " Priority is required ",
      "location.location": " Location is required ",
    };

    try {
      console.log("posteed");

      await validateAll(data, rules, messages);

      const response = await axios.post(`${API_ENDPOINT}/issue`, {
        issues: data.issues,
        subCategoryId: data.subCategoryId,
        imageUrl: data.imagebase64,
        latitude: data.latitude,
        longitude: data.longitude,
        priority: data.priority,
        location: data.location,
      });

      this.setState({
        userData: response,
        userAllData: response.data.data,
      });
      this.props.modelclosed();
      alert(" posted succesfully");
    } catch (errors) {
      const formattedErrors = {};

      if (errors.response && errors.response.status === 422) {
        formattedErrors["issues"] = errors.response.data["issues"][0];
        this.setState({
          error: formattedErrors,
        });
      } else {
        errors.forEach(
          (error) => (formattedErrors[error.field] = error.message)
        );

        this.setState({
          error: formattedErrors,
        });
      }
    }
  };

  onSelectedItemsChange = (subCategoryId) => {
    this.setState({ subCategoryId });
  };
  onSelectedItemObjectsChange = (subCategoryId) => {
    // should display [{id: '92iijs7yta', name: 'Ondo'}, ...]
  };
  async componentDidMount() {
    this.getPermissionAsync();
    item = await ajax.fetchCategoriesWithSubCategories();
  }

  getPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
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
        <Form>
          <ScrollView style={globalStyles.scroll}>
            <View style={{ backgroundColor: "#4267B2" }}>
              <Text
                style={{
                  marginTop: "4%",
                  marginLeft: "35%",
                  marginBottom: "8%",
                  fontSize: 20,
                }}
              >
                Post an Issue
              </Text>
              <Text style={{ color: "red", fontSize: 20 }}>
                {this.state.Error}
              </Text>
            </View>

            <Text style={{ marginLeft: "2%", fontSize: 20 }}>
              What's the issue?
            </Text>
            <FormItem isRequired={true}>
              <View style={globalStyles.test}>
                <TextInput
                  multiline={true}
                  style={globalStyles.input}
                  //onBlur={() => this.issueValidator()}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.setState({ issues: text })}
                  value={this.state.issues}
                />
              </View>
              {this.state.error["issues"] && (
                <Text style={{ color: "red" }}>
                  {this.state.error["issues"]}
                </Text>
              )}
            </FormItem>

            {/* /<View style={globalStyles.formelement}> */}
            <View style={globalStyles.test}>
              <Text style={{ marginLeft: "0%", fontSize: 20 }}>
                Choose a Category:
              </Text>
              <SectionedMultiSelect
                items={item}
                uniqueKey="id"
                key="id"
                subKey="children"
                selectText="select one or more...."
                showDropDowns={true}
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChange}
                // onSelectedItemObjectsChange={this.onSelectedItemObjectsChange}
                selectedItems={this.state.subCategoryId}
              />
              {this.state.error["subCategoryId"] && (
                <Text style={{ color: "red" }}>
                  {this.state.error["subCategoryId"]}
                </Text>
              )}
            </View>

            <View style={globalStyles.test}>
              <Text style={{ marginLeft: "1%", fontSize: 20 }}>
                Priority Level:
              </Text>
              <Dropdown
                data={data}
                onChangeText={(itemValue, itemIndex) =>
                  this.setState({ priority: itemValue })
                }
              />
              {this.state.error["priority"] && (
                <Text style={{ color: "red" }}>
                  {this.state.error["priority"]}
                </Text>
              )}
            </View>
            <View style={globalStyles.test}>
              <Text style={{ marginLeft: "1%", fontSize: 20 }}>Location:</Text>
              <TextInput
                style={globalStyles.input}
                multiline={true}
                //placeholder="Location"
                onChangeText={(text) => this.setState({ location: text })}
                value={this.state.location}
              />
              {this.state.error["location"] && (
                <Text style={{ color: "red" }}>
                  {this.state.error["location"]}
                </Text>
              )}
            </View>

            {/* <View style={globalStyles.searchSection}> */}
            <View style={globalStyles.test}>
              <Icon1
                style={{
                  padding: 10,
                }}
                name="camera"
                size={25}
                color="#000"
                onPress={this._pickImage}
              />
              <TextInput
                //placeholder="Pick images"
                style={globalStyles.input}
                underlineColorAndroid="transparent"
                placeholder="pick a image"
                editable={false}
                value={this.state.image}
              />

              {/* </View> */}

              {image && (
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: image,
                    }}
                    style={{ margin: 20, width: 300, height: 200 }}
                  />
                </TouchableOpacity>
              )}
            </View>

            <Text style={{ marginLeft: "2%", fontSize: 20 }}>
              GPS Coordinate:
            </Text>

            <View style={globalStyles.gpscord}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ left: "1%" }}>Latitude</Text>
                <Text value={this.state.latitude} style={globalStyles.input}>
                  {this.state.latitude}
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ left: "1%" }}>Longitude</Text>
                <Text value={this.state.longitude} style={globalStyles.input}>
                  {this.state.longitude}
                </Text>
              </View>
            </View>

            <View style={globalStyles.buttonSection}>
              <Button
                onPress={this.props.modelclosed}
                borderRadius="10"
                color="red"
                mode="contained"
                style={{ flex: 1, marginRight: "1%" }}
              >
                Cancel
              </Button>

              <Button
                mode="contained"
                style={{ flex: 1, marginRight: "1%" }}
                color="green"
                borderRadius="10"
                onPress={() => this.confirm(this.state)}
              >
                Submit
              </Button>
            </View>
            <Text style={{ color: "red", fontSize: 20 }}>
              {this.state.Error}
            </Text>
          </ScrollView>
        </Form>
      </View>
    );
  }
}
