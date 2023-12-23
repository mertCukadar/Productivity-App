// ToDoModalStyles.js
import { StyleSheet } from "react-native";

export const ToDoModalStyles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContentStyle: {
    width: 300,
    height: 300,
    backgroundColor: "#abb5b3",
    borderRadius: 15,
    padding: 10,
  },
  modalHeader: {
    alignItems: "flex-end",
  },
  modalContent: {
    alignItems: "center",
  },
  modalTextInput: {
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: "#82918e",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 9,
    marginTop: -4,
    paddingTop: 5,
    height: 70,
  },
  modalAddButton: {
    backgroundColor: "#2c3e50",
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
  },
  modalAddButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
