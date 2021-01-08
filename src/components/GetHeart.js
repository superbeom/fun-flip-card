import React, { useEffect } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { vw } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

const GetHeart = () => {
  let opacity = new Animated.Value(0);

  const animate = () => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      easing: Easing.inOut(Easing.elastic(0.2)),
      useNativeDriver: false,
    }).start();
  };

  const measure = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  useEffect(() => {
    animate();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedBox,
          { opacity, width: measure, height: measure },
        ]}
      >
        <MaterialCommunityIcons
          name="cards-heart"
          size={vw(40)}
          color={colors.redColor}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.getHeartBgColor,
  },
  animatedBox: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GetHeart;
