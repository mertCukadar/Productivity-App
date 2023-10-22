import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { Dimensions, StyleSheet, Text, View , Image} from 'react-native';


export function NavigationBar(){
    return(
        <View style = {styles.container}>
            <View style = {styles.menuWrapper}>
            <Image
                style={styles.image}
                source={require('../../assets/Menu-İcons/Notification-icon.png')} 
            />
            </View>

            <View style = {[styles.menuWrapper ,{borderColor : "#1d96b6" , borderWidth: 2,}]}>
            <Image
                style={styles.image }
                source={require('../../assets/Menu-İcons/Timer-icon.png')} 
            />
            </View>

            <View style = {styles.menuWrapper}>
            <Image
                style={styles.image}
                source={require('../../assets/Menu-İcons/ToDo-icon.png')} 
            />
            </View>

            <View style = {styles.menuWrapper}>
            <Image
                style={styles.image}
                source={require('../../assets/Menu-İcons/Profile-icon.png')} 
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: "#2B3137",
       flexDirection: 'row',
       alignItems: 'center',
       borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
       justifyContent: 'space-between',
   },
   menuWrapper: {
       width: 50,
       height: 50,
       borderRadius: 13,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: "#30373E",
   },

   image: {
    width: 28,
    height: 28, 
    resizeMode: 'contain',
}
});