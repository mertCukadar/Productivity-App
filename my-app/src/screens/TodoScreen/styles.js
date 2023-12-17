import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#24292E',
        justifyContent: "flex-start",
    },
// filter Container
      filterSearchWrapper: {
        flexDirection: "row",
        backgroundColor: "#30373E",
        borderRadius: 15,
        width: Dimensions.get("window").width * 0.9,
        height: 50,
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
        marginTop: 40,
      },
    
      addTodoContainer : {
        position: "absolute",
        flexDirection: "row",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width * 0.15,
        alignItems: "center",
        justifyContent: "center",
        bottom: 10,
               
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
      todoListContainer: {
        width: Dimensions.get("window").width * 0.9,
        justifyContent: "flex-start",
        backgroundColor: "#30373E",
        borderRadius: 15,
        marginTop: 20,
      },
      todoListHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
      },
       
      todoListTitle: {
        color: "white",
        fontSize: 17,
      },
      TodoFilterInput: {
        width: Dimensions.get("window").width * 0.7,
        height: 50,
        backgroundColor: '#30373E',
        borderRadius: 15,
        color: "white",
        fontSize: 17,
      },
});

export  {styles};