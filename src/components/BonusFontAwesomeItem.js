import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { vw } from "react-native-expo-viewport-units";

const getSize = (horizontalNum) => {
  /* 3x3 */ if (horizontalNum === 3) return vw(15);
  /* 4x4 */ else if (horizontalNum === 4) return vw(11);
  /* 5x5 */ else if (horizontalNum === 5) return vw(8);
  /* 6x6 */ else if (horizontalNum === 6) return vw(6.7);
  /* for safe */ else return vw(15);
};

export default (props) => (
  <FontAwesome5 {...props} size={getSize(props.horizontalNum)} />
);
