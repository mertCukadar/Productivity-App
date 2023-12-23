import React, { useEffect, useState, useContext } from "react";
import {Text,TouchableOpacity, View,TextInput, ScrollView, Modal, Dimensions,} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { axiosContext } from "../../context/axiosContext";
import * as SecureStore from "expo-secure-store";
import { AdTodoModal } from "../../component/ToDoModal";
import { TodoContext } from "../../context/TodoContext";

import { styles } from "./styles";

function onPressFunction() {
  console.log("pressed");
}

export function TodoScreen(props) {
  const todoContext = useContext(TodoContext);
  const { publicAxios } = useContext(axiosContext);

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isTodoVisible, setTodoVisible] = useState(true);
  const [isDoneVisible, setDoneVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleTodoVisible = () => {
    setTodoVisible(!isTodoVisible);
  };

  const toggleDoneVisible = () => {
    setDoneVisible(!isDoneVisible);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const containerStyle = {
    height: isTodoVisible
      ? Dimensions.get("window").height * 0.65
      : 50,
  };

  const containerStyle2 = {
    height: isDoneVisible
      ? Dimensions.get("window").height * 0.65
      : 50,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await SecureStore.getItemAsync(
          "accessToken"
        );
        const response = await publicAxios.get(
          "/Todo/getTodos/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setTodos(response.data);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchData();
  }, []);

  const todo_data = {
    title: text,
    description: "None",
    subject: "None",
    completed: false,
  };

  async function addTodo() {
    const accessToken = await SecureStore.getItemAsync(
      "accessToken"
    );
    try {
      console.log("Adding todo...");
      console.log("Todo data:", todo_data);
      const response = await publicAxios.post(
        "/Todo/getTodos/",
        todo_data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(
        "Todo added successfully:",
        response.data
      );
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const modalStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };

  const modalContentStyle = {
    width: 300,
    height: 300,
    backgroundColor: "#abb5b3",
    borderRadius: 15,
    padding: 10,
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterSearchWrapper}>
        <TextInput
          style={styles.TodoFilterInput}
          placeholder=" Search In Todo"
          placeholderTextColor={"white"}
          maxLength={40}
        />
        <View style={styles.filterIconStyle}>
          <AntDesign name="filter" size={24} color="white" />
        </View>
      </View>

      <View style={[styles.todoListContainer, containerStyle]}>
        <TouchableOpacity
          onPress={toggleTodoVisible}
          style={styles.todoListHeader}
        >
          <Text style={styles.todoListTitle}>Todo List</Text>
          <AntDesign
            name={isTodoVisible ? "downcircleo" : "upcircleo"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <ScrollView
          style={{
            backgroundColor: "#414C57",
            marginTop: 20,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        ></ScrollView>
      </View>
      <View style={[styles.todoListContainer, containerStyle2]}>
        <TouchableOpacity
          onPress={toggleDoneVisible}
          style={styles.todoListHeader}
        >
          <Text style={styles.todoListTitle}>Done</Text>
          <AntDesign
            name={isDoneVisible ? "downcircleo" : "upcircleo"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <ScrollView
          style={{
            backgroundColor: "#414C57",
            marginTop: 20,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        ></ScrollView>
      </View>

      <View style={styles.addTodoContainer}>
        <TouchableOpacity onPress={toggleModal} style={styles.plusContainer}>
          <Entypo name="plus" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide" //bunu beğenim :)
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={modalStyle}>
          <View style={modalContentStyle}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={toggleModal}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <TextInput
                style={[
                  styles.modalTextInput,
                  {

                    borderRadius: 8,
                    padding: 15,
                    fontSize: 16,
                    backgroundColor: "#82918e",
                    shadowColor: "#000",
                  shadowOffset: {
                    width: 5,
                    height: 5,
                    
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 3.84,
                  elevation: 9,
                  marginTop: -4, 
                  paddingTop: 5,
                  height: 70,
                  
                  },
                ]}
                placeholder="Todo Title"
                placeholderTextColor="white"
                onChangeText={(value) => setText(value)}
                
              />
               <View style={{ borderBottomWidth: 2, borderBottomColor: "#dcdcdc", marginBottom: 10, marginTop: -25, opacity: 0.4 }} />
               <View style={[
            styles.modalTextInput,
            {
            borderRadius: 8,
            padding: 15,
            fontSize: 16,
            backgroundColor: "#82918e",
            shadowColor: "#000",
            shadowOffset: {
             width: 0,
             height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 8,
      marginTop: 20,
      paddingTop: 5,
      height: 180,
      width:250,
      
      
    },
  ]}>
  </View>
              <TouchableOpacity
                style={[styles.modalAddButton, {marginTop:20}]}
                onPress={() => {
                  addTodo();
                  toggleModal();
                }}
              >
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default TodoScreen;
