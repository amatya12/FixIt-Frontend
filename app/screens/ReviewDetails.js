import React, { Component } from 'react';
import { Card } from 'react-native-paper';
import { AppRegistry, StyleSheet, View, Dimensions, Alert, Text, Image, Button } from 'react-native';

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();

  }

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.titleText}>{navigation.getParam('title')}</Text>
        <Text style={styles.titleText}>{navigation.getParam('body')}</Text>
        <Text style={styles.titleText}>{navigation.getParam('rating')}</Text>
      </Card>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    padding: 24,

  },
  titleText: {
    fontSize: 20
  }

});