import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import cardio_exercises from './data/cardio';
import abs_exercises from './data/abs';
import fullBody_exercises from './data/fullBody';
import Home from './components/Home';
import Mode from './components/Mode';
import Exercises from './components/Exercises';
import Exercise from './components/Exercise';
import Break from './components/Break';
import Finish from './components/Finish';

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    AsyncStorage.setItem('Cardio', JSON.stringify(cardio_exercises));
    AsyncStorage.setItem('Abs', JSON.stringify(abs_exercises));
    AsyncStorage.setItem('Full_Body', JSON.stringify(fullBody_exercises));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mode" component={Mode} />
        <Stack.Screen name="Exercises" component={Exercises} />
        <Stack.Screen name="Exercise" component={Exercise} />
        <Stack.Screen name="Break" component={Break} />
        <Stack.Screen name="Finish" component={Finish} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;