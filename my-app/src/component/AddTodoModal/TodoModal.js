// ToDoModal.js

import React, { useState , useContext} from "react";
import { View, Modal, TextInput, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import SelectDropdown from 'react-native-select-dropdown'
import { TodoContext } from "../../context/TodoContext";

export function ToDoModal(addTodo){
  const [text, setText] = useState("");
  const [isTodoVisible, setTodoVisible] = useState(true);
  const todoContext = useContext(TodoContext);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={todoContext.modelVisible}
      onRequestClose={todoContext.toggleModelVisible}
    >
      <View style={styles.modalStyle}>
        <View style={styles.modalContentStyle}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={todoContext.toggleModelVisible}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContent}>
            <View style={styles.modalTextInputContainer}>
            <TextInput
              style={styles.modalTextInput}
              placeholder="Todo Title"
              placeholderTextColor="white"
              onChangeText={(value) => setText(value)}
            /><View style={styles.line}></View>
           <TextInput 
              style={styles.modalTextInput}
              placeholder="Todo Description"
              placeholderTextColor="white"
              onChangeText={(value) => setText(value)}
            />   
            </View>
            
            <View style = {styles.attributesContainer}>
              <View style = {styles.assignContainer}>
                <Text style = {{color : "white"}}>Assign</Text>
                <SelectDropdown
                  data={["Option 1", "Option 2", "Option 3"]}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText={"Choose Assignee"}
                  buttonStyle={styles.assignButton}
                  buttonTextStyle={styles.assignButtonText}
                  dropdownStyle={styles.assignDropdown}
                  rowStyle={styles.assignRow}
                  rowTextStyle={styles.assignRowText}
                />
              </View>

              <View style = {styles.assignContainer}>
                <Text style = {{color : "white"}}>Priorty</Text>
                <SelectDropdown
                  data={["Option 1", "Option 2", "Option 3"]}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText={"Choose Priorty"}
                  buttonStyle={styles.assignButton}
                  buttonTextStyle={styles.assignButtonText}
                  dropdownStyle={styles.assignDropdown}
                  rowStyle={styles.assignRow}
                  rowTextStyle={styles.assignRowText}
                />
              </View>

              <View style = {styles.SubjectContainer}>
                <TextInput style = {styles.subjectInput}
                placeholder="Subject"
                placeholderTextColor="white"
                ></TextInput>
              </View>

              <TouchableOpacity style = {styles.estimatedTimeContainer}>
                <Text style = {{color : "white" , marginRight : 10}}>Assignment's Estimated date</Text>
                <AntDesign name="calendar" size={24} color="#1d96b6" />
              </TouchableOpacity>

              <TouchableOpacity style = {styles.estimatedTimeContainer}>
                <Text style = {{color : "red" , marginRight : 10}}>Delete the Assignment</Text>
                <AntDesign name="delete" size={20} color="red" />
              </TouchableOpacity>

              
              <TouchableOpacity style = {styles.saveButton}>
                <Text style = {{color : "white"}}>Save</Text>
              </TouchableOpacity>  

            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
