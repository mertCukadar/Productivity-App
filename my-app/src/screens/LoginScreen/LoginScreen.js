import React, { Fragment } from "react";
import {StyleSheet,Text, View, TextInput, Pressable } from "react-native";
import { Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { CustomDivider } from "../../component/Divider";
import { GreenButton } from "../../component/CustomButton/GreenButton";
import { Alert } from "react-native";
import { BlueButton } from "../../component/CustomButton/BlueButton";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { axiosContext } from "../../context/axiosContext";
import { useState } from "react";
import { useEffect } from "react";
import * as Keychain from 'react-native-keychain';



export function LoginScreen() {
  const { authState, setAuthState, logout, getAccessToken } = useContext(AuthContext);
  const {publicAxios} = useContext(axiosContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    try {
      console.log("username", username);
      const response = await publicAxios.post("/auth/token/", {
        username,
        password,
      });
      
      console.log("response data", response.data);
      
      const { accessToken, refreshToken } = response.data;
      console.log(accessToken, refreshToken);
      
      setAuthState({
        accessToken,
        refreshToken,
        authenticated: true,
      });

      await Keychain.setGenericPassword(
        'token',
        JSON.stringify({
          accessToken,
          refreshToken,
        }),
      );
    } catch (error) {
      console.error('Error during login request:', error.response.data);
      Alert.alert('Login Failed', error.response.data.message);
    }
  };


  const onPress = () => {
    Alert.alert('Button Pressed', 'You pressed the button!', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };



  return (
    <Fragment>
      <LinearGradient
        flex={1}
        colors={["#252B31", "#24292E" ]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.loginTag}> BRAND </Text>
          </View>

          <View style={styles.propContainer}>
            <View style={styles.loginInputContainer}>
            <TextInput
        style={styles.username}
        placeholder="Username or Email"
        onChangeText={text => setUsername(text)}
        value={username}
      />

<TextInput
        secureTextEntry={true}
        style={styles.password}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
      />
              <Pressable style={styles.button} onPress={onLogin}>
                <Text style={styles.loginText}>Login</Text>
              </Pressable>



            </View>
            <Text style={styles.FpasswordText}>
              Forgot your password?{" "}
            </Text>
            <CustomDivider dividerText = "OR"/>
            <View style={styles.oAuth}>
              <GreenButton buttonText = "Create Account"/>
            </View>
          </View>
        </View>
      </LinearGradient>
    </Fragment>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  propContainer: {
    width: "80%",
    height: "50%",
    borderRadius: 20,
    alignItems: "center",
  },
  loginTag: {
    color: "#F6F1F1",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  username: {
    width: 250,
    height: 40,
    backgroundColor: "#F6F1F1",
    borderRadius: 20,
    borderColor: "#F6F1F1",
    borderWidth: 1,
    textAlign: "center",
  },
  title: {
    color: "#F6F1F1",
    fontSize: 50,
    marginVertical: 50,
  },
  password: {
    width: 250,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#F6F1F1",
    borderWidth: 1,
    textAlign: "center",
    marginTop: 18,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: "#19A7CE",
    borderRadius: 20,
    borderColor: "#19A7CE",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 19,
  },
  loginText: {
    color: "#F6F1F1",
    fontSize: 15,
    fontWeight: "bold",
  },
  oAuth: {
    width: 300,
    
  },
  divider: {
    marginTop: 40,
    width: 250,
    height: 1,
    backgroundColor: "#146C94",
  },
  loginInputContainer: {
    backgroundColor: '#30373E',
    borderRadius: 20,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    colors: ["#252B31", "#24292E"],
  },
  FpasswordText: {
    color: "#19A7CE",
    marginTop: 10,
  },

});

export default LoginScreen;
