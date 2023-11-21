// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    accessToken: null,
    refreshToken: null,
    authenticated: null,
  });

  useEffect(() => {
    // Load tokens from SecureStore on component mount
    loadTokens();
  }, []);

  const loadTokens = async () => {
    try {
      const accessToken = await SecureStore.getItemAsync('accessToken');
      const refreshToken = await SecureStore.getItemAsync('refreshToken');

      if (accessToken && refreshToken) {
        setAuthState({
          accessToken,
          refreshToken,
          authenticated: true,
        });
      }
    } catch (error) {
      console.error('Error loading tokens from SecureStore:', error);
    }
  };

  const saveTokens = async (accessToken, refreshToken) => {
    try {
      await SecureStore.setItemAsync('accessToken', accessToken);
      await SecureStore.setItemAsync('refreshToken', refreshToken);
    } catch (error) {
      console.error('Error saving tokens to SecureStore:', error);
    }
  };

  const clearTokens = async () => {
    try {
      await SecureStore.deleteItemAsync('accessToken');
      await SecureStore.deleteItemAsync('refreshToken');
    } catch (error) {
      console.error('Error clearing tokens from SecureStore:', error);
    }
  };

  const logout = async () => {
    try {
      // Clear tokens from SecureStore
      await clearTokens();

      // Reset auth state
      setAuthState({
        accessToken: null,
        refreshToken: null,
        authenticated: false,
      });
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // Getter
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
        saveTokens, // Add the saveTokens function to set tokens in SecureStore
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
