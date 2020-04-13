import React, { Component } from 'react';
import { View, Text, StatusBar, BackHandler } from 'react-native';
import { showNavigationBar } from 'react-native-navigation-bar-color';

export default class Mode extends Component {
    componentDidMount() {
        showNavigationBar();
        BackHandler.addEventListener('hardwareBackPress', () => BackHandler.exitApp());
    }

    render() {
        return (
            <>
                <StatusBar barStyle='dark-content' backgroundColor="#fff" />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Mode Select Screen</Text>
                </View>
            </>
        );
    }
}