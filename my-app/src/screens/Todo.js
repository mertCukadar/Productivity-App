import React from "react";
import { StyleSheet, Text, Pressable, SafeAreaView , View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TodoItem } from "../component/Todo/TodoItem";

export function Todo(props) {
    return (
        <LinearGradient flex={1} colors={['#AFD3E2', '#F6F1F1']}>
            <View style={styles.container}>
                <TodoItem />
                <TodoItem />
                
            </View>
        <View style={styles.todoInputContainer}>
        <TextInput style={styles.todoInput} placeholder="Add a new task" />
        <Pressable style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
        </View>

        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    todoInput: {
        backgroundColor: '#AFD3E2',
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 250,
        height: 45,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 30,
    },

    todoInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    addButton: {
        backgroundColor: '#FF6969',
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: 50,
        height: 45,
        marginTop: 20,
        marginRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
       
        alignItems: 'center',
        justifyContent: 'center',

    },
});

export default Todo;