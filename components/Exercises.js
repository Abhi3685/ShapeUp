import React, { useState, useEffect } from 'react'
import { View, StatusBar, Image, Text, Modal, TouchableWithoutFeedback, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

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
            <StatusBar barStyle='light-content' backgroundColor="#000" />

            <View style={{ position: "relative", marginBottom: 8 }}>
                <Image source={
                    route.params.mode == 1 && require('../assets/mode_1.jpg') || 
                    route.params.mode == 2 && require('../assets/mode_2.jpg') ||
                    route.params.mode == 3 && require('../assets/mode_3.jpg')
                } style={{ width: '100%', height: 180, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} />
                <Text style={{ position: "absolute", color: "#fff", bottom: 40, left: 20, fontSize: 23, fontWeight: "bold" }}>
                    { route.params.mode == 1 && 'Cardio Warmup' }
                    { route.params.mode == 2 && 'Six Pack Abs' }
                    { route.params.mode == 3 && 'Full Body Challenge' }
                </Text>
                <Text style={{ position: "absolute", color: "#fff", bottom: 20, left: 20, fontSize: 16 }}>
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
                    <TouchableWithoutFeedback onPress={() => { setModalDataIdx(index); setIsModalVisible(true); }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 20, paddingVertical: 10 }}>
                            <Image resizeMode="cover" source={exercise.gif} style={{ width: '30%', height: 80 }} />
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 5, textTransform: 'uppercase' }}>{exercise.name}</Text>
                                <Text style={{ fontSize: 18, marginTop: 10, color: '#aaa' }}>{exercise.time ? '00:' + exercise.time : 'x' + exercise.reps}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
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
                                navigation.navigate('Exercise', { mode: route.params.mode })
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