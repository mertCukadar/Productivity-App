import React, { useState , useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView, Modal , TextInput , Pressable, ScrollView } from "react-native";
import { TodoItem } from "./TodoItem";
import Checkbox from "expo-checkbox";
import { AntDesign } from '@expo/vector-icons';

export function TodoModal(props){
    const { modalVisible , setModalVisible , onPress, todoText, width, disabled, priority, isDone} = props;
    const [todoFieldText, setTodoFieldText] = useState(todoText);
    const [assigneeText, setAssigneeText] = useState('');
    const [subjectTagText, setSubjectTagText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [text , setText] = useState('')
    let assignee , subjectTag , description;
    
    addTodo = () => {
        // grep text inpu and add to todo list
        if (text.trim() != '') {
            setTodos([...todos , text]);
            setText('');
        }
    }
    

    return( 
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        {/*  Title input */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView style = {styles.scrollWrapper}>
            <View style = {{flexDirection: 'row'}}>
            <Text style={styles.modalHeader}>Title</Text>
            </View>
            <TextInput
              style={styles.modalTextInput}
              value={todoFieldText}
              onChangeText={text => setTodoFieldText(text)}
            />

            {/* Assignee input */}
               <View style = {{flexDirection: 'row'}}>
            <Text style={styles.modalHeader}>Assignee</Text>
               </View>
            <TextInput
              style={styles.modalTextInput}
              value={assigneeText}
              onChangeText={text => setAssigneeText(text)}
            />

            {/* Subject input */}
                   <View style = {{flexDirection: 'row'}}>
            <Text style={styles.modalHeader}>Subject</Text>
               </View>
            <TextInput
              style={styles.modalTextInput}
              value={subjectTagText}
              onChangeText={text => setSubjectTagText(text)}
            />

            <View style = {{flexDirection: 'row'}}>
                <Text style={styles.modalHeader}>SubTasks</Text>
            </View>
            <View style = {styles.subTodoWrapper}>
                <View style = {styles.subTodoItem}>
                    <Checkbox style = {styles.checkboxStyle} value = {false}/>
                    <Text style = {styles.subTodoText}>Sub Todo</Text>
                </View>
            </View>
            <View style = {styles.subTodoWrapper}>
                <View style = {styles.subTodoItem}>
                    <Checkbox style = {styles.checkboxStyle} value = {true}/>
                    <Text style = {styles.subTodoText}>Sub Todo</Text>
                </View>
            </View>
            <View style = {styles.subTodoWrapper}>
                <View style = {styles.subTodoItem}>
                    <Checkbox style = {styles.checkboxStyle} value = {false}/>
                    <Text style = {styles.subTodoText}>Sub Todo</Text>
                </View>
            </View>

            <View style = {styles.todoInputWrapper}>
                        <Pressable onPress={addTodo} style = {styles.pressableWrapper}>
                            <AntDesign name="plus" size={24} color="white" />
                        </Pressable>
                        <TextInput
                        placeholder="Add Todo"
                        placeholderTextColor={"white"}
                        style = {styles.todoInput}
                        onChangeText={(newText) => setText(newText)}
                        defaultValue={text}
                        ></TextInput>
                     </View>
                  
            




            
            {/* Description input */}
            <View style = {{flexDirection: 'row'}}>
            <Text style={styles.modalHeader}>Description</Text>
            </View>
            <TextInput
              style={styles.modalTextInput}
              value={descriptionText}
              onChangeText={text => setDescriptionText(text)}
            />

            </ScrollView>

            {/* Save button */}
            <View style = {styles.saveButtonWrapper}>
            <Pressable
              style={styles.modalSaveButton}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#24292E',
    },

    modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    },

    modalContent: {
    backgroundColor: '#2B3137',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.7,
    },
    modalTextInput: {
    width: Dimensions.get("window").width * 0.8,
    height: 50,
    backgroundColor: '#30373E',
    borderRadius: 15,
    color: "white",
    fontSize: 17,
    paddingLeft: 50,
    marginBottom: 10,

    },
    modalSaveButton: {
    backgroundColor: '#1d96b6',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: Dimensions.get("window").width * 0.3,
    elevation: 2,
    },

    modalHeader: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    flex: 1,
    },

    saveButtonWrapper: {
        width: Dimensions.get("window").width * 0.8,
        alignItems: "flex-end"
        
    },

    subTodoItem: {
        width: Dimensions.get("window").width * 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        height: 40,
        backgroundColor: '#30373E',
        borderRadius: 15,
    },

    checkboxStyle: {
        marginLeft: 15,
        marginRight: 20,
    },

    subTodoText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'normal',
    },

    scrollWrapper: {
       width: Dimensions.get("window").width * 0.8,

    },

    todoInputWrapper: {
        alignItems: 'center',
        height: 45,
        marginBottom : 7,
        flexDirection: "row",
        marginTop: 7,
        backgroundColor: '#30373E',
        borderRadius: 15,
        
        
        
    },
    pressableWrapper: {
      
        marginRight: 10,
        zIndex: 1,
        width: 40,
        height: 45,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#1b6b7b',
    },
})