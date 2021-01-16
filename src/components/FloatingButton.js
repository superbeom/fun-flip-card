import React, { useState, useRef } from "react";
import { StyleSheet, View, Animated, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { vw, vh } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

const buttonSize = vw(20);
const floatingButtonSize = vw(16);

export default () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(false);

  const heartStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -220],
        }),
      },
    ],
  };

  const thumbStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -150],
        }),
      },
    ],
  };

  const pinStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80],
        }),
      },
    ],
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "135deg"],
        }),
      },
    ],
  };

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      speed: 3,
      useNativeDriver: true,
    }).start();

    setOpen((curOpen) => !curOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.9}>
        <Animated.View style={[styles.button, styles.menu, heartStyle]}>
          <AntDesign name="hearto" size={vw(6.5)} color={colors.whiteColor} />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.9}>
        <Animated.View style={[styles.button, styles.menu, thumbStyle]}>
          <Entypo name="thumbs-up" size={vw(6.5)} color={colors.whiteColor} />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.9}>
        <Animated.View style={[styles.button, styles.menu, pinStyle]}>
          <Entypo
            name="location-pin"
            size={vw(6.5)}
            color={colors.whiteColor}
          />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={toggleMenu}
        style={styles.buttonContainer}
        activeOpacity={0.9}
      >
        <Animated.View
          style={[
            styles.button,
            rotation,
            {
              shadowColor: open ? colors.whiteColor : colors.accentColor,
              backgroundColor: open ? colors.whiteColor : colors.accentColor,
            },
          ]}
        >
          <AntDesign
            name="plus"
            size={vw(8)}
            color={open ? colors.accentColor : colors.whiteColor}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    right: vw(10),
    bottom: vh(9.5),
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 6,
    shadowOpacity: 0.6,
    elevation: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  menu: {
    width: floatingButtonSize,
    height: floatingButtonSize,
    borderRadius: floatingButtonSize / 2,
    backgroundColor: colors.accentColor,
  },
});
