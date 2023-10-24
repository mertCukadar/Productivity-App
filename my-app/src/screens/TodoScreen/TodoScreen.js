import React from "react";
import { StyleSheet, Text, Pressable, SafeAreaView , View, TextInput , ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { TodoItem } from "../../component/Todo";



export function TodoScreen(props) {
    return (
    
           <View style={styles.container}>
            
            {/* Search Component */}
                <View style = {styles.searchWrapper}>
                    <Text style = {{color : "white"}}>search panel</Text>
                </View>

            {/*Todo Component  */}
                <View style = {styles.todoWrapper}>
                    <ScrollView>
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />

                    </ScrollView>
                </View>

            {/* DoneContainer */}
                <View style = {styles.doneWrapper}>
                    <Text style = {{color : "white"}}>done panel</Text>
                </View>
            
            </View>
    

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
        marginTop: 30,
        marginBottom: 30,
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.1,
    },
    todoWrapper: {
        flex: 4,
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
        height: Dimensions.get("window").height * 0.5,
        borderRadius: 20,
        marginBottom: 30,
    },
});

export default TodoScreen;