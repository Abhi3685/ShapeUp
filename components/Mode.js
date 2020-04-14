import React, { Component } from 'react';
import { View, Text, StatusBar, BackHandler, Image } from 'react-native';
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
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 30 }}>Select Workout Mode</Text>
                    
                    <View style={{ marginBottom: 20, elevation: 10, backgroundColor: "#fff", borderRadius: 15 }}>
                        <Image source={require('../assets/mode_1.jpg')} style={{ width: 300, height: 150, borderRadius: 15, position: 'relative' }} />
                        <Text style= {{ fontSize: 22, fontWeight: 'bold', position: 'absolute', color: "#fff", left: 20, bottom: 30 }}>Cardio Warmup</Text>
                        <Text style= {{ fontSize: 12, position: 'absolute', color: "#fff", left: 21, bottom: 15 }}>Estimated Duration: 10 - 15 Minutes</Text>
                    </View>

                    <View style={{ marginBottom: 20, elevation: 10, backgroundColor: "#fff", borderRadius: 15 }}>
                        <Image source={require('../assets/mode_2.jpg')} style={{ width: 300, height: 150, borderRadius: 15, position: 'relative' }} />
                        <Text style= {{ fontSize: 22, fontWeight: 'bold', position: 'absolute', color: "#fff", left: 20, bottom: 30 }}>Six Pack Abs</Text>
                        <Text style= {{ fontSize: 12, position: 'absolute', color: "#fff", left: 21, bottom: 15 }}>Estimated Duration: 40 - 45 Minutes</Text>
                    </View>

                    <View style={{ marginBottom: 20, elevation: 10, backgroundColor: "#fff", borderRadius: 15 }}>
                        <Image source={require('../assets/mode_3.jpg')} style={{ width: 300, height: 150, borderRadius: 15, position: 'relative' }} />
                        <Text style= {{ fontSize: 22, fontWeight: 'bold', position: 'absolute', color: "#fff", left: 20, bottom: 30 }}>Full Body Challenge</Text>
                        <Text style= {{ fontSize: 12, position: 'absolute', color: "#fff", left: 21, bottom: 15 }}>Estimated Duration: 45 - 50 Minutes</Text>
                    </View>
                </View>
            </>
        );
    }
}