import React, { useState, useEffect } from 'react'
import { View, StatusBar, Image, Text, Modal, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { RFPercentage } from "react-native-responsive-fontsize";
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import { useFocusEffect } from '@react-navigation/native';

import { cardio_exercises, abs_exercises, fullBody_exercises } from '../data/exercises';

const Exercises = ({ route, navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalDataIdx, setModalDataIdx] = useState(0);
    const [exercises, setExercises] = useState([{
        id: 0,
        name: '',
        desc: '',
        time: 0,
        gif: require('../assets/cardio_1.gif')
    }]);

    useFocusEffect(() => {
        hideNavigationBar();
    });

    useEffect(() => {
        if(route.params.mode == 1){            
            setExercises(cardio_exercises);
        } else if(route.params.mode == 2){
            setExercises(abs_exercises);
        } else if(route.params.mode == 3){
            setExercises(fullBody_exercises);
        }
    }, []);

    return (
        <>
            <StatusBar hidden={true} />

            <View style={{ position: "relative", marginBottom: 8 }}>
                <Image source={
                    route.params.mode == 1 && require('../assets/mode_1.jpg') || 
                    route.params.mode == 2 && require('../assets/mode_2.jpg') ||
                    route.params.mode == 3 && require('../assets/mode_3.jpg')
                } style={{ width: '100%', height: RFPercentage(25), borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} />
                <Text style={{ position: "absolute", color: "#fff", bottom: 35, left: 20, fontSize: RFPercentage(3.3), fontWeight: "bold" }}>
                    { route.params.mode == 1 && 'Cardio Warmup' }
                    { route.params.mode == 2 && 'Six Pack Abs' }
                    { route.params.mode == 3 && 'Full Body Challenge' }
                </Text>
                <Text style={{ position: "absolute", color: "#fff", bottom: 15, left: 20, fontSize: RFPercentage(2) }}>
                    Estimated Duration: 
                    { route.params.mode == 1 && ' 10 - 15 Minutes' }
                    { route.params.mode == 2 && ' 20 - 30 Minutes' }
                    { route.params.mode == 3 && ' 30 - 40 Minutes' }
                </Text>
                <TouchableOpacity style={{ position: "absolute", left: 5, top: 15 }} onPress={() => navigation.goBack()}><Icon name="keyboard-arrow-left" size={40} color="#fff" /></TouchableOpacity>
            </View>

            <FlatList
                data={exercises}
                initialNumToRender={0}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={ () => <View style={{ flex: 1, height: 1, width: "90%", marginHorizontal: 20, backgroundColor: "#aaa" }} /> }
                renderItem={( { item: exercise, index } ) => (
                    <TouchableOpacity onPress={() => { setModalDataIdx(index); setIsModalVisible(true); }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 20, paddingVertical: 10 }}>
                            <Image resizeMode="cover" source={exercise.gif} style={{ width: '30%', height: RFPercentage(11) }} />
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={{ fontSize: RFPercentage(2.5), fontWeight: "bold", marginTop: 8, textTransform: 'uppercase' }}>{exercise.name}</Text>
                                <Text style={{ fontSize: RFPercentage(2.5), marginTop: 10, color: '#aaa' }}>{exercise.time ? '00:' + exercise.time : 'x' + exercise.reps}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <View style={{ alignItems: 'center' }}>
                <View style={{ width: '96%', paddingVertical: 8 }}>
                    <LinearGradient
                        colors={['#485461', '#28313B']}
                        style={{ borderRadius: 15 }}
                    >
                        <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }}
                            onPress={() => {
                                AsyncStorage.setItem('StartTime', new Date().getTime().toString());
                                AsyncStorage.setItem('Exercises', exercises.length.toString());
                                navigation.navigate('Exercise', { mode: route.params.mode })
                            }}>
                            <Text style={{ fontSize: RFPercentage(2.4), color: '#fff', padding: 4, letterSpacing: 1 }}>START WORKOUT</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>

            <Modal
                visible={isModalVisible}
                transparent
                onRequestClose={() => setIsModalVisible(false)}
                statusBarTranslucent={true}
            >
                <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', alignItems: 'center', justifyContent: 'center', position: 'absolute', width: '100%', height: '100%' }}>
                    <View style={{ justifyContent: 'center', width: RFPercentage(50), backgroundColor: "#eee", marginVertical: 0, marginHorizontal: 0, borderRadius: 10, paddingHorizontal: 25, elevation: 10, position: 'relative' }}>
                        <Image resizeMode="cover" source={exercises[modalDataIdx].gif} style={{ width: '100%', height: RFPercentage(35), marginTop: 15 }} />
                        <Text style={{ fontSize: RFPercentage(3.1), fontWeight: 'bold', borderTopWidth: 1, borderTopColor: '#aaa', paddingTop: 10, marginBottom: 5, marginTop: 10, textAlign: 'center' }}>{exercises[modalDataIdx].name}</Text>
                        <Text style={{ color: '#aaa', marginBottom: 60, fontSize: RFPercentage(2.1), textAlign: 'justify' }}>{exercises[modalDataIdx].desc}</Text>
                        <LinearGradient
                            colors={['#28313B', '#485461']}
                            style={{ borderRadius: 15, position: 'absolute', bottom: 15, right: 25 }}
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