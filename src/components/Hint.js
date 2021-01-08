import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { vh } from "react-native-expo-viewport-units";

import { BAN, EYE } from "../utils/FontAwesomeSource";

const Hint = ({ onPress, disabled }) => {
  return (
    <TouchableOpacity style={styles.hint} onPress={onPress} disabled={disabled}>
      {disabled ? BAN : EYE}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hint: {
    width: vh(4),
  },
});

export default Hint;
