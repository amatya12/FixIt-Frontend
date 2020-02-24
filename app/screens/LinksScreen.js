import React from 'react';
import { ScrollView } from 'react-native';
import styles from '../styles/LinkScreen.styles';
import KeyLink from '../components/KeyLink';


export default function LinksScreen() {

  return (
      <ScrollView style={styles.container}>
        <KeyLink/>


      </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Quick Links',
};
