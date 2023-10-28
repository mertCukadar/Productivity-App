import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, Animated } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export function StrikeComp() {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    // Sayfa açıldığında resmin opaklığını arttırarak açık hale getiriyoruz
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000, // Animasyon süresi
      useNativeDriver: true, // Native sürücü kullanımı
    }).start();
  }, []);

  const animatedStyles = {
    opacity: animation,
  };

  return (
    <SafeAreaView style={styles.universalContainer}>
      <View style={styles.container}>
        <Animated.Image
          style={[styles.image, animatedStyles]}
          source={require('../../assets/Strike.png')}
        />
        <Text style={styles.strikeDay}>3 Days</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  universalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 45,
  },
  image: {
    width: 30,
    height: 60,
    resizeMode: 'contain',
  },
  strikeDay: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'normal',
    marginLeft: 10,
  },
});
