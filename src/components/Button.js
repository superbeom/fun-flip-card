import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { vw } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

import { HOME, GAME_PAD } from "../utils/FontAwesomeSource";

const Button = ({ onPress, disabled, content, size, activeOpacity }) => {
  const checkContent = (content) => {
    let iconName = HOME;

    switch (content) {
      case "home":
        iconName = HOME;
        break;

      case "game_pad":
        iconName = GAME_PAD;
        break;

      default:
        iconName = HOME;
    }

    return iconName;
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: size || vw(16),
          height: size || vw(16),
          borderRadius: size / 2 || vw(16) / 2,
          backgroundColor: disabled ? colors.grayColor : colors.accentColor,
        },
      ]}
      onPress={onPress}
      activeOpacity={activeOpacity || 0.7}
      disabled={disabled}
    >
      {checkContent(content)}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    shadowColor: colors.accentColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
