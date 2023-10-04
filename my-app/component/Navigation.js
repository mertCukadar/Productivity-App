import React from "react";
import { StyleSheet, Text, Pressable , View, Dimensions } from 'react-native';
import { CustomButton } from "./Button";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export function Navigation(){
    return(
        <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
                <Ionicons name="menu-outline" size={30} color="#D9D9D9" style = {{marginLeft:10, opacity:0.5}} /> 
                <Text style = {styles.pageName}>Kronometre</Text>
                <MaterialIcons name="account-circle" size={30} color="#D9D9D9"  style = {{marginRight:10 , opacity:0.5}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
           width: Dimensions.get("window").width * 0.9,
           
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        borderRadius: 10,
        backgroundColor: "#2B3137",
    },

    pageName: {
        fontSize: 20,
        opacity: 0.5,
        fontFamily: 'times new roman',
        color: '#D9D9D9',
        fontWeight: 'light',
    }
});