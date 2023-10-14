import React from "react";
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Button } from "@rneui/base";


const DontAccount = () => {
    return (
        <View style={styles.universalContainer}>
            <View style={styles.container}>
            <Text style={styles.orText}>Don't have an account?</Text>
            <Pressable style={styles.createAccount}>
                <Text style={styles.createAccountText}>Create Account</Text>
                <AntDesign name="arrowright" size={24} color="#F6F1F1" />
            </Pressable>
            </View>
        </View>
    );
}

styles = StyleSheet.create({
    universalContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: 300,
        justifyContent: "center",
       
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    orText: {
        color: '#F6F1F1', // İstenilen renk
        fontSize: 16, // İstenilen font boyutu
    },
    
    createAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#118974',
        width: 250,
        height: 40,
        borderRadius: 40,
        justifyContent: "center",
        marginTop: 20,
    },
    createAccountText: {
        color: '#F6F1F1',
        fontSize: 16,
        marginRight: 5,
    }
});

export default DontAccount;