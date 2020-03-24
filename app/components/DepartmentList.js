import React from "react";
import ajax from "../ajax";
import { View, Text, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";
import PropTypes from "prop-types";

class DepartmentList extends React.Component {
  state = {
    departments: []
  };
  componentDidMount() {
    const departments = ajax.fetchInitialDepartments();
    console.log(departments);
    this.setState({ departments: departments });
  }
  static propTypes = {
    departments: PropTypes.array.isRequired
  };

  render() {
    return (
      <View>
        {this.state.departments.map(department => (
          <Text key={department.Id}>{department.name}</Text>
        ))}
      </View>
    );
  }

  render() {
    return (
      <View>
        <Paragraph>h1</Paragraph>
      </View>
    );
  }
}

export default DepartmentList;
