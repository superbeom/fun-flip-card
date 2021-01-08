import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  BackHandler,
  Alert,
  AppState,
} from "react-native";
import { Audio } from "expo-av";
import { vw, vh } from "react-native-expo-viewport-units";

import {
  useGameInfo,
  useNextStage,
  usePlusHorizontalNum,
  usePlusHeart,
  useSetGameEnd,
} from "../../context/GameContext";

import colors from "../../constants/colors";
import { stageForReward } from "../../utils/checkSomething";
import {
  PLAY_AGAIN,
  NEXT_STAGE,
  CHECK_GO_HOME,
  CANCEL,
  GO_HOME,
} from "../../constants/strings";

import Button from "../../components/Button";
import StageButton from "../../components/StageButton";
import Heart from "../../components/Heart";
import Arrow from "../../components/Arrow";
import GetHeartText from "../../components/GetHeartText";
import GetHeart from "../../components/GetHeart";

const GameOverScreen = ({
  onPlayAgain,
  onGoHome,
  onStartGame,
  pass,
  getHeart,
}) => {
  const { stage, heart } = useGameInfo();
  const nextStage = useNextStage();
  const plusHorizontalNum = usePlusHorizontalNum();
  const plusHeart = usePlusHeart();
  const setGameEnd = useSetGameEnd();
  const [checkReward, setCheckReward] = useState(false);
  const [reward, setReward] = useState(false);
  const appState = useRef(AppState.currentState);
  const [successSound, setSuccessSound] = useState();
  const [failSound, setFailSound] = useState();

  const clickedGoHomeAfterSuccess = () => {
    if (stage === 885) {
      setGameEnd();
    } else {
      successStage();
    }

    onGoHome();
  };

  const clickedGoHomeAfterFail = () => {
    failStage();
    onGoHome();
  };

  const nextStageHandler = () => {
    successStage();
    onStartGame();
  };

  const replayStageHandler = () => {
    onPlayAgain();
  };

  const successStage = () => {
    if (stage === 5 || stage === 36 || stage === 157 || stage === 334) {
      plusHorizontalNum();
    }

    nextStage();
  };

  const failStage = () => {};

  const backAction = () => {
    Alert.alert(CHECK_GO_HOME, "", [
      {
        text: CANCEL,
        onPress: () => null,
        style: "cancel",
      },
      {
        text: GO_HOME,
        onPress: pass ? clickedGoHomeAfterSuccess : clickedGoHomeAfterFail,
      },
    ]);

    return true;
  };

  const getReward = () => {
    setCheckReward(false); // checkReward 초기화

    /* stage에 따른 추가 heart 갯수 */
    if (stage <= 80) {
      plusHeart(1);
    } else if (stage > 80 && stage <= 386) {
      plusHeart(3);
    } else if (stage > 386 && stage <= 885) {
      plusHeart(5);
    } else {
      plusHeart(3);
    }
  };

  const handleAppStateChange = (nextAppState) => {
    appState.current = nextAppState;

    if (
      pass &&
      (appState.current === "inactive" || appState.current === "background")
    ) {
      clickedGoHomeAfterSuccess();
    } else if (
      !pass &&
      (appState.current === "inactive" || appState.current === "background")
    ) {
      clickedGoHomeAfterFail();
    }
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
    AppState.addEventListener("change", handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  useEffect(() => {
    /* 특정 stage마다 보상 - heart 추가 */
    if (pass && stageForReward.includes(stage)) {
      setCheckReward(true);
      setReward(true);

      setTimeout(getReward, 2500);
    } else {
      preLoad();
    }

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
            <Heart onPress={getHeart} numOfHeart={heart} />
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
          {reward ? (
            pass ? null : (
              <StageButton
                onPress={replayStageHandler}
                enoughHeart={heart > 0 ?? false}
              >
                {PLAY_AGAIN}
              </StageButton>
            )
          ) : (
            <StageButton
              onPress={replayStageHandler}
              enoughHeart={heart > 0 ?? false}
            >
              {PLAY_AGAIN}
            </StageButton>
          )}
          {pass && stage !== 885 ? (
            <StageButton
              onPress={nextStageHandler}
              enoughHeart={heart > 0 ?? false}
            >
              {NEXT_STAGE}
            </StageButton>
          ) : null}
        </View>
        <View style={styles.goHomeContainer}>
          <Button
            onPress={pass ? clickedGoHomeAfterSuccess : clickedGoHomeAfterFail}
            content={"home"}
          />
        </View>
      </View>
      {checkReward ? <GetHeart /> : null}
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
