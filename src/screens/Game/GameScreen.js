import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert, BackHandler } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { useGameInfo, useMinusHeart } from "../../context/GameContext";

import { checkTime } from "../../utils/checkSomething";
import { CHECK_GO_HOME, CANCEL, GO_HOME } from "../../constants/strings";

import GameFeed from "../../components/GameFeed";
import Button from "../../components/Button";
import Heart from "../../components/Heart";
import Timer from "../../components/Timer";

export default ({ onGoHome, onGameOver }) => {
  const { stage, heart } = useGameInfo();
  const minusHeart = useMinusHeart();
  const [showAnswer, setShowAnswer] = useState(true);
  const [clickedBomb, setClickedBomb] = useState(false);

  const checkGoHome = () => {
    Alert.alert(
      CHECK_GO_HOME,
      "",
      [
        { text: CANCEL, onPress: () => null, style: "cancel" },
        { text: GO_HOME, onPress: onGoHome },
      ],
      { cancelable: true }
    );

    return true;
  };

  /* 처음에 정답 보여 주는 시간 2/3초 간 정답 보여 주기 & heart 갯수 -1 */
  const showAnswerForHint = () => {
    setShowAnswer(true);

    const timeForShowAnswer = checkTime(stage) * 0.6;

    setTimeout(() => setShowAnswer(false), timeForShowAnswer);

    if (heart > 0) {
      minusHeart();
    }
  };

  const preventBackPress = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", preventBackPress);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", preventBackPress);
  }, []);

  return (
    <View style={styles.screen}>
      {/* BODY */}
      <View style={styles.body}>
        <View style={styles.infoContainer}>
          <View style={styles.timerContainer}>
            <Timer
              onGameOver={onGameOver}
              numOfHeart={heart}
              showAnswerForHint={showAnswerForHint}
              showAnswer={showAnswer}
              stage={stage}
              clickedBomb={clickedBomb}
            />
          </View>
          <View style={styles.heartContainer}>
            <Heart onPress={() => null} numOfHeart={heart} disabled={true} />
          </View>
        </View>
        <GameFeed
          onGameOver={onGameOver}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
          clickedBomb={clickedBomb}
          setClickedBomb={setClickedBomb}
        />
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Button onPress={checkGoHome} disabled={showAnswer} content={"home"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    flex: 5,
    width: "100%",
    marginTop: vh(10),
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    top: -80,
  },
  heartContainer: {
    alignItems: "flex-end",
    marginRight: vw(3),
  },
  timerContainer: {
    flex: 1,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
