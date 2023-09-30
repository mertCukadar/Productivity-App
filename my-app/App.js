import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
import { Login } from './component/Login';

export default function App() {
  return (
    <View style = {styles.container}>
      <Login />
    </View>


    

  );


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
