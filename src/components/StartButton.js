import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Platform,
} from "react-native";
import { vw } from "react-native-expo-viewport-units";

import colors from "../constants/colors";
import { GAME_START, COMING_SOON_CAPITAL } from "../constants/strings";

const size = vw(40);
const startRange = vw(30);

const StartButton = ({ onPress, update, enoughHeart }) => {
  let opacity = new Animated.Value(0.7);

  const zeroToOne = () => {
    opacity.setValue(0.7);
    return Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      easing: Easing.bounce,
      useNativeDriver: false,
    });
  };

  const oneToZero = () => {
    opacity.setValue(1);
    return Animated.timing(opacity, {
      toValue: 0.7,
      duration: 1500,
      delay: 3000,
      useNativeDriver: false,
    });
  };

  const executeAnimation = () => {
    Animated.loop(Animated.sequence([zeroToOne(), oneToZero()])).start();
  };

  const measure = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [startRange, size],
  });

  executeAnimation();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      disabled={update || !enoughHeart}
    >
      <Animated.View
        style={[
          styles.button,
          { opacity, width: measure, height: measure },
          !enoughHeart || update
            ? {
                backgroundColor: colors.grayColor,
                shadowColor: colors.grayColor,
              }
            : {
                backgroundColor: colors.whiteColor,
                shadowColor: colors.whiteColor,
              },
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            !enoughHeart
              ? {
                  color: colors.lightGrayColor,
                }
              : {
                  color: colors.primaryColor,
                },
          ]}
        >
          {update ? COMING_SOON_CAPITAL : GAME_START}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 10,
  },
  buttonText: {
    fontSize: vw(6),
    fontStyle: "italic",
    ...Platform.select({
      ios: {
        fontWeight: "800",
      },
      android: {
        fontWeight: "bold",
      },
      default: {
        fontWeight: "800",
      },
    }),
  },
});

export default StartButton;
