import React from "react";
import { StyleSheet, Text, Pressable, SafeAreaView , View, TextInput } from 'react-native';

export function ProfileInfoScreen(props) {
    return (
       
       <View style={styles.container}>
            <Text style = {{color:"white"}}>ProfileInfo Screen</Text>

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

