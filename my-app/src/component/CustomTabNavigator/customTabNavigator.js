import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TimerScreen } from "../../screens/TimerScreen";
import { NotificationScreen } from "../../screens/NoificationScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";
import { TodoScreen } from "../../screens/TodoScreen";


const Tab = createBottomTabNavigator();

export function CustomTabNavigator() {
  // Define common screen options for all tabs
  const screenOptions = {
    unmountOnBlur: false,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#2B3137',
      height: 70,
      borderRadius: 20,
      marginBottom: 15,
      marginHorizontal: 20,
      borderTopWidth: 0
     

    },
    tabBarItemStyle: {
      backgroundColor: '#30373E',
      marginHorizontal: 12,
      marginVertical: 9,
      borderRadius: 20,
    },
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#24292E"}}>
      <Tab.Navigator {...{ screenOptions }}>
        {/* Todo Tab */}
        <Tab.Screen
          name="Todo"
          component={TodoScreen}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null; // Hide tab label
            },
            tabBarIcon: ({ focused, size }) => (
              <Image
                source={require("../../assets/Menu-Icons/ToDo-icon.png")}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? "#1d96b6" : "gray",
                }}
              />
            ),
          }}
        />

        {/* Timer Tab */}
        <Tab.Screen
          name="Timer"
          component={TimerScreen}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null; // Hide tab label
            },
            tabBarIcon: ({ focused, size }) => (
              <Image
                source={require("../../assets/Menu-Icons/Timer-icon.png")}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? "#1d96b6" : "gray",
                }}
              />
            ),
          }}
        />

        {/* Notification Tab */}
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null; // Hide tab label
            },
            tabBarIcon: ({ focused, size }) => (
              <Image
                source={require("../../assets/Menu-Icons/Notification-icon.png")}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? "#1d96b6" : "gray",
                }}
              />
            ),
          }}
        />

        {/* Profile Tab */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null; // Hide tab label
            },
            tabBarIcon: ({ focused, size }) => (
              <Image
                source={require("../../assets/Menu-Icons/Profile-icon.png")}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? "#1d96b6" : "gray",
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
