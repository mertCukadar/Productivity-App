import React , {useState} from "react";
import { StyleSheet, Text, Pressable , View , Image } from 'react-native';
import CheckBox from 'expo-checkbox';

export function TodoItem(props) {
  const { onPress, buttonText, width, disabled , priorty } = props;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.todoContainer}>

    <View style={styles.leftSide}>
      <View style={styles.priorty}></View>
    </View>

    <View style={styles.elementWrapper}>
      <Text style={styles.itemText}>To do list item</Text>

      <View style={styles.subjectTagWrapper}>
        <Text style = {{color : "white"}}>Subject Tag</Text>
      </View>

    </View>

    <View style={styles.assignee}>
      <Image source={require('../../assets/Todo-Icons/ProfilePhoto-icon.png')} style = {styles.profilePhoto}/>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: '#30373E',
        padding: 10,
        borderRadius: 15,
        width: 300,
        height: 70,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

      },
      itemText: {
        fontSize: 16,
        color: 'white',
        marginBottom: 5,
      },
      status: {
        width: 20,
        flexDirection: 'row',
        height: 20,
        backgroundColor: '#FF6969',
        borderRadius: 10,
      },
      priorty: {
        width: 20,
        flexDirection: 'row',
        height: 20,
        backgroundColor: '#34A853',
        borderRadius: 10,
      },
      subjectTagWrapper: {
        backgroundColor: '#A6A0A0',
        width: 85,
        height: 22,
        borderRadius: 10,
        alignItems: 'center',
        opacity: 0.5,
        padding: 1,
      },

      elementWrapper: {

        marginRight: 70,
      },
      profilePhoto : {
        width: 23,
        height: 23,
        borderRadius: 50,
      },
});