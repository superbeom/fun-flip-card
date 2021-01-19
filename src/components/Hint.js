import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { vh } from "react-native-expo-viewport-units";

import { BAN, EYE, BONUS_BAN, BONUS_EYE } from "../utils/FontAwesomeSource";

const Hint = ({ onPress, disabled, bonus }) => {
  return (
    <TouchableOpacity style={styles.hint} onPress={onPress} disabled={disabled}>
      {bonus ? (disabled ? BONUS_BAN : BONUS_EYE) : disabled ? BAN : EYE}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hint: {
    width: vh(4),
  },
});

export default Hint;
