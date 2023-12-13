import React, { useState , useEffect , useContext } from "react";
import { StyleSheet, Text, Pressable, View, Image} from 'react-native';
import { Dimensions } from "react-native";
import { TodoModal } from "./ModalView";
import TodoContext from "../../context/TodoContext"




export function TodoItem(props) {
  
  const { todo } = props;
  let assignee , subjectTag , description;

  const todoContext = useContext(TodoContext);


  

  return (
 <View style = {styles.container}>
  <Pressable onPress={() => todoContext.setModalVisible(true)}>
    <View style={styles.todoContainer}>
      {todo.completed && <View style={styles.doneContainer}></View>}
      <View style={styles.leftSide}>
        <View style={styles.priorty}></View>
      </View>

      <View style={styles.elementWrapper}>
        <Text style={styles.itemText}>{todo.title}</Text>
        <View style={styles.subjectTagWrapper}>
          <Text style={{ color: 'white' }}>{todo.subject}</Text>
        </View>
      </View>

      <View style={styles.assignee}>
        <Image
          source={require('../../assets/Todo-Icons/ProfilePhoto-icon.png')}
          style={styles.profilePhoto}
        />
      </View>
    </View>
    </Pressable>
    <TodoModal modalVisible = {todoContext.modalVisible}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  todoContainer: {
    backgroundColor: '#30373E',
    padding: 10,
    borderRadius: 15,
    width:  Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    width:  Dimensions.get('window').width * 0.5,
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
   marginVertical: 5,
   
  },
  profilePhoto: {
    width: 23,
    height: 23,
    borderRadius: 50,
  },
  doneContainer: {
    width:  Dimensions.get('window').width * 0.8,
    height: 1,
    backgroundColor: '#19A7CE', 
    position: "absolute",
  },
  assignee: {
    right: Dimensions.get('window').width * 0.03,
   
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:  Dimensions.get('window').width * 0.1,
  },
});
