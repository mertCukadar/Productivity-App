import React from "react";
import { View, StyleSheet, Image , Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export function StrikeComp() {
    return (
        <SafeAreaView style={styles.universalContainer}>
            <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/Strike.png')} 
            />
            <Text style = {styles.strikeDay}>3 Days</Text>
        </View>
        </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
    universalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 45,
    },
    image: {
        width: 30,
        height: 60, 
        resizeMode: 'contain',
        
    },
    strikeDay: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'light',
        marginLeft: 10,
    }
    ,
    
});

export default StrikeComp;
