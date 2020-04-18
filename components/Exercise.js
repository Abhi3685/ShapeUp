import React, { useState, useEffect } from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, AppState } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import SoundPlayer from 'react-native-sound-player';
import KeepAwake from 'react-native-keep-awake';

import cardio_exercises from '../data/cardio';

const Exercise = ({ navigation }) => {
    const [exercise, setExercise] = useState({
        name: '',
        desc: '',
        reps: 0,
        gif: require('../assets/cardio_1.gif')
    });
    const [seconds, setSeconds] = useState(exercise.time ? exercise.time : -1);
    const [isActive, setIsActive] = useState(true);
    const [id, setId] = useState(-1);
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setId(id => {
                setExercise(() => {
                    let exercise = cardio_exercises[id+1];
                    if(exercise.time) setSeconds(exercise.time);
                    return exercise;
                });
                return id + 1;
            });
            // SoundPlayer.playSoundFile('bg_audio', 'mp3');
            // AppState.addEventListener('change', function(currentAppState) {
            //     if(currentAppState == "background") {
            //         SoundPlayer.pause();
            //     } 
            //     if(currentAppState == "active") {
            //         SoundPlayer.resume();
            //     }
            // });
        });
    
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        if (seconds == 0){
            // Redirect to break screen
            clearInterval(interval);
            id+1 === cardio_exercises.length ? navigation.navigate('Finish') : navigation.navigate('Break', { mode: 1, id: id + 1 })
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor="#28313B" />

            <View style={{ position: 'absolute', width: '100%', height: '55%', backgroundColor: '#28313B', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}></View>

            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'space-between', marginBottom: 25 }}>
                <Icon name="keyboard-arrow-left" size={40} color="#fff" style={{ position: "absolute", left: 10, top: 15 }} />
                <Text style={{ fontSize: 20, marginTop: 20, color: '#fff' }}>Exercise {id+1}/{cardio_exercises.length}</Text>
                <View style={{ width: '88%', alignItems: 'center', marginTop: 20 }}>
                    <Image source={exercise.gif} resizeMode="cover" style={{ width: '100%', height: 280 }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ textTransform: 'uppercase', fontSize: 28, fontWeight: 'bold', marginTop: 50 }}>{ exercise.name }</Text>
                    <Text style={{ paddingHorizontal: 25, textAlign: 'center', marginTop: 10, fontSize: 15, color: '#aaa' }}>{ exercise.desc }</Text>
                    <Text style={{ fontSize: 60, fontWeight: 'bold', color: '#aaa' }}>{ exercise.reps ? 'x ' + exercise.reps : seconds + 's' }</Text>
                </View>
                <LinearGradient
                    colors={['#28313B', '#485461']}
                    style={{ borderRadius: 15 }}
                >
                    { exercise.reps ? 
                    <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }} onPress={() => id+1 === cardio_exercises.length ? navigation.navigate('Finish') : navigation.navigate('Break', { mode: 1, id: id + 1 }) }>
                        <Text style={{ color: '#fff', paddingVertical: 4, paddingHorizontal: 50 }}> 
                            <Icon name="done" size={30} color="#fff" />
                        </Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }} onPress={() => setIsActive(isActive => !isActive)}>
                        <Text style={{ color: '#fff', paddingVertical: 4, paddingHorizontal: 50 }}> 
                            { exercise.reps ? <Icon name="done" size={30} color="#fff" /> : <Icon name={isActive ? "pause" : "play-arrow"} size={30} color="#fff" /> }
                        </Text>
                    </TouchableOpacity> }
                </LinearGradient>

                <KeepAwake />
            </View>
        </>
    );
}

export default Exercise;