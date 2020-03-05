import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global.styles";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          Issues: "",
          Categories: "",
          Priority: "",
          location: "",
          ImagePicker: "",
          Latitude: "",
          Longitude: ""
        }}
        onSubmit={values => {
          addReview(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              numberOfLines={4}
              style={globalStyles.input}
              placeholder="Issues"
              onChangeText={props.handleChange("Issues")}
              value={props.values.Issues}
            />

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Categories"
              onChangeText={props.handleChange("Categories")}
              value={props.values.Categories}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Priority"
              onChangeText={props.handleChange("Priority")}
              value={props.values.Priority}
              keyboardType="numeric"
            />
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Location"
              onChangeText={props.handleChange("Location")}
              value={props.values.location}
            />
            <View styles={globalStyles.container}>
              <Icon
                name="camera"
                size={25}
                style={{ color: "#505050", marginLeft: 340 }}
              />
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="Image Picker"
                onChangeText={props.handleChange("ImagePicker")}
                value={props.values.ImagePicker}
              />
            </View>

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Latitude"
              onChangeText={props.handleChange("Latitude")}
              value={props.values.Latitude}
            />
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Longitude"
              onChangeText={props.handleChange("Longitude")}
              value={props.values.Longitude}
            />

            <Button
              color="maroon"
              title="Submit" /**onPress={props.handleSubmit}**/
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
