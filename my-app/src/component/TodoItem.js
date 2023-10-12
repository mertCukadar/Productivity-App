import React , {useState} from "react";
import { StyleSheet, Text, Pressable , View } from 'react-native';
import CheckBox from 'expo-checkbox';

export function TodoItem(props) {
  const { onPress, buttonText, width, disabled } = props;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.todoContainer}>
    <View style={styles.leftSide}>
      <CheckBox
        checked={toggleCheckBox}
        onPress={() => setToggleCheckBox(!toggleCheckBox)}
        style={{ marginRight: 10 }}
      />
      <Text style={styles.itemText}>To do list item</Text>
    </View>

    <View style={styles.status}></View>
  </View>
  );
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: '#F6F1F1',
        padding: 10,
        borderRadius: 10,
        width: 300,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      itemText: {
        fontSize: 18,
        color: 'black',
      },
      status: {
        width: 20,
        flexDirection: 'row',
        height: 20,
        backgroundColor: '#FF6969',
        borderRadius: 10,
      },
      leftSide: {
        flexWrap: 'wrap',
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
});