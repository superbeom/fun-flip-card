import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useIsLoggedIn } from "../context/AuthContext";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

export default () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
