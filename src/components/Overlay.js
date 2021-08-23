import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { vw } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

export default ({ string, overlayFontSize }) => (
  <>
    <View style={styles.overlay} />
    <View style={styles.overlayTextContainer}>
      <Text
        style={[styles.overlayText, { fontSize: overlayFontSize || vw(8.5) }]}
      >
        {string}
      </Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.8,
    borderRadius: 10,
    backgroundColor: colors.slateGrayColor,
    elevation: 6,
  },
  overlayTextContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  overlayText: {
    fontWeight: "700",
    color: colors.whiteColor,
  },
});
