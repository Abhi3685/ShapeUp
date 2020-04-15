import React, { useState } from 'react'
import { View, StatusBar, Image, Text, Modal, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const Exercises = () => {
    const cardio_exercises = [
        {
            id: 1,
            name: 'Jumping Jacks',
            desc: 'Repeatedly jumping the feet wide while circling the arms overhead. It requires no special equipment or skills.',
            reps: 30,
            gif: require('../assets/cardio_1.gif')
        },
        {
            id: 2,
            name: 'Jog in Place',
            desc: 'Jogging in a stationary position. It\'s simple, accessible, gets the heart rate up, and is a great way to warm up for more intense exercise.',
            time: 40,
            gif: require('../assets/cardio_2.gif')
        },
        {
            id: 3,
            name: 'Burpees',
            desc: 'Squatting to the floor, jumping the feet to a plank position, jumping back in, and standing up. It\'s a killer cardio exercise.',
            reps: 20,
            gif: require('../assets/cardio_3.gif')
        },
        {
            id: 4,
            name: 'Mountain Climbers',
            desc: 'Running the knees in and out from a push-up position. Mountain climbers raise the heart rate while building strength and endurance in the core.',
            time: 40,
            gif: require('../assets/cardio_4.gif')
        },
        {
            id: 5,
            name: 'Jump Lunges',
            desc: 'Simply lunge forward on your left leg as you bring your right arm forward and left arm back, elbows bent at 90-degree angles. From the lunge, jump straight into the air as you switch your arm and leg positions, then land with the opposite arm and leg in front.',
            time: 30,
            gif: require('../assets/cardio_5.gif')
        },
        {
            id: 6,
            name: 'Plank Jacks',
            desc: 'Start with your hands under shoulders and your body straight. Bring your feet together. Jump and spread your legs wider than shoulder width. Jump back and repeat.',
            time: 30,
            gif: require('../assets/cardio_6.gif')
        },
        {
            id: 7,
            name: 'Inchworm crawl',
            desc: 'Plant your feet and slowly walk your hands forward into a plank with your hands under your shoulders. Then, Slowly walk your hand toward your feets.',
            time: 15,
            gif: require('../assets/cardio_7.gif')
        },
        {
            id: 8,
            name: 'Squat Jumps',
            desc: 'You start out in a squat and then jump up, trying to get as high as possible, and then land back in the squat.',
            reps: 20,
            gif: require('../assets/cardio_8.gif')
        },
        {
            id: 9,
            name: 'Skaters',
            desc: 'Stand with feet hip-width apart and keep a slight bend in knees. Jump to the right with right foot, landing lightly on the ball of right foot and sweeping left foot behind right leg.',
            time: 30,
            gif: require('../assets/cardio_9.gif')
        },
        {
            id: 10,
            name: 'Kickboxing',
            desc: 'Punching, kicking, and combinations thereof against a bag, the air, or (risky) another person. It can help you get out your aggressions.',
            time: 40,
            gif: require('../assets/cardio_10.gif')
        }
    ];

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalDataIdx, setModalDataIdx] = useState(5);

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor="#000" />

            <View style={{ position: "relative", marginBottom: 8 }}>
                <Image source={require('../assets/mode_1.jpg')} style={{ width: '100%', height: 180, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} />
                <Text style={{ position: "absolute", color: "#fff", bottom: 40, left: 20, fontSize: 23, fontWeight: "bold" }}>Cardio Warmup</Text>
                <Text style={{ position: "absolute", color: "#fff", bottom: 20, left: 20, fontSize: 16 }}>Estimated Duration: 10 - 15 Minutes</Text>
                <Icon name="keyboard-arrow-left" size={40} color="#fff" style={{ position: "absolute", left: 5, top: 15 }} />
            </View>

            <FlatList
                data={cardio_exercises}
                keyExtractor={(item) => item.id.toString()}
                renderItem={( { item: exercise, index } ) => (
                    <TouchableOpacity onPress={() => { setModalDataIdx(index); setIsModalVisible(true); }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, borderRadius: 10, borderBottomWidth: 1, borderBottomColor: '#aaa', paddingVertical: 10 }}>
                            <Image source={exercise.gif} style={{ width: '30%', height: 80 }} />
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
                        <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }}>
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
                        <Image source={cardio_exercises[modalDataIdx].gif} style={{ width: '100%', height: 250 }} />
                        <Text style={{ fontSize: 25, fontWeight: 'bold', borderTopWidth: 1, borderTopColor: '#aaa', paddingTop: 10, marginBottom: 10 }}>{cardio_exercises[modalDataIdx].name}</Text>
                        <Text style={{ color: '#aaa' }}>{cardio_exercises[modalDataIdx].desc}</Text>
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