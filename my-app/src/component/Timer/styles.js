import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slider: {
      width: 250,
      height: 40,
    },
    sliderTimer: {
      fontSize: 50,
      fontWeight: 'light',
      color: '#D9D9D9',
    },
    stopwatch: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 300,
      height: 175,
    },
    watchMod: {
      fontSize: 25,
      color: '#7289DA',
      position: 'absolute',
      paddingBottom: 15,
      fontWeight: 'bold',
    },
  
    modSwitch: {
      width: 40,
      height: 15,
      borderRadius: 20,
      opacity: 0.2,
      backgroundColor: '#D9D9D9',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 11,
    }
    
  });

  export { styles }