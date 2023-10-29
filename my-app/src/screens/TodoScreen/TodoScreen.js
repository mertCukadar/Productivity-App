import React, { useState } from "react";
import { StyleSheet, Text, Pressable, SafeAreaView , View, TextInput , ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { TodoItem } from "../../component/Todo";

function onPressFunction() {
    console.log("pressed");
}




export function TodoScreen(props) {
    const [text , setText] = useState('')
    const [todos , setTodos] = useState([])

    function addTodo() {
        // grep text inpu and add to todo list
        if (text.trim() != '') {
            setTodos([...todos , text]);
            setText('');
        }
    }
    
    return (
            <SafeAreaView style = {{flex : 1}}>
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
                        {todos.map((todo , index) => {
                            return <TodoItem
                            key = {index}
                            todoText = {todo}
                            isDone = {false}/>
                           
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
                    

                </ScrollView>
                </View>

                </View>
            </SafeAreaView>
          
    

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#24292E',
    },
    searchWrapper: {
       
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#2B3137',
        borderRadius: 20,
        marginTop: 50,
        marginBottom: 30,
        width: Dimensions.get("window").width * 0.9,
        height: 50,
    },
    todoWrapper: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: '#2B3137',
        marginBottom: 30,
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.5,
        borderRadius: 20,
    },
    doneWrapper: {
        flex: 2,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#2B3137',
        width: Dimensions.get("window").width * 0.9,
        borderRadius: 20,
        opacity: 0.8,
        marginBottom: 30,
    },
    todoInput: {
        width:  Dimensions.get('window').width * 0.8,
        height: 50,
        backgroundColor: '#30373E',
        borderRadius: 15,
        color: "white",
        fontSize: 17,
        paddingLeft: 50,
        flexWrap: "wrap",
   
      },
      
    todoInputWrapper: {
        justifyContent: "center",
        alignItems: 'center',
        height: 50,
        marginBottom : 7,
        flexDirection: "row",
        marginTop: 7,
        
        
        
    },
    pressableWrapper: {
        position: "absolute",
        left: 0,
        zIndex: 1,
        width: 40,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1d96b6",
        opacity: 0.8,
        
        
    },

    TodoSearchInput: {
        width: Dimensions.get("window").width * 0.9,
        height: 50,
        backgroundColor: '#30373E',
        borderRadius: 15,
        color: "white",
        fontSize: 17,
        paddingLeft: 50,
        
   
      },

      filterIconStyle: {
        position: "absolute",
        left: 0,
        zIndex: 1,
        width: 40,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.5,
        backgroundColor: "#414C57",
    
      }

});

export default TodoScreen;