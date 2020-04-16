import React, { useState } from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const Exercise = () => {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor="#000" />

            <View style={{ position: "relative", marginBottom: 8 }}>
                <Image source={require('../assets/mode_1.jpg')} style={{ width: '100%', height: 180, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} />
                <Text style={{ position: "absolute", color: "#fff", bottom: 40, left: 20, fontSize: 23, fontWeight: "bold" }}>Cardio Warmup</Text>
                <Text style={{ position: "absolute", color: "#fff", bottom: 20, left: 20, fontSize: 16 }}>Estimated Duration: 10 - 15 Minutes</Text>
                <Icon name="keyboard-arrow-left" size={40} color="#fff" style={{ position: "absolute", left: 5, top: 15 }} />
            </View>



            <View style={{ alignItems: 'center' }}>
                <View style={{ width: '96%', marginVertical: 8 }}>
                    <LinearGradient
                        colors={['#28313B', '#485461']}
                        style={{ borderRadius: 15 }}
                    >
                        <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, color: '#fff', padding: 4 }}>Start Workout</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </>
    );
}

export default Exercise;