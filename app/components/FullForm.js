import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import {Card,Title,Button,Paragraph,Avatar } from 'react-native-paper';
import styles from '../styles/ViewMap.styles';

export class FullForm extends React.Component {
    render() {
        return (
          <View style={styles.map}>
          <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        </View>
        
            
        );
    }
}

