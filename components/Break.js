import React, { useEffect, useState } from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const Break = () => {
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        let interval = null;
        if (timeLeft != 0) {
            interval = setInterval(() => {
                setTimeLeft(seconds => seconds - 1);
            }, 1000);
        } else {
            // Redirect to next exercise
            clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [timeLeft]);

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor="#fff" />

            <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Break Time</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(0,0,0,0.05)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>{timeLeft}s Left</Text>

                <LinearGradient
                    colors={['#28313B', '#485461']}
                    style={{ borderRadius: 15, width: '40%' }}
                >
                    <TouchableOpacity style={{ padding: 10, borderRadius: 15, alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, color: '#fff', padding: 4 }}>Skip</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '70%', paddingHorizontal: 15, paddingVertical: 8 }}>
                    <Text style={{ color: '#aaa', fontSize: 18 }}>Up Next</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Jumping Jacks</Text>
                    <Text style={{ color: '#00f', fontSize: 18, fontWeight: 'bold' }}>x10</Text>
                </View>
                <Image source={require('../assets/cardio_1.gif')} style={{ width: '30%', height: 100 }} />
            </View>
        </>
    );
}

export default Break;