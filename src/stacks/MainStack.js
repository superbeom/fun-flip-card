import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home/HomeScreen";
import BonusScreen from "../screens/Bonus/BonusScreen";

const MainNavigation = createStackNavigator();

export default () => (
  <MainNavigation.Navigator headerMode="none">
    <MainNavigation.Screen name="Home" component={HomeScreen} />
    <MainNavigation.Screen name="Bonus" component={BonusScreen} />
  </MainNavigation.Navigator>
);
