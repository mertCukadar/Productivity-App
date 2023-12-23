// ToDoModal.js

import React, { useState } from "react";
import { View, Modal, TextInput, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import SelectDropdown from 'react-native-select-dropdown'
import { color } from "@rneui/base";

export function ToDoModal(modalVisible, toggleModal, addTodo){
  const [text, setText] = useState("");

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalStyle}>
        <View style={styles.modalContentStyle}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={toggleModal}>
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
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
