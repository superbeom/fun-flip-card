import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import PropTypes from "prop-types";
import { vh } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

const AuthInput = ({
  value,
  onChange,
  placeholder = null,
  keyboardType = "default",
  autoCapitalize = "none",
  returnKeyType = "done",
  onSubmitEditing = () => null,
  secureTextEntry = false,
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
      textAlign={"center"}
    />
  </View>
);

AuthInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
  ]),
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
  returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
  onSubmitEditing: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: vh(2),
    alignItems: "center",
  },
  textInput: {
    width: "70%",
    height: vh(5),
    borderBottomWidth: 2,
    borderBottomColor: colors.whiteColor,
    fontSize: vh(3.7),
    fontWeight: "600",
    color: colors.whiteColor,
  },
});

export default AuthInput;
