// axiosContext.js
import React from 'react';
import axios from 'axios';
import { AuthContext, AuthProvider } from './AuthContext';
import * as SecureStore from 'expo-secure-store';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const axiosContext = React.createContext();
const { Provider } = axiosContext;





const AxiosProvider = ({ children }) => {
  const authContext = React.useContext(AuthContext);

  const authAxios  = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
  });

  const publicAxios = axios.create({
    baseURL: 'http://192.168.1.7:8002/api',
  });

  authAxios.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  const refreshAuthLogic = failedRequest => {
    const data = {
      refreshToken: authContext.authState.refreshToken,
    };

    const options = {
      method: 'POST',
      data,
      url: 'http://localhost:3001/api/token/refresh',
    };

    return axios(options)
      .then(async tokenRefreshResponse => {
        failedRequest.response.config.headers.Authorization =
          'Bearer ' + tokenRefreshResponse.data.accessToken;

        authContext.setAuthState({
          ...authContext.authState,
          accessToken: tokenRefreshResponse.data.accessToken,
        });

        await SecureStore.setItemAsync(
          'token',
          JSON.stringify({
            accessToken: tokenRefreshResponse.data.accessToken,
            refreshToken: authContext.authState.refreshToken,
          }),
        );

        return Promise.resolve();
      })
      .catch(e => {
        authContext.setAuthState({
          accessToken: null,
          refreshToken: null,
        });
      });
  };

  createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});
  return (
    <Provider 
    value={{ 
      authAxios,
      publicAxios
    }}>
      {children}
    </Provider>
  );
}

export { axiosContext, AxiosProvider };
