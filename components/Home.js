import React, { useEffect } from 'react'
import { View, Text, Image, StatusBar } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
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
                <View style={{ position: "absolute", bottom: '5%', left: '3%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flex: 1 }}>
                    <Image source={require('../assets/icon.png')} style={{ borderRadius: 80, width: RFPercentage(10), height: RFPercentage(10), marginHorizontal: 15 }} />
                    <View>
                        <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', color: '#eee', textTransform: 'uppercase' }}>Progress Is Progress</Text>
                        <Text style={{ textTransform: 'uppercase', color: '#eee', fontSize: RFPercentage(3), borderBottomWidth: 0.5, borderBottomColor: '#eee' }}>No matter how small</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

export default Home;