import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { Dimensions, Text, View , Image} from 'react-native';
import { styles } from "./styles";

export function NavigationBar(){
    return(
        <View style = {styles.container}>
            <View style = {styles.menuWrapper}>
            <Image
                style={styles.image}
                source={require('../../assets/Menu-Icons/Notification-icon.png')} 
            />
            </View>

            <View style = {[styles.menuWrapper ,{borderColor : "#1d96b6" , borderWidth: 2,}]}>
            <Image
                style={styles.image }
                source={require('../../assets/Menu-Icons/Timer-icon.png')} 
            />
            </View>

            <View style = {styles.menuWrapper}>
            <Image
                style={styles.image}
                source={require('../../assets/Menu-Icons/ToDo-icon.png')} 
            />
            </View>

            <View style = {styles.menuWrapper}>
            <Image
                style={styles.image}
                source={require('../../assets/Menu-Icons/Notification-icon.png')} 
            />
            </View>
        </View>
    );
}

