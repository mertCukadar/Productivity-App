import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Divider } from '@rneui/themed';


const OrDivider = () => {
    return (
        <View style={styles.universalContainer}>
            <View style={styles.container}>
            <Divider
      style={{ width: 110, margin: 20 }}
      color="#F6F1F1"
      width={1}
    
    />
                <Text style={styles.orText}>OR</Text>
                <Divider
      style={{ width: 110, margin: 20 }}
      color="#F6F1F1"
      width={1}
    
    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    universalContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    orText: {
        color: '#F6F1F1', // İstenilen renk
        fontSize: 16, // İstenilen font boyutu
    },
});

export default OrDivider;
