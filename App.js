import React, { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-community/async-storage";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";

import { SoundProvider } from "./src/context/SoundContext";

import AppStack from "./src/stacks/AppStack";

import Loader from "./src/components/Loader";

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [sound, setSound] = useState();

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
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage,
      });

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
      <AppStack />
    </SoundProvider>
  ) : (
    <Loader />
  );
};
