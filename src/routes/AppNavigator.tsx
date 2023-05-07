import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from '../screens/MapScreen/Index';
import LineScreen from '../screens/LineScreen/Index';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Line" component={LineScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default AppNavigator;