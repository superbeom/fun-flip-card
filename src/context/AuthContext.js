import React, { useState, createContext, useContext } from "react";
import { useMutation } from "react-apollo-hooks";
import AsyncStorage from "@react-native-community/async-storage";

import { ME } from "./ContextQueries";

export const AuthContext = createContext();

export const AuthProvider = ({
  isLoggedIn: isLoggedInProp,
  username: usernameProp,
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInProp);
  const [username, setUsername] = useState(usernameProp);

  /* Get Game Info from Backend */
  const [meMutation] = useMutation(ME);

  const logUserIn = async (logInUsername) => {
    try {
      const {
        data: {
          me: { stage, horizontalNum, heart, gameEnd },
        },
      } = await meMutation({
        variables: {
          username: logInUsername,
        },
      });

      /* Store Log In to Local */
      await AsyncStorage.setItem("isLoggedIn", "true");
      await AsyncStorage.setItem("username", logInUsername);

      /* Store Game Info to Local */
      await AsyncStorage.setItem("stage", JSON.stringify(stage));
      await AsyncStorage.setItem(
        "horizontalNum",
        JSON.stringify(horizontalNum)
      );
      await AsyncStorage.setItem("heart", JSON.stringify(heart));
      await AsyncStorage.setItem("gameEnd", JSON.stringify(gameEnd));

      /* Set Log In */
      setIsLoggedIn(true);
      setUsername(logInUsername);
    } catch (error) {
      console.log("Error @logUserIn_AuthContext: ", error.message);
    }
  };

  const logUserOut = async () => {
    try {
      // await AsyncStorage.setItem("isLoggedIn", "false");
      await AsyncStorage.clear();

      setIsLoggedIn(false);
    } catch (error) {
      console.log("Error @logUserOut_AuthContext: ", error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, logUserIn, logUserOut, username }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useIsLoggedIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};

export const useLogIn = () => {
  const { logUserIn } = useContext(AuthContext);
  return logUserIn;
};

export const useLogOut = () => {
  const { logUserOut } = useContext(AuthContext);
  return logUserOut;
};

export const useUsername = () => {
  const { username } = useContext(AuthContext);
  return username;
};
