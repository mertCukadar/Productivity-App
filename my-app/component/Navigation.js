import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { Dimensions, StyleSheet, Text, View } from 'react-native';


export function Navigation(){
    return(
        <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
                <Ionicons name="menu-outline" size={40} color="#7289DA" style = {{marginLeft:10, opacity:0.5}} /> 
                <Text style = {styles.pageName}>Kronometre</Text>
                <MaterialIcons name="account-circle" size={35} color="#7289DA"  style = {{marginRight:10 , opacity:0.5}}/>
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
        fontFamily: 'sans-serif',
        color: '#7289DA',
        fontWeight: 'light',
    }
});