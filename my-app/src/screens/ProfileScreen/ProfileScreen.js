import React from "react";
import { StyleSheet, Text, Pressable, SafeAreaView , View, TextInput , Button, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TodoItem } from "../../component/Todo/TodoItem";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";




export function ProfileScreen(props) {
    const navigation = useNavigation();
    const {logout} = useContext(AuthContext);

    const onLogout = async () => {
        await logout();
    }
    return (
  

       <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate("ProfileInfoScreen")} style = {styles.pressableWrapper}>
                    <AntDesign name="profile" size={24} color="white" style = {styles.antdesingWrapper} />
                    <Text style = {{color:"white"}}>ProfileInfo</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("ProfileInfoScreen")} style = {styles.pressableWrapper}>
                    <AntDesign name="barschart" size={24} color="white" style = {styles.antdesingWrapper} />
                    <Text style = {{color:"white"}}>Statistics</Text>
                </Pressable>

                <Pressable onPress={onLogout} style = {styles.pressableWrapper}>
                    <MaterialIcons name="logout" size={24} color="white" style = {styles.antdesingWrapper} />
                    <Text style = {{color:"white"}}>Log Out</Text>
                </Pressable>
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
    pressableWrapper: {
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.1,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: '#30373E',
        borderRadius: 20,
        flexDirection: "row",
        padding: 20,
        
      
    },
    antdesingWrapper: {
        marginRight: 20,

    },


    
    
});

