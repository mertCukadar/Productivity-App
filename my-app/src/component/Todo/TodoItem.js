import React, { useState , useEffect } from "react";
import { StyleSheet, Text, Pressable, View, Image , Modal , TextInput} from 'react-native';
import CheckBox from 'expo-checkbox';
import { Dimensions } from "react-native";

export function TodoItem(props) {
  const { onPress, todoText, width, disabled, priority, isDone} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [todoFieldText, setTodoFieldText] = useState(todoText);
  const [assigneeText, setAssigneeText] = useState('');
  const [subjectTagText, setSubjectTagText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  let assignee , subjectTag , description;


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
          <Text style={{ color: 'white' }}>{subjectTagText}</Text>
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
            <View style = {{flexDirection: 'row'}}>
            <Text style={styles.modalHeader}>Title</Text>
            </View>
            <TextInput
              style={styles.modalTextInput}
              placeholderTextColor={"white"}
              placeholder="Todo Title"
              value={todoFieldText}
              onChangeText={text => setTodoFieldText(text)}
            />
               <View style = {{flexDirection: 'row'}}>
            <Text style={styles.modalHeader}>Assignee</Text>
               </View>
            <TextInput
              style={styles.modalTextInput}
              placeholderTextColor={"white"}
              placeholder="Assignee"
              value={assigneeText}
              onChangeText={text => setAssigneeText(text)}
            />


                   <View style = {{flexDirection: 'row'}}>
            <Text style={styles.modalHeader}>Subject</Text>
               </View>
            <TextInput
              style={styles.modalTextInput}
              placeholderTextColor={"white"}
              placeholder="Subject Tag"
              value={subjectTagText}
              onChangeText={text => setSubjectTagText(text)}
            />
            
            <View style = {{flexDirection: 'row'}}>
            <Text style={styles.modalHeader}>Description</Text>
               </View>
            <TextInput
              style={styles.modalTextInput}
              placeholderTextColor={"white"}
              placeholder="Description"
              value={descriptionText}
              onChangeText={text => setDescriptionText(text)}
            />

            <View style = {{flexDirection: 'row' , alignItems: "flex-end"}}>
            <Pressable
              style={styles.modalSaveButton}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
            </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },

  modalContent: {
    backgroundColor: '#2B3137',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.7,
  },
  modalTextInput: {
    width: Dimensions.get("window").width * 0.8,
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
    padding: 10,
    alignItems: 'center',
    width: Dimensions.get("window").width * 0.3,
    elevation: 2,
 
  
    
  },
  modalHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    flex: 1,
  },
});
