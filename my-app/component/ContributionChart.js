import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { ContributionGraph } from 'react-native-chart-kit';

const commitsData = [
  { date: "2023-01-02", count: 1 },
  { date: "2023-01-03", count: 2 },
  { date: "2023-01-04", count: 3 },
  { date: "2023-01-05", count: 4 },
  { date: "2023-01-06", count: 5 },
  { date: "2023-01-30", count: 2 },
  { date: "2023-01-31", count: 3 },
  { date: "2023-03-01", count: 2 },
  { date: "2023-04-02", count: 4 },
  { date: "2023-03-05", count: 2 },
  { date: "2023-02-28", count: 4 } // Şubat ayının son gününü düzelten bu satırı ekledim
];

const chartConfig = {
  backgroundColor: "#2B3137",
  backgroundGradientFrom: "#2B3137",
  backgroundGradientTo: "#2B3137",
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(25, 167, 206, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 20,
    padding: 15,
  }
};

export function ContributionChart() {
  return (
    <View style={styles.container}>
    <ScrollView horizontal={true} style = {styles.scrollContainer}>
      
        <ContributionGraph
          xAxisLabel={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          values={commitsData}
          squareSize={18}
          endDate={new Date('2023-12-31')}
          numDays={365}
          gutterSize={3}
          showMonthLabels={true}
          width={screenWidth * 2}
          height={220}
          chartConfig={chartConfig}
        />
     
    </ScrollView>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
  
  title: {
    fontSize: 18,
    color: 'black',
  },

});
