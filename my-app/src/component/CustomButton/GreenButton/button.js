import React from "react";
import { View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

export function GreenButton(props) {
    const { onPress, buttonText, width, borderRadius } = props;
    return (
        <View style={[styles.universalContainer]}>
            <View style={[styles.container]}>
                <Pressable style={styles.createAccount}>
                    <Text style={styles.createAccountText}>{buttonText}</Text>
                    <AntDesign name="arrowright" size={24} color="#F6F1F1" />
                </Pressable>
            </View>
        </View>
    );
}

