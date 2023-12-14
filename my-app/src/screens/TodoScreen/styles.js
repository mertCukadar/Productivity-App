import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#24292E',
    },
    filterSearchWrapper: {
        top: 50,
        position: "absolute",
        backgroundColor: '#2B3137',
        borderRadius: 20,
        width: Dimensions.get("window").width * 0.9,
        height: 50,
    },
    TodoFilterInput: {
        width: Dimensions.get("window").width * 0.9,
        height: 50,
        backgroundColor: '#30373E',
        borderRadius: 15,
        color: "white",
        fontSize: 17,
        paddingLeft: 30,
      },

      filterIconStyle: {
        position: "absolute",
        right: 0,
        zIndex: 1,
        width: 40,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.5,
        backgroundColor: "#414C57",
    
      },
      addTodoContainer : {
        position: "absolute",
        bottom: 10,
        flexDirection: "row",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width * 0.15,
        alignItems: "center",
        justifyContent: "center",
       
      },
      plusContainer: {
        width: Dimensions.get("window").width * 0.15,
        height: Dimensions.get("window").width * 0.15,
        borderRadius: 15,
        marginLeft: 10,
        backgroundColor: "#1d96b6",
        alignItems: "center",
        justifyContent: "center",
      },
      TodoSearchInput: {
        width: Dimensions.get("window").width * 0.7,
        height: 50,
        backgroundColor: '#30373E',
        borderRadius: 15,
        color: "white",
        fontSize: 17,
        paddingLeft: 50,
      },
        todoColButton: {
            top: 120,
            position: "absolute",
            width: Dimensions.get("window").width * 0.9,
            backgroundColor: "#30373E",
            borderRadius: 15,

        },
        todoCBText: {
            color: "white",
            fontSize: 17,
            borderRadius: 15,
        },
        todoColButtonContainer:{
            width: Dimensions.get("window").width * 0.9,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 30,
            paddingRight: 25,
            alignItems: "center",
            height : 50,
            borderRadius: 15,
            backgroundColor: "#30373E"
        },
        doneColButton : {
            top: 180,
            position: "absolute",
            height: 50,
            width: Dimensions.get("window").width * 0.9,
            backgroundColor: "#30373E",
            borderRadius: 15,
        },
        
       
});

export  {styles};