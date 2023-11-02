import React from "react";
import { StyleSheet, Text, Pressable, View, TextInput, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export function ProfileInfoScreen(props) {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profilePhotoWrapper}>
        <AntDesign name="user" size={100} color="white" />
      </View>

      <TextInput
        style={styles.inputWrapper}
        placeholder="Name"
        placeholderTextColor="#8A8E91"
        value="Name"
      />

      <TextInput
        style={styles.inputWrapper}
        placeholder="Email"
        placeholderTextColor="#8A8E91"
        value="example@example.com"
      />

      <TextInput
        style={styles.inputWrapper}
        placeholder="Phone"
        placeholderTextColor="#8A8E91"
        value="123-456-7890"
      />

      <TextInput
        style={styles.inputWrapper}
        placeholder="Bio"
        placeholderTextColor="#8A8E91"
        value="This is my bio."
      />

      <View style={{ width: Dimensions.get("window").width * 0.8 , alignItems:"flex-end" , marginTop:20 }}>
        <Pressable
          style={{ backgroundColor: '#1b6b7b', borderRadius: 15, width: Dimensions.get("window").width * 0.35, height: 50, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Text style={{ color: 'white', fontSize: 17 }}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#24292E',
  },
  profilePhotoWrapper: {
    backgroundColor: '#30373E',
    borderRadius: 100,
    width: 130,
    marginBottom: 20,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    width: Dimensions.get("window").width * 0.8,
    height: 50,
    backgroundColor: '#30373E',
    borderRadius: 15,
    color: "white",
    fontSize: 17,
    paddingLeft: 20, // Left padding adjusted
    marginBottom: 10,
    marginTop: 20,
  },
});
