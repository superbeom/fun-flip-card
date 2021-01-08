import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { vw } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

import { HEART } from "../utils/FontAwesomeSource";

const Heart = ({ onPress, numOfHeart, disabled }) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={styles.heart}
        disabled={disabled ?? false}
      >
        {HEART}
      </TouchableOpacity>
      <Text style={styles.mulText}>X </Text>
      <Text style={styles.numText}>{numOfHeart}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  heart: {
    shadowColor: colors.redColor,
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 7,
  },
  mulText: {
    fontSize: vw(5),
    fontWeight: "bold",
    color: colors.accentColor,
  },
  numText: {
    fontSize: vw(7),
    fontWeight: "bold",
    color: colors.accentColor,
  },
});

export default Heart;
