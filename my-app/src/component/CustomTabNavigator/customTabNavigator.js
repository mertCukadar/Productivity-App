import React from "react";
import { View, Text , Image} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainPage } from "../../screens/MainPage";
import { Login } from "../../screens/Login";

const Tab = createBottomTabNavigator();


export function CustomTabNavigator() {
    
    const screenOptions = {
        unmountOnBlur: false,
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#2B3137',
            height: 70,
            borderRadius : 20,
            marginBottom: 20,
            marginHorizontal: 20,
            
           
        },
        tabBarItemStyle: {
            backgroundColor: '#30373E',
            margin: 10,
            borderRadius: 20,
        },

         labelStyle: {
    display: 'none', // This line hides the tab title
  },

        
        
    };

    return (
        
        <View style={{ flex: 1 , backgroundColor:"#24292E"}}>
             <Tab.Navigator 
        {...{screenOptions }}
        >
        <Tab.Screen name="MainPage" component={MainPage} options={{ headerShown: false, 
        tabBarLabel:() => {return null},
        tabBarIcon: ({ focused, size }) => (
            <Image
                source={require("../../assets/Menu-Icons/Notification-icon.png")}
                style={{ 
                    width: size,
                    height: size,
                    tintColor: focused ? "#1d96b6" : "gray", }}
            />
        ),}}/>
      
        
        <Tab.Screen name="ToDo" component={Login} options={{ headerShown: false , tabBarLabel:() => {return null}, tabBarIcon: ({ focused, size }) => (
            <Image
                source={require("../../assets/Menu-Icons/Timer-icon.png")}
                style={{ 
                    width: size,
                    height: size,
                    tintColor: focused ? "#1d96b6" : "gray", }}
            />
        ),}}/>
      
        <Tab.Screen name="Notification" component={Login} options={{ headerShown: false , tabBarLabel:() => {return null}, tabBarIcon: ({ focused, size }) => (
            <Image
                source={require("../../assets/Menu-Icons/ToDo-icon.png")}
                style={{ 
                    width: size,
                    height: size,
                    tintColor: focused ? "#1d96b6" : "gray", }}
            />
        ), }}/>
        <Tab.Screen name="Profile" component={Login} options={{
            headerShown: false ,
            tabBarLabel:() => {return null},

            tabBarIcon: ({ focused, size }) => (
            <Image
                source={require("../../assets/Menu-Icons/Profile-icon.png")}
                style={{ 
                    width: size,
                    height: size,
                    tintColor: focused ? "#1d96b6" : "gray", }}
            />
        ),}}/>
       
       
        </Tab.Navigator>
        </View>
       
    );


    
    }
