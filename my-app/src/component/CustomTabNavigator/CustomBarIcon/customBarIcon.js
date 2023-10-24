import React from "react";
import { Image } from "react-native";

export function CustomTabBarIcon({ iconName, focused, color, size }) {
    let iconSource = focused
        ? require(`path-to-your-active-icon/${iconName}.png`)
        : require(`path-to-your-inactive-icon/${iconName}.png`);

    return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
}
