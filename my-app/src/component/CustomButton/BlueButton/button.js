import React from "react";
import { Text, Pressable } from 'react-native';
import { styles } from "./styles";

export function BlueButton(props) {
  const { onPress, buttonText, width, disabled , borderRadius } = props;

  return (
    <Pressable
      style={[styles.button, { width: width, borderRadius: borderRadius }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{buttonText}</Text>
    </Pressable>
  );
}

