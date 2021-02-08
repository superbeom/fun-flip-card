import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  BackHandler,
  Modal,
  Platform,
  ImageBackground,
} from "react-native";
import { AdMobBanner } from "expo-ads-admob";

import admob from "../../config/admob";

import { useGameInfo, useMinusHeart } from "../../context/GameContext";
import { usePlaySound, useStopSound } from "../../context/SoundContext";

import { HOME } from "../../constants/strings";

import StartGameScreen from "./StartGameScreen";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";
import GetHeartScreen from "../Game/GetHeartScreen";

import Header from "../../components/Header";

export default ({ navigation }) => {
  const { heart } = useGameInfo();
  const minusHeart = useMinusHeart();
  const playSound = usePlaySound();
  const stopSound = useStopSound();
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [pass, setPass] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [checkReward, setCheckReward] = useState(false);
  const [horizontalNum, setHorizontalNum] = useState(3);

  /* horizontalNum에 따른, 처음에 정답을 보여 주는 시간 */
  const [bonusCheckTime, setBonusCheckTime] = useState(3000);

  /* horizontalNum에 따른, 제한 시간 */
  const [bonusCheckLimitTime, setBonusCheckLimitTime] = useState(50);

  const paidStartGameHandler = (horizontalNum) => {
    if (heart > 0) {
      minusHeart();
    }

    switch (true) {
      case horizontalNum === "3x3":
        setHorizontalNum((curHorizontalNum) => 3);
        setBonusCheckTime((curCheckTime) => 2500);
        setBonusCheckLimitTime((curCheckLimitTime) => 15);
        break;

      case horizontalNum === "4x4":
        setHorizontalNum((curHorizontalNum) => 4);
        setBonusCheckTime((curCheckTime) => 4500);
        setBonusCheckLimitTime((curCheckLimitTime) => 20);
        break;

      case horizontalNum === "5x5":
        setHorizontalNum((curHorizontalNum) => 5);
        setBonusCheckTime((curCheckTime) => 6000);
        setBonusCheckLimitTime((curCheckLimitTime) => 35);
        break;

      case horizontalNum === "6x6":
        setHorizontalNum((curHorizontalNum) => 6);
        setBonusCheckTime((curCheckTime) => 8000);
        setBonusCheckLimitTime((curCheckLimitTime) => 60);
        break;
    }

    startGameHandler();
  };

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

  /* 하트 버튼 누름 → 동영상 광고 시청 → 하트 얻음 */
  const getHeart = () => {
    setModalVisible((curState) => !curState);
    stopSound();

    return null;
  };

  const closeModal = () => {
    setModalVisible((curState) => !curState);
    playSound();
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
          gameOver ? (
            <GameOverScreen
              onGoHome={goHomeHandler}
              onStartGame={startGameHandler}
              pass={pass}
              getHeart={getHeart}
            />
          ) : (
            <GameScreen
              onGoHome={goHomeHandler}
              onGameOver={gameOverHandler}
              horizontalNum={horizontalNum}
              bonusCheckTime={bonusCheckTime}
              bonusCheckLimitTime={bonusCheckLimitTime}
            />
          )
        ) : (
          <StartGameScreen
            // onStartGame={startGameHandler}
            onStartGame={paidStartGameHandler}
            getHeart={getHeart}
            navigation={navigation}
          />
        )}
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

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <GetHeartScreen
          closeModal={closeModal}
          numOfHeart={heart}
          checkReward={checkReward}
          setCheckReward={setCheckReward}
        />
      </Modal>
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
