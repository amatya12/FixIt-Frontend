import React from 'react';
import { ScrollView } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import styles from '../styles/LinkScreen.styles';
import KeyLink from '../components/KeyLink';
import Circle from '../components/circlebutton';

export default function LinksScreen() {

  return (
      <ScrollView style={styles.container}>
        <Circle/>


      </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Quick Links',
};
