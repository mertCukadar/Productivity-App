// ToDoModal.js

import React, { useState } from "react";
import { View, Modal, TextInput, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { todoModalStyles } from "./ToDoModalStyles";

const ToDoModal = ({ modalVisible, toggleModal, addTodo }) => {
  const [text, setText] = useState("");

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <View style={todoModalStyles.modalStyle}>
        <View style={todoModalStyles.modalContentStyle}>
          <View style={todoModalStyles.modalHeader}>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={todoModalStyles.modalContent}>
            <TextInput
              style={todoModalStyles.modalTextInput}
              placeholder="Todo Title"
              placeholderTextColor="white"
              onChangeText={(value) => setText(value)}
            />
            <TouchableOpacity
              style={todoModalStyles.modalAddButton}
              onPress={() => {
                addTodo(text);
                toggleModal();
              }}
            >
              <Text style={todoModalStyles.modalAddButtonText}>Add Todo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
