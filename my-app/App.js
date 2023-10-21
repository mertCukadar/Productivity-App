import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { Timer } from './src/component/Timer';
import { ContributionChart } from './src/component/Statistics/ContributionChart';
import { Todo } from './src/screens/Todo';
import { MainPage } from './src/screens/MainPage';

export default function App() {
  return (
    <View style = {styles.container}>
      <MainPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});