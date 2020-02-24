import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from '../styles/HomeScreen.styles';
import images from '../Images';
import {ViewMap} from "../components/ViewMap";




export default function HomeScreen() {
  return (
      <ViewMap/>
  );
}


HomeScreen.navigationOptions = {
  header: null,
};



