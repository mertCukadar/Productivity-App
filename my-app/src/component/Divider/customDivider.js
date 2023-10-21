import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Divider } from '@rneui/themed';
import { styles } from "./styles";


export function CustomDivider(props) {
    const { dividerText } = props;
    return (
        <View style={styles.universalContainer}>
            <View style={styles.container}>
            <Divider
      style={{ width: 110, margin: 20 }}
      color="#F6F1F1"
      width={1}
    
    />
                <Text style={styles.orText}>{dividerText}</Text>
                <Divider
      style={{ width: 110, margin: 20 }}
      color="#F6F1F1"
      width={1}
    
    />
            </View>
        </View>
    );
}




