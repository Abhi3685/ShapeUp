import React, { useState } from 'react'
import { View, StatusBar, Image, Text, Modal, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

import exercises from '../data/cardio';

const Exercises = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalDataIdx, setModalDataIdx] = useState(0);

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor="#000" />

            <View style={{ position: "relative", marginBottom: 8 }}>
                <Image source={require('../assets/mode_1.jpg')} style={{ width: '100%', height: 180, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} />
                <Text style={{ position: "absolute", color: "#fff", bottom: 40, left: 20, fontSize: 23, fontWeight: "bold" }}>Cardio Warmup</Text>
                <Text style={{ position: "absolute", color: "#fff", bottom: 20, left: 20, fontSize: 16 }}>Estimated Duration: 10 - 15 Minutes</Text>
                <TouchableOpacity style={{ position: "absolute", left: 5, top: 15 }} onPress={() => navigation.goBack()}><Icon name="keyboard-arrow-left" size={40} color="#fff" /></TouchableOpacity>
            </View>

            <FlatList
                data={exercises}
                initialNumToRender={0}
                keyExtractor={(item) => item.id.toString()}
                renderItem={( { item: exercise, index } ) => (
                    <TouchableOpacity onPress={() => { setModalDataIdx(index); setIsModalVisible(true); }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, borderRadius: 10, borderBottomWidth: 1, borderBottomColor: '#aaa', paddingVertical: 10 }}>
                            <Image resizeMode="cover" source={exercise.gif} style={{ width: '30%', height: 80 }} />
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}>{exercise.name}</Text>
                                <Text style={{ fontSize: 18, marginTop: 10, color: '#aaa' }}>{exercise.time ? '00:' + exercise.time : 'x' + exercise.reps}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <View style={{ alignItems: 'center' }}>
                <View style={{ width: '96%', marginVertical: 8 }}>
                    <LinearGradient
                        colors={['#28313B', '#485461']}
                        style={{ borderRadius: 15 }}
                    >
                        <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }}
                            onPress={() => {
                                AsyncStorage.setItem('StartTime', new Date().getTime().toString());
                                AsyncStorage.setItem('Exercises', exercises.length.toString());
                                navigation.navigate('Exercise', { mode: '1' })
                            }}>
                            <Text style={{ fontSize: 17, color: '#fff', padding: 4 }}>Start Workout</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>

            <Modal
                visible={isModalVisible}
                transparent
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1 }}>
                    <View style={{ flex: 1, marginVertical: 100, marginHorizontal: 40, backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 25, elevation: 10, position: 'relative' }}>
                        <Image source={exercises[modalDataIdx].gif} style={{ width: '100%', height: 250 }} />
                        <Text style={{ fontSize: 25, fontWeight: 'bold', borderTopWidth: 1, borderTopColor: '#aaa', paddingTop: 10, marginBottom: 10 }}>{exercises[modalDataIdx].name}</Text>
                        <Text style={{ color: '#aaa' }}>{exercises[modalDataIdx].desc}</Text>
                        <LinearGradient
                            colors={['#28313B', '#485461']}
                            style={{ borderRadius: 15, position: 'absolute', bottom: 20, right: 35 }}
                        >
                            <Text style={{ textAlign: 'right', color: '#fff', paddingHorizontal: 20, paddingVertical: 10 }}
                                onPress={() => setIsModalVisible(false)}>Close</Text>
                        </LinearGradient>
                    </View>
                </View>
            </Modal>
        </>
    );
}

export default Exercises;