import React, { useState , useEffect } from "react";
import { StyleSheet, Text, Pressable, View, Image , Modal , TextInput} from 'react-native';
import CheckBox from 'expo-checkbox';
import { Dimensions } from "react-native";

export function TodoItem(props) {
  const { onPress, todoText, width, disabled, priority, isDone , subjectTag = "None" } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [todoFieldText, setTodoFieldText] = useState(todoText);
  const [assigneeText, setAssigneeText] = useState('');
  const [subjectTagText, setSubjectTagText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');


  return (
 <View style = {styles.container}>
  <Pressable onPress={() => setModalVisible(true)}>
    <View style={styles.todoContainer}>
      {isDone && <View style={styles.doneContainer}></View>}
      <View style={styles.leftSide}>
        <View style={styles.priorty}></View>
      </View>

      <View style={styles.elementWrapper}>
        <Text style={styles.itemText}>{todoFieldText}</Text>
        <View style={styles.subjectTagWrapper}>
          <Text style={{ color: 'white' }}>{subjectTag}</Text>
        </View>
      </View>

      <View style={styles.assignee}>
        <Image
          source={require('../../assets/Todo-Icons/ProfilePhoto-icon.png')}
          style={styles.profilePhoto}
        />
      </View>
    </View>
    </Pressable>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Edit Todo</Text>
            <TextInput
              style={styles.modalTextInput}
              placeholderTextColor={"white"}
              placeholder="Todo Title"
              value={todoFieldText}
              onChangeText={text => setTodoFieldText(text)}
            />
            <TextInput
              style={styles.modalTextInput}
              placeholderTextColor={"white"}
              placeholder="Assignee"
              value={assigneeText}
              onChangeText={text => setAssigneeText(text)}
            />
            <TextInput
              style={styles.modalTextInput}
              placeholderTextColor={"white"}
              placeholder="Subject Tag"
              value={subjectTagText}
              onChangeText={text => setSubjectTagText(text)}
            />
            <TextInput
              style={styles.modalTextInput}
              placeholderTextColor={"white"}
              placeholder="Description"
              value={descriptionText}
              onChangeText={text => setDescriptionText(text)}
            />
            <Pressable
              style={styles.modalSaveButton}
              onPress={() => {
                // Handle saving the edited text here
                setModalVisible(false);
              }}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  todoContainer: {
    backgroundColor: '#30373E',
    padding: 10,
    borderRadius: 15,
    width:  Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    width:  Dimensions.get('window').width * 0.5,
    color: 'white',
    marginBottom: 5,
    
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
   marginVertical: 5,
   
  },
  profilePhoto: {
    width: 23,
    height: 23,
    borderRadius: 50,
  },
  doneContainer: {
    width:  Dimensions.get('window').width * 0.8,
    height: 1,
    backgroundColor: '#19A7CE', 
    position: "absolute",
  },
  assignee: {
    right: Dimensions.get('window').width * 0.03,
   
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:  Dimensions.get('window').width * 0.1,
  },
    modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height*0.8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black background
  },
  modalTextInput: {
    width: Dimensions.get("window").width * 0.9,
    height: 50,
    backgroundColor: '#30373E',
    borderRadius: 15,
    color: "white",
    fontSize: 17,
    paddingLeft: 50,
    marginBottom: 10,

  },
  modalSaveButton: {
    backgroundColor: '#1d96b6',
    borderRadius: 5,
    position: 'absolute',
    padding: 10,
    alignItems: 'center',
    width: Dimensions.get("window").width * 0.3,
    elevation: 2,
    right: 0,
    top: 300,
    
  },
});
