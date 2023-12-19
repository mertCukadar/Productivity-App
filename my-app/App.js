// App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomTabNavigator } from './src/component/CustomTabNavigator/customTabNavigator';
import { ProfileInfoScreen } from './src/screens/ProfileInfoScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import * as SystemUI from "expo-system-ui";
import { Spinner } from './src/component/Spinner';
import * as SecureStore from 'expo-secure-store';
import { useCallback } from 'react';
import { useEffect , useState} from 'react';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import { axiosContext, AxiosProvider } from './src/context/axiosContext'; // AxiosProvider import ekledim
import { TodoProvider } from './src/context/TodoContext';

SystemUI.setBackgroundColorAsync("#24292E");

const Stack = createNativeStackNavigator();

const AppWrapper = () => {
  return (
    <AuthProvider>
      <AxiosProvider>
        <TodoProvider>
        <App />
        </TodoProvider>
      </AxiosProvider>
    </AuthProvider>
  );
}

function App() {
  const { authState, setAuthState, getAccessToken } = useContext(AuthContext);
  const authAxios = useContext(axiosContext);

  const [status, setStatus] = useState('loading');

  const loadJWT = useCallback(async () => {
    try {
      const jwt = await SecureStore.getItemAsync('accessToken');
      //console.log('JWT from SecureStore:', jwt);
  
      if (jwt) {
        setAuthState({
          accessToken: jwt,
          refreshToken: null, // You may need to handle refresh token separately if needed
          authenticated: true,
        });
        setStatus('success');
      } else {
        setStatus('error');
        console.log('Stored JWT is empty.');
        setAuthState({
          accessToken: null,
          refreshToken: null,
          authenticated: false,
        });
      }
    } catch (error) {
      setStatus('error');
      console.log(`SecureStore Error: ${error.message}`);
      setAuthState({
        accessToken: null,
        refreshToken: null,
        authenticated: false,
      });
    }
  }, []);
  
  

  useEffect(() => {
    loadJWT();
  }, [loadJWT]);

  if (status === 'loading') {
    return <Spinner />;
  }
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState.authenticated === true ? (
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
  
  

};

 


export default AppWrapper;
