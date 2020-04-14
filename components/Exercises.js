import React from 'react'
import { View, StatusBar, Image, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Exercises = () => {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor="#000" />
            <View style={{ position: "relative", marginBottom: 10 }}>
                <Image source={require('../assets/mode_1.jpg')} style={{ width: '100%', height: 180, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} />
                <Text style={{ position: "absolute", color: "#fff", bottom: 40, left: 20, fontSize: 23, fontWeight: "bold" }}>Cardio Warmup</Text>
                <Text style={{ position: "absolute", color: "#fff", bottom: 20, left: 20, fontSize: 16 }}>Estimated Duration: 10 - 15 Minutes</Text>
                <Icon name="keyboard-arrow-left" size={40} color="#fff" style={{ position: "absolute", left: 5, top: 15 }} />
            </View>

            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, borderRadius: 10, borderBottomWidth: 1, borderBottomColor: '#aaa', paddingVertical: 10 }}>
                    <Image source={require('../assets/exercise_1.gif')} style={{ width: '40%', height: 100 }} />
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>Push Ups</Text>
                        <Text style={{ fontSize: 20, marginTop: 10 }}>x10</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

export default Exercises;