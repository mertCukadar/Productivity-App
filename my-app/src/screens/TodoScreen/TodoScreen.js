import React, { useEffect, useState , useContext } from "react";
import { Text, Pressable, SafeAreaView , View, TextInput , ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { TodoItem } from "../../component/Todo";
import { axiosContext } from "../../context/axiosContext";
import * as SecureStore from 'expo-secure-store';
import { TodoContext } from "../../context/TodoContext";
import { styles } from "./styles";


function onPressFunction() {
    console.log("pressed");
}



export function TodoScreen(props) {
    const todoContext = useContext(TodoContext);
    const {publicAxios} = useContext(axiosContext);

    const [text , setText] = useState('')
    const [todos , setTodos] = useState([])

   
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
                <View style = {styles.searchWrapper}>
                    <View style = {styles.filterIconStyle}>
                        <AntDesign name="filter" size={24} color="white"  />
                    </View>
                    <TextInput
                     style = {styles.TodoSearchInput} 
                     placeholder=" Search In Todo" 
                     placeholderTextColor={"white"}
                     maxLength={40}
                     ></TextInput>
                </View>

            {/*Todo Component  */}
                <View style = {styles.todoWrapper}>
                    <ScrollView>
                        {/* Condition will be refactoring */}
                        {todos.map((todo , index) => {
                            if (todo.completed == false){
                                return <TodoItem
                                key = {index}
                                todo = {todo}/>
                            }
                        })}
                    

                    </ScrollView>

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
                  
                </View>

            {/* DoneContainer */}
              
                <View style = {styles.doneWrapper}>
                <ScrollView>
                    {todos.map((todo , index) => {
                                if (todo.completed == true){
                                    return <TodoItem
                                    key = {index}
                                    todo = {todo}/>
                                }
                            })}
                    

                </ScrollView>
                </View>

                </View>
          
          
    

    );
}



export default TodoScreen;