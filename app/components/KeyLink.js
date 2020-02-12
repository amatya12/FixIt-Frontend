import React from 'react';
import {View, Platform} from 'react-native';
import {Text} from "react-native-paper";
import * as Amplitude from 'expo-analytics-amplitude';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import {KEY_LINKS_OPEN} from "../constants/amplitude/event";
import styles from '../styles/KeyLink.styles';

export default class KeyLink extends React.Component{

    static openElement(options){
        return(
            <Touchable style={styles.touchOption}
                       background={Touchable.Ripple('#000000', false)}
                       onPress={options.action}
            >
                <View style={styles.directionFlex}>
                    <View style={styles.containerIcon} >
                        {options.icon}
                    </View>
                    <View>
                        <Text style={styles.linkOptions}>
                            {options.text}
                        </Text>
                    </View>
                </View>
            </Touchable>

        );
    }
    static openLinkElement(options){
        return KeyLink.openElement({
            ...options,
            action: () =>{
                WebBrowser.openBrowserAsync(options.url);
                Amplitude.logEvent(KEY_LINKS_OPEN,{
                    url: options.url,
                });

            },
        });

    }
    render(){
        return(
            <View>
                {KeyLink.openLinkElement({
                    text: 'St. Tammany Parish Government ',
                    url: 'http://www.stpgov.org/',
                    icon: <Ionicons
                        name={Platform.OS === 'ios' ? 'ios-briefcase' : 'md-briefcase'}
                        size={30}
                        color="#000"
                    />,

                })}
                {KeyLink.openLinkElement({
                    text: 'St. Tammany Parish Sheriff office',
                    url: 'https://www.stpso.com/',
                    icon: <Ionicons
                        name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'}
                        size={30}
                        color="#000"
                    />,

                })}

            </View>

        );


    }

}
