import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

import { GameProvider } from "../context/GameContext";

import HomeScreen from "../screens/Home/HomeScreen";

import Loader from "../components/Loader";

const MainNavigation = createStackNavigator();

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [gameInfo, setGameInfo] = useState({});

  const preLoad = async () => {
    try {
      const storageStage = JSON.parse(await AsyncStorage.getItem("stage"));
      const storageHorizontalNum = JSON.parse(
        await AsyncStorage.getItem("horizontalNum")
      );
      const storageHeart = JSON.parse(await AsyncStorage.getItem("heart"));
      const storageGameEnd = JSON.parse(await AsyncStorage.getItem("gameEnd"));

      if (storageStage && storageHorizontalNum) {
        /* Store Game Info to Game Screen */
        setGameInfo((curState) => ({
          stage: storageStage,
          horizontalNum: storageHorizontalNum,
          heart: storageHeart,
          gameEnd: storageGameEnd,
        }));
      } else {
        setGameInfo((curState) => ({
          stage: 1,
          horizontalNum: 2,
          heart: 5,
          gameEnd: false,
        }));
      }
    } catch (error) {
      console.log("Error @if_MainStack: ", error.message);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loaded ? (
    <GameProvider gameInfo={gameInfo}>
      <MainNavigation.Navigator headerMode="none">
        <MainNavigation.Screen name="Home" component={HomeScreen} />
      </MainNavigation.Navigator>
    </GameProvider>
  ) : (
    <Loader />
  );
};
