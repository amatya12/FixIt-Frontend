import React from 'react';
import ajax from '../ajax';
import { View, Text, StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-paper';

class DepartmentList extends React.Component {
    async componentDidMount() {
        const deals = await ajax.fetchInitialDepartments();
        console.log(deals);
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