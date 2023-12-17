import React, { useEffect, useState , useContext } from "react";
import { Text, TouchableOpacity, SafeAreaView , View, TextInput , ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { TodoItem } from "../../component/Todo";
import { axiosContext } from "../../context/axiosContext";
import * as SecureStore from 'expo-secure-store';
import { TodoContext } from "../../context/TodoContext";
import { Entypo } from '@expo/vector-icons';
import { styles } from "./styles";
import { KeyboardAvoidingView } from "react-native";


function onPressFunction() {
    console.log("pressed");
}



export function TodoScreen(props) {
    const todoContext = useContext(TodoContext);
    const {publicAxios} = useContext(axiosContext);

    const [text , setText] = useState('')
    const [todos , setTodos] = useState([])
    const [isTodoVisible , setTodoVisible] = useState(false)
    const [isDoneVisible , setDoneVisible] = useState(false)

    const toggleTodoVisible = () => {
        setTodoVisible(!isTodoVisible)
    }

    const toggleDoneVisible = () => {
        setDoneVisible(!isDoneVisible)
    }


    const containerStyle = {
        height: isTodoVisible ? Dimensions.get("window").height * 0.6 : 50,
      };

    const containerStyle2 = {
        height: isDoneVisible ? Dimensions.get("window").height * 0.6 : 50,
        };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = await SecureStore.getItemAsync('accessToken');
                const response = await publicAxios.get('/Todo/getTodos/', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });
                setTodos(response.data);
            } catch (error) {
                console.error('Error :', error);
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
        // grep text input and add to todo list
        const accessToken = await SecureStore.getItemAsync('accessToken');
        try {
            console.log('Adding todo...');
            console.log('Todo data:', todo_data);
            const response = await publicAxios.post('/Todo/getTodos/', todo_data, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            console.log('Todo added successfully:', response.data);
            // assuming response.data contains the added todo
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    // Make sure you have the necessary imports like SecureStore and publicAxios
    
    
    return (
          
            <View style={styles.container}>
            
            {/* Search Component */}
                <View style = {styles.filterSearchWrapper}>
                    <TextInput
                     style = {styles.TodoFilterInput} 
                     placeholder=" Search In Todo" 
                     placeholderTextColor={"white"}
                     maxLength={40}
                     ></TextInput>
                     <View style = {styles.filterIconStyle}>
                        <AntDesign name="filter" size={24} color="white"  />
                    </View>
                </View>   

                {/* Todo List Component */}
                <View style={[styles.todoListContainer, containerStyle]}>
                    <TouchableOpacity onPress = {toggleTodoVisible} style = {styles.todoListHeader}>
                        <Text style = {styles.todoListTitle}>Todo List</Text>
                        <AntDesign name="downcircleo" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.todoListContainer, containerStyle2]}>
                    <TouchableOpacity onPress = {toggleDoneVisible} style = {styles.todoListHeader}>
                        <Text style = {styles.todoListTitle}>Done</Text>
                        <AntDesign name="downcircleo" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                
               


                <View style = {styles.addTodoContainer}>
                    <TextInput 
                    placeholder="Add Todo"
                    placeholderTextColor={"white"}
                    style = {styles.TodoSearchInput}
                    >

                    </TextInput>
                    <TouchableOpacity onPress = {onPressFunction} style = {styles.plusContainer}>
                        <Entypo name="plus" size={25} color="black" />
                    </TouchableOpacity>
                </View> 

                
                

            </View>

               
          
          
    

    );
}



export default TodoScreen;