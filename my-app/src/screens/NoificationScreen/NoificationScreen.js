import React from "react";
import { StyleSheet, Text, Pressable, SafeAreaView , View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export function NotificationScreen(props) {
    return (
        
           <View style={styles.container}>
                <Text style = {{color:"white"}}>deneme Screen</Text>
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
  
});

