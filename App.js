import React, { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-community/async-storage";

import { SoundProvider } from "./src/context/SoundContext";
import { GameProvider } from "./src/context/GameContext";

import AppStack from "./src/stacks/AppStack";

import Loader from "./src/components/Loader";

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [sound, setSound] = useState();
  const [gameInfo, setGameInfo] = useState({});

  const preLoad = async () => {
    try {
      /* Load Asset */
      await Asset.loadAsync([
        require("./assets/icon.png"),
        require("./assets/images/animal_1_bush.png"),
        require("./assets/images/animal_2_flower.png"),
        require("./assets/images/animal_3_squirrel.png"),
        require("./assets/images/animal_4_donkey.png"),
        require("./assets/images/animal_5_flamingo.png"),
        require("./assets/images/animal_6_elephant.png"),
        require("./assets/images/animal_7_sloth.png"),
        require("./assets/images/animal_8_lion.png.png"),
        require("./assets/images/animal_9_racoon.png"),
        require("./assets/images/animal_10_panda.png"),
        require("./assets/images/animal_11_hippo.png"),
        require("./assets/images/animal_12_monkey.png"),
        require("./assets/images/background.png"),
        require("./assets/images/success.png"),
        require("./assets/images/fail.png"),
        require("./assets/sounds/background_sound.mp3"),
        require("./assets/sounds/success_sound.mp3"),
        require("./assets/sounds/fail_sound.mp3"),
        require("./assets/sounds/bomb_sound.mp3"),
        require("./assets/sounds/correct_sound.mp3"),
        require("./assets/sounds/incorrect_sound.mp3"),
      ]);

      /* Play Background Sound */
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/sounds/background_sound.mp3")
      );
      setSound(sound);
      await sound.playAsync();
      await sound.setIsLoopingAsync(true);

      /* Load Cache */
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
        const newStage = 1;
        const newHorizontalNum = 2;
        const newHeart = 5;
        const newGameEnd = false;

        /* Store Game Info to Local */
        await AsyncStorage.setItem("stage", JSON.stringify(newStage));
        await AsyncStorage.setItem(
          "horizontalNum",
          JSON.stringify(newHorizontalNum)
        );
        await AsyncStorage.setItem("heart", JSON.stringify(newHeart));
        await AsyncStorage.setItem("gameEnd", JSON.stringify(newGameEnd));

        /* Store Game Info to Game Screen */
        setGameInfo((curState) => ({
          stage: newStage,
          horizontalNum: newHorizontalNum,
          heart: newHeart,
          gameEnd: newGameEnd,
        }));
      }

      /* Set State */
      setLoaded(true);
    } catch (error) {
      console.log("Error @preLoad_App: ", error.message);
    }
  };

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  useEffect(() => {
    preLoad();
  }, []);

  return loaded ? (
    <SoundProvider sound={sound}>
      <GameProvider gameInfo={gameInfo}>
        <AppStack />
      </GameProvider>
    </SoundProvider>
  ) : (
    <Loader />
  );
};
