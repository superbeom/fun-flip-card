import React, { useState } from "react";
import { Alert } from "react-native";
import { useMutation } from "react-apollo-hooks";

import { useLogIn } from "../../context/AuthContext";

import { CONFIRM_SECRET } from "./AuthQueries";

import {
  SIGN_IN,
  USERNAME,
  CANT_BE_EMPTY,
  DOESNT_EXIST,
  INVALID_PASSWORD,
  WRONG_PASSWORD,
  CHECK_USERNAME_PASSWORD,
  CANT_CONFIRM_PASSWORD,
} from "../../constants/strings";

import useInput from "../../hooks/useInput";
import Auth from "../../components/Auth";

export default SignInScreen = ({ route, navigation }) => {
  const logIn = useLogIn();
  const [loading, setLoading] = useState(false);
  const usernameInput = useInput(route.params ? route.params.username : "");
  const secretInput = useInput(route.params ? route.params.secret : "");

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      username: usernameInput.value,
      secret: secretInput.value,
    },
  });

  const handleSignIn = async () => {
    const { value: username } = usernameInput;
    const { value: secret } = secretInput;

    if (username === "") {
      return Alert.alert(`${USERNAME} ${CANT_BE_EMPTY}`);
    }

    if (secret === "") {
      return Alert.alert(INVALID_PASSWORD);
    }

    try {
      setLoading(true);
      const {
        data: { confirmSecret },
      } = await confirmSecretMutation();

      if (confirmSecret === "Does't Exist") {
        Alert.alert(DOESNT_EXIST);

        return false;
      } else if (confirmSecret === "Wrong") {
        Alert.alert(WRONG_PASSWORD);

        return false;
      }

      if (confirmSecret !== "" || confirmSecret !== false) {
        logIn(username);
      } else {
        Alert.alert(CANT_CONFIRM_PASSWORD);
      }
    } catch (error) {
      console.log("Error @handleSignIn_SignInScreen: ", error.message);
      if (error.message.includes("combination")) {
        // When secret is wrong - "Wrong username/secret combination"
        Alert.alert(WRONG_PASSWORD);
      } else {
        Alert.alert(CHECK_USERNAME_PASSWORD);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Auth
      content={SIGN_IN}
      handleAuth={handleSignIn}
      usernameInput={usernameInput}
      secretInput={secretInput}
      loading={loading}
      navigation={navigation}
    />
  );
};
