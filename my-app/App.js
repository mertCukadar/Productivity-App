import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './component/pages/Login';
import { Timer } from './component/Timer';
import { ContributionChart } from './component/ContributionChart';
import { Todo } from './component/pages/Todo';

export default function App() {
  return (
    <View style = {styles.container}>
        <ContributionChart />
    </View>
  );


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
