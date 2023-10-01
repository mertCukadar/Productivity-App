import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Slider from "@react-native-community/slider";
import CheckBox from 'expo-checkbox';
import { CustomButton } from "./Button";

export function Timer() {
  const [time, setTime] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [running, setRunning] = useState(false);

  const onSliderValueChange = (value) => {
    setTime(value);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} : ${seconds.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    setRunning(true);
    if (time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setRunning(false);
    if (timer) {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    let timer;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      console.log(running, time);
    } else if (time === 0) {
        stopTimer();
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running, time]);

  return (
    <LinearGradient
      flex={1}
      colors={["#AFD3E2", "#F6F1F1"]}
    >
      <View style={styles.container}>
        <View style={styles.stopwatch}>
          <Text style={styles.sliderTimer}>{formatTime(time)}</Text>
          <Slider
            style={styles.slider}
            minimumValue={600}
            maximumValue={3600 * 2}
            step={300}
            minimumTrackTintColor="#146C94"
            maximumTrackTintColor="#000000"
            thumbTintColor="#19A7CE"
            value={time}
            onValueChange={onSliderValueChange}
            disabled={running}
          />

          <Text style={styles.watchMod}>. .</Text>
        </View>
        <CustomButton
          width={300}
          onPress={running ? stopTimer : startTimer}
          buttonText={running ? "Stop" : "Start"}
        />

        <View style={styles.todoContainer}>
          <View style={styles.leftSide}>
            <CheckBox
              checked={toggleCheckBox}
              onPress={() => setToggleCheckBox(!toggleCheckBox)}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.itemText}>To do list item</Text>
          </View>

          <View style={styles.status}></View>
        </View>
      </View>
    </LinearGradient>
  );
}

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
    fontWeight: 'bold',
    color: 'black',
  },
  stopwatch: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F1F1',
    borderRadius: 10,
    width: 300,
    height: 175,
  },
  watchMod: {
    fontSize: 20,
    color: '#19A7CE',
    fontWeight: 'bold',
  },
  todoContainer: {
    backgroundColor: '#F6F1F1',
    padding: 10,
    borderRadius: 10,
    width: 300,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    color: 'black',
  },
  status: {
    width: 20,
    flexDirection: 'row',
    height: 20,
    backgroundColor: '#FF6969',
    borderRadius: 10,
  },
  leftSide: {
    flexWrap: 'wrap',
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
