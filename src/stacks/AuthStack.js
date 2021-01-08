import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/Auth/SignInScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

const AuthStack = createStackNavigator();

export default () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
    </AuthStack.Navigator>
  );
};
