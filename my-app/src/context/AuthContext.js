// AuthContext.js
import React, { createContext, useState } from 'react';
import * as Keychain from 'react-native-keychain';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    accessToken: null,
    refreshToken: null,
    authenticated: null,
  });

  const [deneme , setDeneme] = useState("deneme")

  const logout = async () => {
    await Keychain.resetGenericPassword();
    setAuthState({
      accessToken: null,
      refreshToken: null,
      authenticated: false,
    });
  };

  // set getter

  const getAccessToken = () => {
    return authState.accessToken;
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState,
        logout,
        getAccessToken,
        deneme,
        setDeneme,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
