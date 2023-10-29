import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Image } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Dimensions } from "react-native";

export function TodoItem(props) {
  const { onPress, buttonText, width, disabled, priority, isDone } = props;

  return (
    <View style={styles.todoContainer}>
      {isDone && <View style={styles.doneContainer}></View>}
      <View style={styles.leftSide}>
        <View style={styles.priorty}></View>
      </View>

      <View style={styles.elementWrapper}>
        <Text style={styles.itemText}>To do list item</Text>
        <View style={styles.subjectTagWrapper}>
          <Text style={{ color: 'white' }}>Subject Tag</Text>
        </View>
      </View>

      <View style={styles.assignee}>
        <Image
          source={require('../../assets/Todo-Icons/ProfilePhoto-icon.png')}
          style={styles.profilePhoto}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: '#30373E',
    padding: 10,
    borderRadius: 15,
    width:  Dimensions.get('window').width * 0.8,
    height: 66,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  priorty: {
    width: 20,
    flexDirection: 'row',
    height: 20,
    backgroundColor: '#34A853',
    borderRadius: 10,
  },
  subjectTagWrapper: {
    backgroundColor: '#A6A0A0',
    width: 85,
    height: 22,
    borderRadius: 10,
    alignItems: 'center',
    opacity: 0.5,
    padding: 1,
  },
  elementWrapper: {
    marginRight: 70,
  },
  profilePhoto: {
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
