import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import colors from "../constants/colors";
import {
  SIGN_UP,
  SIGN_IN,
  SIGN_UP_TITLE,
  SIGN_IN_TITLE,
  SIGN_UP_TEXT,
  SIGN_IN_TEXT,
  HAVE_BEEN,
  FIRST_TIME,
  USERNAME,
  PASSWORD,
} from "../constants/strings";

import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

export default ({
  content,
  handleAuth,
  usernameInput,
  secretInput,
  loading,
  navigation,
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.screen}
        source={require("../../assets/images/background.png")}
      >
        <StatusBar hidden={true} />

        <View style={styles.header}>
          <Text style={styles.headerText}>
            {content === SIGN_UP ? SIGN_UP_TITLE : SIGN_IN_TITLE}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>{USERNAME}</Text>
            <AuthInput {...usernameInput} returnKeyType={"next"} />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.inputText}>{PASSWORD}</Text>
            <AuthInput
              {...secretInput}
              onSubmitEditing={handleAuth}
              secureTextEntry={true}
            />
          </View>
        </View>

        <AuthButton
          onPress={handleAuth}
          text={content === SIGN_UP ? SIGN_UP_TEXT : SIGN_IN_TEXT}
          loading={loading}
        />

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(content === SIGN_UP ? SIGN_IN : SIGN_UP)
          }
          activeOpacity={0.5}
          disabled={loading}
        >
          <Text style={styles.signUpLeftText}>
            {content === SIGN_UP ? HAVE_BEEN : FIRST_TIME}
            {"  "}
            <Text style={styles.signUpRightText}>
              {content === SIGN_UP ? SIGN_IN_TEXT : SIGN_UP_TEXT}
            </Text>{" "}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    marginTop: vh(15),
    marginBottom: vh(15),
  },
  headerText: {
    fontSize: vh(4),
    fontWeight: "500",
    textAlign: "center",
    color: colors.whiteColor,
  },
  inputContainer: {
    marginBottom: vh(15),
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    width: "100%",
    alignItems: "center",
    marginBottom: vh(4),
  },
  inputText: {
    width: "70%",
    color: colors.whiteColor,
    fontSize: vh(1.5),
    textTransform: "uppercase",
    fontWeight: "500",
  },
  signUpLeftText: {
    fontSize: vw(4),
    textAlign: "center",
  },
  signUpRightText: {
    fontSize: vw(4.5),
    fontWeight: "600",
    color: colors.whiteColor,
  },
});
