import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
     backgroundColor: "#2B3137",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
         paddingHorizontal: 20,
         paddingVertical: 10,
        justifyContent: 'space-between',
    },
    menuWrapper: {
        width: 50,
        height: 50,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#30373E",
    },
 
    image: {
     width: 28,
     height: 28, 
     resizeMode: 'contain',
 }
 });

 export { styles };