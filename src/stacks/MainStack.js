import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home/HomeScreen";

const MainNavigation = createStackNavigator();

export default () => (
  <MainNavigation.Navigator headerMode="none">
    <MainNavigation.Screen name="Home" component={HomeScreen} />
  </MainNavigation.Navigator>
);
