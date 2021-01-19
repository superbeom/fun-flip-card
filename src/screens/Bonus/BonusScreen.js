import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  BackHandler,
  Platform,
  ImageBackground,
} from "react-native";
import { AdMobBanner } from "expo-ads-admob";

import admob from "../../config/admob";

import { useGameInfo, useMinusHeart } from "../../context/GameContext";

import { HOME } from "../../constants/strings";

import StartGameScreen from "./StartGameScreen";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";
import GetHeartScreen from "../Game/GetHeartScreen";

import Header from "../../components/Header";

export default ({ navigation }) => {
  const { heart } = useGameInfo();
  const minusHeart = useMinusHeart();
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [pass, setPass] = useState(false);

  const startGameHandler = () => {
    setStartGame(true);
    setGameOver(false);
  };

  const gameOverHandler = (checkPass) => {
    if (checkPass === "fail") {
      setPass(false);

      if (heart > 0) {
        minusHeart();
      }
    } else {
      setPass(true);
    }

    setGameOver(true);
  };

  const goHomeHandler = () => {
    setStartGame(false);
    setGameOver(false);
  };

  const backAction = () => {
    navigation.navigate(HOME);

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <ImageBackground
      style={styles.screen}
      source={require("../../../assets/images/bonus_background.png")}
    >
      <StatusBar hidden={true} />
      <Header title={""} />

      <View style={styles.body}>
        {startGame ? (
          gameOver ? null : (
            <GameScreen onGoHome={goHomeHandler} onGameOver={gameOverHandler} />
          )
        ) : (
          <StartGameScreen
            onStartGame={startGameHandler}
            navigation={navigation}
          />
        )}
        {/* {
            <GameOverScreen
              onGoHome={goHomeHandler}
              onStartGame={startGameHandler}
              pass={pass}
              getHeart={getHeart}
            />} */}
      </View>

      <View style={styles.ads}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={
            Platform.OS === "ios"
              ? admob.bannerIosAdUnitId
              : admob.bannerAndroidAdUnitId
          }
          servePersonalizedAds={true}
          onDidFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 11,
  },
  ads: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
});
