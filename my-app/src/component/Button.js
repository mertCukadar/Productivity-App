import React from "react";
import { StyleSheet, Text, Pressable } from 'react-native';

export function CustomButton(props) {
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

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: "#7289DA",
    borderRadius: 5,
    borderColor: "#7289DA",
    alignItems: "center",
    borderWidth: 1,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  text: {
    color: "#F6F1F1",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 7,
  },
});
