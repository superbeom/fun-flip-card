import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { vw } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

const size = vw(17);

const StageButton = (props) => {
  // !props.enoughHeart
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.5}
      disabled={!props.enoughHeart}
    >
      <View
        style={[
          styles.button,
          !props.enoughHeart
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
            !props.enoughHeart
              ? {
                  color: colors.lightGrayColor,
                }
              : {
                  color: colors.primaryColor,
                },
          ]}
        >
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: size,
    height: size,
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    fontSize: vw(3.7),
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default StageButton;
