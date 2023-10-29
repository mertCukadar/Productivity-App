import React from "react";
import { StyleSheet, Text, Pressable, SafeAreaView , View, TextInput , ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { NotificationItem } from "../../component/Notification";



function Notification() {
    console.log("pressed");
}

export function NotificationScreen(props) {
    return (
            <SafeAreaView style = {{flex : 1}}>
                     <View style={styles.container}>
            
            {/* Search Component */}
                <View style = {styles.searchWrapper}>
                    <View style = {styles.filterIconStyle}>
                        <AntDesign name="filter" size={24} color="white"  />
                    </View>
                    <TextInput style = {styles.NotificationSearchInput} placeholder=" Search In Notification" placeholderTextColor={"white"}></TextInput>
                </View>

            {/*Todo Component  */}
                <View style = {styles.NotificationWrapper}>
                    <ScrollView>
                    <NotificationItem/>
                    <NotificationItem/>
                    <NotificationItem/>


                    

                    </ScrollView>                  
                </View>

            {/* DoneContainer */}
              </View>
            </SafeAreaView>
          
    

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#24292E',
    },
    searchWrapper: {
       
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#2B3137',
        borderRadius: 20,
        marginTop: 50,
        marginBottom: 30,
        width: Dimensions.get("window").width * 0.9,
        height: 50,
    },
    NotificationWrapper: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: '#2B3137',
        marginBottom: 30,
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.5,
        borderRadius: 20,
    },
     

    NotificationSearchInput: {
        width: Dimensions.get("window").width * 0.9,
        height: 50,
        backgroundColor: '#30373E',
        borderRadius: 15,
        color: "white",
        fontSize: 17,
        paddingLeft: 50,
        
   
      },

      filterIconStyle: {
        position: "absolute",
        left: 0,
        zIndex: 1,
        width: 40,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.5,
        backgroundColor: "#414C57",
    
      }

});

export default NotificationScreen;