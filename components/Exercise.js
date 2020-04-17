import React, { useState, useEffect } from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, AppState } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import SoundPlayer from 'react-native-sound-player';
import KeepAwake from 'react-native-keep-awake';

SoundPlayer.playSoundFile('bg_audio', 'mp3');
AppState.addEventListener('change', _handleAppStateChange);

const Exercise = () => {
    const [exercise, setExercise] = useState({
        name: 'Jump Lunges',
        desc: 'Simply lunge forward on your left leg as you bring your right arm forward and left arm back, elbows bent at 90-degree angles. From the lunge, jump straight into the air as you switch your arm and leg positions, then land with the opposite arm and leg in front.',
        time: 30,
        gif: require('../assets/cardio_5.gif')
    });
    const [seconds, setSeconds] = useState(exercise.time ? exercise.time : 0);
    const [isActive, setIsActive] = useState(true);

    _handleAppStateChange = function(currentAppState) {
        if(currentAppState == "background") {
            SoundPlayer.pause();
        } 
        if(currentAppState == "active") {
            SoundPlayer.resume();
        }
    };

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
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor="#28313B" />

            <View style={{ position: 'absolute', width: '100%', height: '55%', backgroundColor: '#28313B', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}></View>

            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'space-between', marginBottom: 25 }}>
                <Icon name="keyboard-arrow-left" size={40} color="#fff" style={{ position: "absolute", left: 10, top: 15 }} />
                <Text style={{ fontSize: 20, marginTop: 20, color: '#fff' }}>Exercise 8/10</Text>
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
                    <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }} onPress={() => setIsActive(isActive => !isActive)}>
                        <Text style={{ color: '#fff', paddingVertical: 4, paddingHorizontal: 50 }}> 
                            { exercise.reps ? <Icon name="done" size={30} color="#fff" /> : <Icon name={isActive ? "pause" : "play-arrow"} size={30} color="#fff" /> }
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>

                <KeepAwake />
            </View>
        </>
    );
}

export default Exercise;