import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from '../styles/HomeScreen.styles';
import images from '../Images';





export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
                source={images.homeScreen.fix}
                style={styles.welcomeImage}
            />
          </View>
          <View style={styles.getStartedContainer}>
            <WelcomeNotice />
            <Text style={styles.getStartedText}
            >We help you to quick fix damaged things in your parish.</Text>
          </View>
        </ScrollView>
      </View>
  );
}


HomeScreen.navigationOptions = {
  header: null,
};


function WelcomeNotice() {
  return (
      <Text style={styles.welcomeText}>
        Welcome to FixIt!
      </Text>
  );
}

