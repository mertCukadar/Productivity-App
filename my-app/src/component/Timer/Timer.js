import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "./Button";




export function Timer() {
  

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  let timer = null; // timer değişkenini burada tanımlayın ve null olarak başlatın

  const onSliderValueChange = (value) => {
    setTime(value);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
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
    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
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

      <View style={styles.container}>
        <View style={styles.stopwatch}>
          <Text style={styles.sliderTimer}>{formatTime(time)}</Text>
          <Slider
            style={styles.slider}
            minimumValue={3600 / 6}
            maximumValue={3600 * 2}
            step={300}
            minimumTrackTintColor="#7289DA"
            maximumTrackTintColor="#D9D9D9"
            thumbTintColor="#D9D9D9"
            value={time}
            onValueChange={onSliderValueChange}
            disabled={running}
          />
          
          <CustomButton
          width={100}
          onPress={running ? stopTimer : startTimer}
          buttonText={running ? "Stop" : "Start"}
          borderRadius={60}

        />
        </View>
      </View>
      
  
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
