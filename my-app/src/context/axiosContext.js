// axiosContext.js
import React from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const axiosContext = React.createContext();
const { Provider } = axiosContext;




const AxiosProvider = ({ children }) => {
  const LoadJWT = axios.create({
    baseURL: "http://127.0.0.1:8000/api/auth/token/"
  });

  const publicAxios = axios.create({
    baseURL: 'http://192.168.1.5:8002/api',
  });

  return (
    <Provider 
    value={{ 
        LoadJWT ,
        publicAxios
    }}>
      {children}
    </Provider>
  );
}

export { axiosContext, AxiosProvider };
