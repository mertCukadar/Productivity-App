import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomTabNavigator } from './src/component/CustomTabNavigator/customTabNavigator';
import { View } from 'react-native';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={CustomTabNavigator}
          options={{ headerShown: false }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
