import { Linking, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export const openUrl = (url) => {
    //return Linking.openURL(url);
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log('Can\'t handle url: ' + url);
        } else {
            return Linking.openURL(url);
        }
    }).catch(err => console.error('An error occurred', err));

};

export const openUrlInApp = (url) => {
    console.log(url);
    WebBrowser.openBrowserAsync(url);
};