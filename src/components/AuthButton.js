import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import PropTypes from "prop-types";
import { vw, vh } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

const AuthButton = ({ onPress, text, loading = false }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
    disabled={loading}
    activeOpacity={0.5}
  >
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color={colors.accentColor} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </View>
  </TouchableOpacity>
);

AuthButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "70%",
    height: vh(7),
    marginBottom: vh(3),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.whiteColor,
    borderRadius: 75,
    padding: 10,
  },
  text: {
    fontSize: vw(4.7),
    fontWeight: "600",
    textAlign: "center",
    color: colors.primaryColor,
  },
});

export default AuthButton;
