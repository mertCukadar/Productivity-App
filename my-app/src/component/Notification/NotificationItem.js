import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Image } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Dimensions } from "react-native";

export function NotificationItem(props) {
  const { onPress, buttonText, width, disabled, priority, isDone } = props;

  return (
    <View style={styles.NotificationConttainer}>
      {isDone && <View style={styles.doneContainer}></View>}
      <View style={styles.leftSide}>
        <Image style={styles.icon} source={require("../../assets/Notification-Icons/done-icon.png")} />
      </View>

      <View style={styles.elementWrapper}>
        <Text style={styles.itemText}>mert/ProductivityApp/ToDo</Text>
        <Text style={styles.itemSubText}>mertkaan sizi ‘ProductivityApp’ üzerine 2 saatlik çalışmaya davet etti!</Text>
      </View>

      <View style={styles.assignee}>
        <Text style={styles.itemDayText}>1d</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  NotificationConttainer: {
    backgroundColor: '#30373E',
    padding: 20,
    borderRadius: 15,
    width:  Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.15,
    marginTop: 10,
   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
    marginLeft: 5,

  },
  itemDayText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  itemSubText: {
    fontSize: 12,
    color: 'white',
    marginBottom: 5,
    marginLeft: 10,
  },
  priorty: {
    width: 20,
    flexDirection: 'row',
    height: 20,
    backgroundColor: '#34A853',
    borderRadius: 10,
  },
 
  elementWrapper: {
   
    width:  Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

  },
  icon: {
    width: 23,
    height: 23,
    borderRadius: 50,

  },
  doneContainer: {
    width:  Dimensions.get('window').width * 0.8,
    height: 1,
    backgroundColor: '#19A7CE', // Arka plan rengini transparent (saydam) yapın
    position: "absolute",
  },
});
