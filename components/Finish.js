import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const Finish = () => {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor="#000" />
            
            <View style={{ flex: 1, justifyContent: 'space-between' }}>

                <View style={{ position: "relative", alignItems: 'center', marginBottom: 8, width: '100%', height: '60%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: '#000' }}>
                    <Image source={require('../assets/finish_trophy.png')} style={{ width: '40%', height: '40%', marginTop: 70 }} />
                    <Text style={{ color: '#fff', fontSize: 20 }}>Nice You've Done It!</Text>

                    <Text style={{ color: '#fff', fontSize: 20, marginTop: 100 }}>Exercises: 11 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Duration: 12:00</Text>

                    <Icon name="keyboard-arrow-left" size={40} color="#fff" style={{ position: "absolute", left: 5, top: 15 }} />
                </View>

                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Energy & Persistence</Text>
                    <Text style={{ fontSize: 20, letterSpacing: 1 }}>Conquer All Things</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <LinearGradient
                        colors={['#28313B', '#485461']}
                        style={{ borderRadius: 15, marginBottom: 10, width: '85%' }}
                    >
                        <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }} onPress={() => setIsActive(isActive => !isActive)}>
                            <Text style={{ fontSize: 17, textTransform: 'uppercase', color: '#fff', paddingVertical: 4, paddingHorizontal: 50 }}> 
                                Do It Again
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient
                        colors={['#28313B', '#485461']}
                        style={{ borderRadius: 15, marginBottom: 10, width: '85%' }}
                    >
                        <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }} onPress={() => setIsActive(isActive => !isActive)}>
                            <Text style={{ fontSize: 17, textTransform: 'uppercase', color: '#fff', paddingVertical: 4, paddingHorizontal: 50 }}> 
                                Next
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </>
    );
}

export default Finish;