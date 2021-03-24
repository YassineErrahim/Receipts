
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


const DeliveryScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:23,color:'lightblue'}}>Delivery Screen</Text>
            <Button style={styles.button} title='Order Screen' onPress={() => {navigation.navigate('Order')}}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : '#892640',
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        color : 'white',
        fontSize:24,
        fontWeight:'bold'
    },
    button : {
        backgroundColor : '#999306',
        width : 100,
        height : 100,
        alignSelf : 'flex-end',
    },
});

export default DeliveryScreen;