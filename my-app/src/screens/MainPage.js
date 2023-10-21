import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Timer } from "../component/Timer";
import { Navigation } from "../component/Navigation/Navigation";
import { StrikeComp } from "../component/Statistics/Strike";

export function MainPage() {
  const [running, setRunning] = useState(false);
  return (
    <View style={styles.container}>
        <View style = {styles.buttonContainer}>
            <Navigation />
        </View>
      <View style={styles.timerContainer}>
        <Timer />
      </View>

      <View style = {styles.statusContainer}>
      <Text style = {styles.statusText}>Status</Text>
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
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#2B3137",
  },

  statusContainer: {
    width: Dimensions.get("window").width * 0.9,
    height: 200,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#2B3137",
  },
  buttonContainer: {
    width: Dimensions.get("window").width * 0.9,
    marginBottom: 20,
    flexDirection: "column",
  },
  statusText:
    {
        fontSize: 20,
        color: '#7289DA',
        fontWeight: 'light',
        marginTop: 20,
    }
});

export default MainPage;