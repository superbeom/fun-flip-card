import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import { vw } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

const size = vw(30);

export default () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  const zeroToOne = () => {
    return Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
  };

  const executeSpin = () => {
    Animated.loop(zeroToOne()).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    executeSpin();
  }, []);

  return (
    <View style={styles.loader}>
      <Animated.Image
        style={{ width: size, height: size, transform: [{ rotate: spin }] }}
        source={require("../../assets/trans_icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.getHeartBgColor,
  },
});
