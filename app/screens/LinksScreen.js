import React from "react";
import { ScrollView } from "react-native";
import styles from "../styles/LinkScreen.styles";
import KeyLink from "../components/KeyLink";
import DepartmentList from "../components/DepartmentList";
import ajax from "../ajax";

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <DepartmentList />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Departments"
};
