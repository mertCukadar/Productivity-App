import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
import { Login } from './component/pages/Login';
import { Timer } from './component/Timer';
import { Todo } from './component/pages/Todo';

export default function App() {
  return (
    <View style = {styles.container}>
        <Todo />
    </View>


    

  );


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
