import React, { useEffect } from 'react'
import { View, Text, Image, StatusBar } from 'react-native';
import { hideNavigationBar } from 'react-native-navigation-bar-color';

const Home = ({ navigation }) => {
    useEffect(() => {
        hideNavigationBar();
        setTimeout(() => {
            navigation.replace('Mode');
        }, 3500);
    }, []);

    return (
        <>
            <StatusBar hidden={true} />
            <View style={{ position: 'relative', flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/home_bg.jpg')} style={{ width: '100%', height: '100%', position: 'absolute' }} />
                <View style={{ position: "absolute", bottom: '7%', left: '3%', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
                    <Image source={require('../assets/icon.png')} style={{ borderRadius: 80, width: 80, height: 80, marginHorizontal: 15 }} />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#eee', textTransform: 'uppercase' }}>Progress Is Progress</Text>
                        <Text style={{ textTransform: 'uppercase', color: '#eee', fontSize: 20, borderBottomWidth: 0.5, borderBottomColor: '#eee' }}>No matter how small</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

export default Home;