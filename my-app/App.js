// App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomTabNavigator } from './src/component/CustomTabNavigator/customTabNavigator';
import { ProfileInfoScreen } from './src/screens/ProfileInfoScreen';
import * as SystemUI from "expo-system-ui";
import { AuthContext, AuthProvider } from './src/context/AuthContext';

SystemUI.setBackgroundColorAsync("#24292E");

const Stack = createNativeStackNavigator();

const AppWrapper = () => {
  return (
    <AuthProvider> 
      <App />
    </AuthProvider>
  );
}

function App() {
  const { getAccessToken , deneme , setDeneme } = useContext(AuthContext);

  console.log("deneme",deneme)
  setDeneme("deneme2")
  console.log("deneme",deneme)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CustomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileInfoScreen"
          component={ProfileInfoScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppWrapper;
