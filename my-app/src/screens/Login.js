import React, { Fragment } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from "react-native";
import { Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Divider } from '@rneui/themed';

export function Login() {
  const onPress = () => {
    Alert.alert('Button Pressed', 'You pressed the button!', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <Fragment>
      <LinearGradient
        flex={1}
        colors={["#19A7CE", "#AFD3E2", "#F6F1F1"]}
        style={styles.LinearGradient}
      >
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.loginTag}> Logo </Text>
          </View>

          <View style={styles.propContainer}>
            <TextInput style={styles.username} placeholder="Username or Email" />
            <TextInput
              secureTextEntry={true}
              style={styles.password}
              placeholder="Password"
            />

            <Pressable style={styles.button} onPress={onPress}>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>

            <Text style={{ marginTop: 30 }}>
              want to create an account?{" "}
              <Text style={{ color: "#19A7CE" }}>Sign Up</Text>
            </Text>
            <Divider style={styles.divider} />
            <View style={styles.oAuth}>
              <AntDesign name="google" size={24} color="#19A7CE" />
              <Entypo name="linkedin" size={24} color="#19A7CE" />
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
    width: "80%", // windowWidth * 0.8,
    height: "50%", // windowHeight * 0.5,
    borderRadius: 10,
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
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#F6F1F1",
    borderWidth: 1,
    textAlign: "center",
    marginTop: 100,
  },
  title: {
    color: "#F6F1F1",
    fontSize: 50,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  password: {
    width: 250,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#F6F1F1",
    borderWidth: 1,
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: "#19A7CE",
    borderRadius: 5,
    borderColor: "#19A7CE",
    alignItems: "center",
    borderWidth: 1,
    textAlign: "center",
    marginTop: 40,
  },
  loginText: {
    color: "#F6F1F1",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  oAuth: {
    flexDirection: "row",
    marginTop: 40,
    width: 60,
    justifyContent: "space-between",
  },
  divider: {
    marginTop: 40,
    width: 250,
    height: 1,
    backgroundColor: "#146C94",
  },
});

export default Login;
