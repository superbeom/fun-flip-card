import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, BackHandler, Alert } from "react-native";
import { Audio } from "expo-av";
import { vw, vh } from "react-native-expo-viewport-units";

import { useGameInfo } from "../../context/GameContext";

import colors from "../../constants/colors";
import {
  NEW_GAME,
  CHECK_GO_HOME,
  CANCEL,
  GO_HOME,
} from "../../constants/strings";

import Button from "../../components/Button";
import StageButton from "../../components/StageButton";
import Heart from "../../components/Heart";
import Arrow from "../../components/Arrow";
import GetHeartText from "../../components/GetHeartText";

const GameOverScreen = ({ onGoHome, onStartGame, pass, getHeart }) => {
  const { heart } = useGameInfo();
  const [successSound, setSuccessSound] = useState();
  const [failSound, setFailSound] = useState();

  const newGameHandler = () => {
    onStartGame();
  };

  const backAction = () => {
    Alert.alert(CHECK_GO_HOME, "", [
      {
        text: CANCEL,
        onPress: () => null,
        style: "cancel",
      },
      {
        text: GO_HOME,
        onPress: onGoHome,
      },
    ]);

    return true;
  };

  const preLoad = async () => {
    /* Set Sound */
    const { sound: successSound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/success_sound.mp3")
    );
    const { sound: failSound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/fail_sound.mp3")
    );
    setSuccessSound(successSound);
    setFailSound(failSound);
    if (pass) {
      await successSound.playAsync();
    } else {
      await failSound.playAsync();
    }
  };

  useEffect(() => {
    return successSound ? () => successSound.unloadAsync() : undefined;
  }, [successSound]);

  useEffect(() => {
    return failSound ? () => failSound.unloadAsync() : undefined;
  }, [failSound]);

  useEffect(() => {
    preLoad();

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.heartContainer}>
          <View style={styles.heartBox}>
            {heart <= 1 ? (
              <View
                style={{
                  marginRight: vw(3),
                  justifyContent: "flex-end",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ justifyContent: "center" }}>
                    <GetHeartText
                      enoughHeart={false}
                      screen={"gameOverScreen"}
                    />
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <Arrow enoughHeart={false} direction={"right"} />
                  </View>
                </View>
              </View>
            ) : null}
            <Heart
              onPress={getHeart}
              numOfHeart={heart}
              color={colors.whiteColor}
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={
              pass
                ? require("../../../assets/images/success.png")
                : require("../../../assets/images/fail.png")
            }
            style={styles.image}
            resizeMode={"cover"}
          />
        </View>
        <View style={styles.buttonContainer}>
          <StageButton
            onPress={newGameHandler}
            enoughHeart={heart > 0 ?? false}
          >
            {NEW_GAME}
          </StageButton>
        </View>
        <View style={styles.goHomeContainer}>
          <Button onPress={onGoHome} content={"home"} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  heartContainer: {
    width: "100%",
    marginVertical: vh(2),
  },
  heartBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: vw(3),
  },
  imageContainer: {
    width: vh(30),
    height: vh(30),
    borderRadius: vh(30) / 2,
    borderWidth: 3,
    borderColor: colors.whiteColor,
    overflow: "hidden",
    marginVertical: vh(5),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: vh(2),
    justifyContent: "space-around",
    alignItems: "center",
  },
  goHomeContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default GameOverScreen;
