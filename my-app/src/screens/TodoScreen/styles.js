import { StyleSheet, Dimensions } from 'react-native';

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
        marginTop: 50,
        marginBottom: 30,
        width: Dimensions.get("window").width * 0.9,
        height: 50,
    },
    todoWrapper: {
        flex: 3,
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
        borderRadius: 20,
        opacity: 0.8,
        marginBottom: 30,
    },
    todoInput: {
        width:  Dimensions.get('window').width * 0.8,
        height: 50,
        backgroundColor: '#30373E',
        borderRadius: 15,
        color: "white",
        fontSize: 17,
        paddingLeft: 50,
        flexWrap: "wrap",
   
      },
      
    todoInputWrapper: {
        justifyContent: "center",
        alignItems: 'center',
        height: 50,
        marginBottom : 7,
        flexDirection: "row",
        marginTop: 7,
        
        
        
    },
    pressableWrapper: {
        position: "absolute",
        left: 0,
        zIndex: 1,
        width: 40,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1d96b6",
        opacity: 0.8,
        
        
    },

    TodoSearchInput: {
        width: Dimensions.get("window").width * 0.9,
        height: 50,
        backgroundColor: '#30373E',
        borderRadius: 15,
        color: "white",
        fontSize: 17,
        paddingLeft: 50,
        
   
      },

      filterIconStyle: {
        position: "absolute",
        left: 0,
        zIndex: 1,
        width: 40,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.5,
        backgroundColor: "#414C57",
    
      }

});

export  {styles};