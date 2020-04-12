import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

const Home = () => {
    return (
        <>
            <StatusBar translucent backgroundColor="#292929" />
            <View style={{ position: 'relative', flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                <View style={{ position: 'absolute', width: "100%", flex: 1, backgroundColor: '#fff', zIndex: 100 }} />
                <Image source={require('../assets/home_bg.jpg')} style={{ width: '100%', height: '100%', position: 'absolute' }} />
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#eee', textTransform: 'uppercase', borderBottomWidth: 2, borderBottomColor: '#eee' }}>Progress Is Progress</Text>
                <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: 2, color: '#eee', fontSize: 20, marginBottom: 60 }}>No matter how small</Text>
            </View>
        </>
    );
}

export default Home;