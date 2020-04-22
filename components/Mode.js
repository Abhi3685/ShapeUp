import React, { useEffect } from 'react';
import { View, Text, StatusBar, Image, TouchableWithoutFeedback, AppState } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import { useFocusEffect } from '@react-navigation/native';

const Mode = ({ navigation }) => {
    useFocusEffect(() => {
        hideNavigationBar();
        AppState.addEventListener('change', hideNavigationBar);
    }, []);


    return (
        <>
            <StatusBar hidden={true} />
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: RFPercentage(3.8), fontWeight: "bold" }}>Workout Modes</Text>
                <Text style={{ marginBottom: 30, color: "#aaa", fontSize: RFPercentage(2.5), marginBottom: 30, marginHorizontal: 70, textAlign: 'center' }}>Select any one workout mode to continue.</Text>
                
                <TouchableWithoutFeedback onPress={() => navigation.push('Exercises', { mode: 1 })}>
                    <View style={{ marginBottom: 20, elevation: 10, borderRadius: 15 }}>
                        <Image source={require('../assets/mode_1.jpg')} style={{ width: RFPercentage(44), height: RFPercentage(20), borderRadius: 15, position: 'relative' }} />
                        <Text style= {{ fontSize: RFPercentage(3.1), fontWeight: 'bold', position: 'absolute', color: "#fff", left: 20, bottom: 30 }}>Cardio Warmup</Text>
                        <Text style= {{ fontSize: RFPercentage(1.7), position: 'absolute', color: "#fff", left: 21, bottom: 15 }}>Estimated Duration: 10 - 15 Minutes</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.push('Exercises', { mode: 2 })}>
                    <View style={{ marginBottom: 20, elevation: 10, borderRadius: 15 }}>
                        <Image source={require('../assets/mode_2.jpg')} style={{ width: RFPercentage(44), height: RFPercentage(20), borderRadius: 15, position: 'relative' }} />
                        <Text style= {{ fontSize: RFPercentage(3.1), fontWeight: 'bold', position: 'absolute', color: "#fff", left: 20, bottom: 30 }}>Six Pack Abs</Text>
                        <Text style= {{ fontSize: RFPercentage(1.7), position: 'absolute', color: "#fff", left: 21, bottom: 15 }}>Estimated Duration: 20 - 30 Minutes</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.push('Exercises', { mode: 3 })}>
                    <View style={{ marginBottom: 20, elevation: 10, borderRadius: 15 }}>
                        <Image source={require('../assets/mode_3.jpg')} style={{ width: RFPercentage(44), height: RFPercentage(20), borderRadius: 15, position: 'relative' }} />
                        <Text style= {{ fontSize: RFPercentage(3.1), fontWeight: 'bold', position: 'absolute', color: "#fff", left: 20, bottom: 30 }}>Full Body Challenge</Text>
                        <Text style= {{ fontSize: RFPercentage(1.7), position: 'absolute', color: "#fff", left: 21, bottom: 15 }}>Estimated Duration: 30 - 40 Minutes</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
}

export default Mode;