import React, { useState, useEffect } from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const Exercise = () => {
    const [exercise, setExercise] = useState({
        name: 'Jog in Place',
        desc: 'Jogging in a stationary position. It\'s simple, accessible, gets the heart rate up, and is a great way to warm up for more intense exercise.',
        time: 5,
        gif: require('../assets/cardio_2.gif')
    });
    const [seconds, setSeconds] = useState(exercise.time ? exercise.time : 0);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                console.log('Timer On');
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
            <StatusBar barStyle='dark-content' backgroundColor="#28313B" />

            <View style={{ position: 'absolute', width: '100%', height: '55%', backgroundColor: '#28313B', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}></View>

            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'space-between', marginBottom: 25 }}>
                <Icon name="keyboard-arrow-left" size={40} color="#fff" style={{ position: "absolute", left: 10, top: 15 }} />
                <Text style={{ fontSize: 20, marginTop: 20, color: '#fff' }}>Exercise 8/10</Text>
                <View style={{ width: '88%', alignItems: 'center', marginTop: 20 }}>
                    <Image source={exercise.gif} resizeMode="cover" style={{ height: 280 }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ textTransform: 'uppercase', fontSize: 28, fontWeight: 'bold', marginTop: 50 }}>{ exercise.name }</Text>
                    <Text style={{ paddingHorizontal: 45, textAlign: 'justify', marginTop: 10, fontSize: 15, color: '#aaa' }}>{ exercise.desc }</Text>
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
            </View>
        </>
    );
}

export default Exercise;