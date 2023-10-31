import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { Timer } from "../../component/Timer";
import { StrikeComp } from "../../component/Statistics/Strike";

export function TimerScreen() {
  const [running, setRunning] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Timer />
      </View>

      <View style={styles.statusContainer}>
        <StrikeComp />
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#24292E",
  },
  timerContainer: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.5,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#2B3137",
  },

  statusContainer: {
    width: Dimensions.get("window").width * 0.9,
    height: 200,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#2B3137",
  },
  buttonContainer: {
    width: Dimensions.get("window").width * 0.9,
    flexDirection: "column",
    marginTop: 20,
  },
  statusText: {
    fontSize: 20,
    color: '#19A7CE',
    fontWeight: 'light',
    marginTop: 20,
  },
});
