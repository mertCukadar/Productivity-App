import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
  
  ContributionGraph,
  
} from "react-native-chart-kit";
export function ContributionChart() {
  return(
    <View style={styles.container}>
      <ContributionGraph
  values={commitsData}
  endDate={new Date("2017-04-01")}
  numDays={105}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#24292E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
});

const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 }
];

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundColor: "#2B3137",
  backgroundGradientFrom: "#24292E",
  backgroundGradientTo: "#24292E",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  } };