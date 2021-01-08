import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, Animated } from "react-native";
import { vw } from "react-native-expo-viewport-units";

import colors from "../constants/colors";
import { CLICK_TO_GET_HEARTS } from "../constants/strings";

export default ({ enoughHeart, screen }) => {
  const animation = useRef(new Animated.Value(0)).current;

  const zeroToOne = () => {
    return Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      delay: 300,
      useNativeDriver: false,
    });
  };

  const oneToZero = () => {
    return Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      delay: 300,
      useNativeDriver: false,
    });
  };

  const executeAnimation = () => {
    Animated.loop(Animated.sequence([zeroToOne(), oneToZero()])).start();
  };

  useEffect(() => {
    if (!enoughHeart) {
      executeAnimation();
    }
  }, []);

  return (
    <Animated.View style={{ opacity: animation }}>
      {!enoughHeart ? (
        <Text
          style={[
            styles.text,
            screen === "gameOverScreen"
              ? {
                  fontSize: vw(5),
                }
              : {
                  fontSize: vw(5),
                },
          ]}
        >
          {CLICK_TO_GET_HEARTS}
        </Text>
      ) : null}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.whiteColor,
    fontWeight: "500",
  },
});
