import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { useOpen, useToggleOpen } from "../context/BonusContext";

import colors from "../constants/colors";
import { GAME_PAD } from "../utils/FontAwesomeSource";

const buttonSize = vw(20);
const floatingButtonSize = vw(16);

export default () => {
  const animation = useRef(new Animated.Value(0)).current;
  const open = useOpen();
  const toggleOpen = useToggleOpen();

  const SixToSix = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -290],
        }),
      },
    ],
  };

  const FiveToFive = {
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

  const FourToFour = {
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

  const ThreeToThree = {
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
          outputRange: ["0deg", "360deg"],
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

    toggleOpen();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.9}>
        <Animated.View style={[styles.button, styles.menu, SixToSix]}>
          <Text style={styles.text}>6 x 6</Text>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.9}>
        <Animated.View style={[styles.button, styles.menu, FiveToFive]}>
          <Text style={styles.text}>5 x 5</Text>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.9}>
        <Animated.View style={[styles.button, styles.menu, FourToFour]}>
          <Text style={styles.text}>4 x 4</Text>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.9}>
        <Animated.View style={[styles.button, styles.menu, ThreeToThree]}>
          <Text style={styles.text}>3 x 3</Text>
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
          <GAME_PAD color={open ? colors.accentColor : colors.whiteColor} />
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
  text: {
    color: colors.whiteColor,
    fontSize: vw(4),
    fontWeight: "600",
  },
});
