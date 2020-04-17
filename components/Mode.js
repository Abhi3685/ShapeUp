import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { showNavigationBar } from 'react-native-navigation-bar-color';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Mode extends Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {
        showNavigationBar();
    }

    render() {
        return (
            <>
                <StatusBar barStyle='dark-content' backgroundColor="#fff" />
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Workout Modes</Text>
                    <Text style={{ marginBottom: 30, color: "#aaa", fontSize: 18, marginBottom: 30, marginHorizontal: 70, textAlign: 'center' }}>Select any one workout mode to continue.</Text>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.push('Exercises')}>
                        <View style={{ marginBottom: 20, elevation: 10, backgroundColor: "#fff", borderRadius: 15 }}>
                            <Image source={require('../assets/mode_1.jpg')} style={{ width: 300, height: 150, borderRadius: 15, position: 'relative' }} />
                            <Text style= {{ fontSize: 22, fontWeight: 'bold', position: 'absolute', color: "#fff", left: 20, bottom: 30 }}>Cardio Warmup</Text>
                            <Text style= {{ fontSize: 12, position: 'absolute', color: "#fff", left: 21, bottom: 15 }}>Estimated Duration: 10 - 15 Minutes</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginBottom: 20, elevation: 10, backgroundColor: "#fff", borderRadius: 15 }}>
                        <Image source={require('../assets/mode_2.jpg')} style={{ width: 300, height: 150, borderRadius: 15, position: 'relative' }} />
                        <Text style= {{ fontSize: 22, fontWeight: 'bold', position: 'absolute', color: "#fff", left: 20, bottom: 30 }}>Six Pack Abs</Text>
                        <Text style= {{ fontSize: 12, position: 'absolute', color: "#fff", left: 21, bottom: 15 }}>Estimated Duration: 40 - 45 Minutes</Text>
                    </View>

                    <View style={{ marginBottom: 20, elevation: 10, backgroundColor: "#fff", borderRadius: 15 }}>
                        <Image source={require('../assets/mode_3.jpg')} style={{ width: 300, height: 150, borderRadius: 15, position: 'relative' }} />
                        <Text style= {{ fontSize: 22, fontWeight: 'bold', position: 'absolute', color: "#fff", left: 20, bottom: 30 }}>Full Body Challenge</Text>
                        <Text style= {{ fontSize: 12, position: 'absolute', color: "#fff", left: 21, bottom: 15 }}>Estimated Duration: 45 - 50 Minutes</Text>
                    </View>
                </View>
            </>
        );
    }
}

export default Mode;