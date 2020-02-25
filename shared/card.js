import React,{Component} from 'react';
import {StyleSheet,View } from 'react-native';

export default function Card(props)
{
    return(
        <View style={styles1.card}>
            <View style={styles1.cardcontent}>
                { props.children }

            </View>
            </View>
    )
}
const styles1=StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundcOLOR:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shawdowOpacity:0.3,
        shadowRadius:2.0,
        marginHorizontal:4,
        marginVertical:6


    },
    cardContent:{

    }

});