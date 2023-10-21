import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { BlueButton } from "../CustomButton/BlueButton";
import { styles } from "./styles";




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
          
          <BlueButton
          width={100}
          onPress={running ? stopTimer : startTimer}
          buttonText={running ? "Stop" : "Start"}
          borderRadius={60}

        />
        </View>
      </View>
      
  
  );
}

