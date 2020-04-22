import React, { useState, useEffect, useCallback } from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, BackHandler, AppState } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { hideNavigationBar } from 'react-native-navigation-bar-color';

const Finish = ({ navigation }) => {
    const [duration, setDuration] = useState("");
    const [exercises, setExercises] = useState("0");

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                navigation.navigate('Mode');
                return true;
            };
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            _myListener = AppState.addEventListener('change', hideNavigationBar);
            hideNavigationBar();
            return () => { 
                AppState.removeEventListener('change', _myListener);
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
            }
        })
    );

    useEffect(() => {
        AsyncStorage.getItem('StartTime').then(start => {
            setDuration(new Date(new Date().getTime() - start).toISOString().substr(11, 8));
        });
        AsyncStorage.getItem('Exercises').then(exercises => {
            setExercises(exercises);
        });
    }, []);

    return (
        <>
            <StatusBar hidden={true} />
            
            <View style={{ flex: 1, justifyContent: 'space-between' }}>

                <View style={{ position: "relative", alignItems: 'center', marginBottom: 8, width: '100%', height: '60%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: '#000' }}>
                    <Image source={require('../assets/finish_trophy.png')} style={{ width: '40%', height: '40%', marginTop: RFPercentage(10) }} />
                    <Text style={{ color: '#fff', fontSize: RFPercentage(3) }}>Nice You've Done It!</Text>

                    <View style={{ alignItems: 'center', position: 'absolute', left: '15%', bottom: '10%' }}>
                        <Text style={{ color: '#fff', fontSize: RFPercentage(3) }}>Exercises</Text>
                        <Text style={{ color: '#fff', fontSize: RFPercentage(3.1) }}>{ exercises }</Text>
                    </View>
                    <View style={{ alignItems: 'center', position: 'absolute', right: '15%', bottom: '10%' }}>
                        <Text style={{ color: '#fff', fontSize: RFPercentage(3) }}>Duration</Text>
                        <Text style={{ color: '#fff', fontSize: RFPercentage(3.1) }}>{ duration }</Text>
                    </View>

                    <TouchableOpacity style={{ position: "absolute", left: 5, top: 15 }} onPress={() => navigation.navigate('Mode')}><Icon name="keyboard-arrow-left" size={40} color="#fff" /></TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: RFPercentage(3), fontWeight: "bold" }}>Energy & Persistence</Text>
                    <Text style={{ fontSize: RFPercentage(3), letterSpacing: 1 }}>Conquer All Things</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <LinearGradient
                        colors={['#485461', '#28313B']}
                        style={{ borderRadius: 15, marginBottom: 10, width: '85%' }}
                    >
                        <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }} onPress={() => navigation.navigate('Exercises')}>
                            <Text style={{ fontSize: RFPercentage(2.4), textTransform: 'uppercase', color: '#fff', paddingVertical: 4, paddingHorizontal: 50 }}> 
                                Do It Again
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient
                        colors={['#485461', '#28313B']}
                        style={{ borderRadius: 15, marginBottom: 15, width: '85%' }}
                    >
                        <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }} onPress={() => navigation.navigate('Mode')}>
                            <Text style={{ fontSize: RFPercentage(2.4), textTransform: 'uppercase', color: '#fff', paddingVertical: 4, paddingHorizontal: 50 }}> 
                                Next
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </>
    );
}

export default Finish;