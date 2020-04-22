import React, { useEffect, useState, useCallback } from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, BackHandler, Alert, AppState } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';
import KeepAwake from 'react-native-keep-awake';
import SoundPlayer from 'react-native-sound-player';

import { cardio_exercises, abs_exercises, fullBody_exercises } from '../data/exercises';

const Break = ({ route, navigation }) => {
    const [timeLeft, setTimeLeft] = useState(30);
    const { mode, id } = route.params;
    const [exercise, setExercise] = useState({
        name: '',
        desc: '',
        reps: 0,
        gif: require('../assets/cardio_1.gif')
    });

    useEffect(() => {
        AppState.addEventListener("change", _handleAppStateChange);
        return () => AppState.removeEventListener("change", _handleAppStateChange);
    }, []);

    const _handleAppStateChange = nextAppState => {
        if (nextAppState === "background") {
            SoundPlayer.pause();
        }
        if (nextAppState === "active") {
            SoundPlayer.resume();
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            var exercises;
            if(mode == 1){
                exercises = cardio_exercises;
            } else if(mode == 2){
                exercises = abs_exercises;
            } else if(mode == 3){
                exercises = fullBody_exercises;
            }
            setExercise(() => {
                let exercise = exercises[id];
                return exercise;
            });
        });

        SoundPlayer.playSoundFile('tick', 'mp3');
        SoundPlayer.setVolume(100);
        _onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
            SoundPlayer.play();
        });
    
        return unsubscribe;
    }, [navigation]);

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                Alert.alert('Quit Workout', 'Are you sure you want to quit workout?', [{ text: 'No' }, { text: 'Yes', onPress: () => { SoundPlayer.stop(); navigation.navigate('Exercises'); } }]); 
                return true;
            };
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        })
    );

    useEffect(() => {
        let interval = null;
        if (timeLeft != 0) {
            interval = setInterval(() => {
                setTimeLeft(seconds => seconds - 1);
            }, 1000);
        } else {
            // Redirect to next exercise
            SoundPlayer.stop();
            navigation.goBack();
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timeLeft]);

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor="#fff" />

            <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Break Time</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(0,0,0,0.05)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>{timeLeft}s Left</Text>

                <LinearGradient
                    colors={['#28313B', '#485461']}
                    style={{ borderRadius: 15, width: '40%' }}
                >
                    <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }}
                        onPress={() => { SoundPlayer.stop(); navigation.goBack(); }}>
                        <Text style={{ fontSize: 17, color: '#fff', padding: 4 }}>Skip</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '70%', paddingHorizontal: 15, paddingVertical: 8 }}>
                    <Text style={{ color: '#aaa', fontSize: 18 }}>Up Next</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{exercise.name}</Text>
                    <Text style={{ color: '#00f', fontSize: 18, fontWeight: 'bold' }}>{ exercise.reps ? 'x' + exercise.reps : '00:' + exercise.time }</Text>
                </View>
                <Image source={exercise.gif} style={{ width: '30%', height: 100 }} />
            </View>

            <KeepAwake />
        </>
    );
}

export default Break;