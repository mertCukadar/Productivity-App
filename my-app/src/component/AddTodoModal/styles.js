// ToDoModalStyles.js
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  modalStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  modalContentStyle: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.7,
    backgroundColor: "#414C57",
    borderRadius: 15,
    padding: 15,
  },
  modalHeader: {
    alignItems: "flex-end",
   
  },
  modalContent: {
    flex: 1,
    alignItems: "center",
    height: Dimensions.get("window").height * 0.43,
  },
  modalTextInputContainer: {
    marginTop:10, 
    backgroundColor: "#414C57",
    width: "100%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,

  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "white",
  },
  modalTextInput: {
    
    padding: 15,
    width: "100%",
    fontSize: 16,

  },
  assignContainer: {
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "#353C44",
    alignItems: "center",
    width: Dimensions.get("window").width * 0.75,
    justifyContent: "space-between",  
  },
  assignButton: {
    width: Dimensions.get("window").width * 0.35,
    height: 30,
    backgroundColor: "#414C57",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  assignButtonText: {
    color: "white",
    fontSize: 14,
  },
  SubjectContainer: {
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    height: 50,
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "#353C44",
    alignItems: "center",
    width: Dimensions.get("window").width * 0.75,  
  },
  subjectInput: {
    color: "white",
    fontSize: 16,
    width: "100%",
  },

  estimatedTimeContainer: {
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: Dimensions.get("window").width * 0.75,  
  },


  saveButton: {
    marginTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
    height: 40,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1d96b6",
    width: Dimensions.get("window").width * 0.7,
  },

  attributesContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
