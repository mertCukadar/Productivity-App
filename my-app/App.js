// App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomTabNavigator } from './src/component/CustomTabNavigator/customTabNavigator';
import { ProfileInfoScreen } from './src/screens/ProfileInfoScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import * as SystemUI from "expo-system-ui";
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import { axiosContext, AxiosProvider } from './src/context/axiosContext'; // AxiosProvider import ekledim

SystemUI.setBackgroundColorAsync("#24292E");

const Stack = createNativeStackNavigator();

const AppWrapper = () => {
  return (
    <AuthProvider>
      <AxiosProvider>
        <App />
      </AxiosProvider>
    </AuthProvider>
  );
}

function App() {
  const { authState, setAuthState, getAccessToken } = useContext(AuthContext);
  const LoadJWT = useContext(axiosContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState.authenticated === null || authState.authenticated === false ? (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppWrapper;
