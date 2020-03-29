import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import styles from '../styles/SearchBar.styles';

export default class SearchBar extends React.Component {
    state = {
        firstQuery: '',
    };

    render() {
        const { firstQuery } = this.state;
        return (
            <Searchbar
                style={styles.search}
                placeholder="Search anything here"
                onChangeText={query => { this.setState({ firstQuery: query }); }}
                value={firstQuery}
            />
        );
    }
}
