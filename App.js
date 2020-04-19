import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Mode from './components/Mode';
import Exercises from './components/Exercises';
import Exercise from './components/Exercise';
import Break from './components/Break';
import Finish from './components/Finish';

const Stack = createStackNavigator();

function App() {
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