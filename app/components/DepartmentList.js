import React from "react";
import ajax from "../ajax";
import { View, Text, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { openUrlInApp, openUrl } from '../utils/intents';
import styles from '../styles/DepartmentList.styles';
class DepartmentList extends React.Component {
  state = {
    departments: []
  };
  async componentDidMount() {
    const departments = await ajax.fetchDepartments();
    //console.log(departments);
    this.setState({ departments: departments.data });
  }
  // static propTypes = {
  //   departments: PropTypes.array.isRequired
  // };

  handleItemClick(item) {
    console.log(item.url);
    openUrl('https://www.townofabitasprings.com');
  }
  render() {
    return (
      <View>

        {this.state.departments.map(department => (
          <TouchableHighlight
            key={department.id}
            onPress={() => this.handleItemClick(department)}
          >
            <Card style={styles.card} n >
              <Card.Content>
                <Title>{department.name}</Title>
                <Paragraph>{department.url}</Paragraph>
                <Paragraph>Location: {department.location}.</Paragraph>
                <Paragraph>PhoneNumber: {department.phoneNumber}</Paragraph>

              </Card.Content>

            </Card>
          </TouchableHighlight>
        ))}
      </View>
    );
  }
}

export default DepartmentList;
