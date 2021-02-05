import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Audio } from "expo-av";

import colors from "../../constants/colors";
import checkBonusStage from "../../utils/checkBonusStage";
import { shuffle } from "../../utils/shuffleArray";
import { QUESTION_MARK } from "../../constants/strings";

let clickNum = 0;
let firstPick = null;
let secondPick = null;
let correctItemArray = [];
let initialCount = 0;

export default ({
  onGameOver,
  showAnswer,
  setShowAnswer,
  horizontalNum,
  bonusCheckTime,
}) => {
  const [shuffleData, setShuffleData] = useState([]);
  const [firstClickIndex, setFirstClickIndex] = useState(-1);
  const [secondClickIndex, setSecondClickIndex] = useState(-1);
  const [bombSound, setBombSound] = useState();
  const [correctSound, setCorrectSound] = useState();
  const [inCorrectSound, setInCorrectSound] = useState();
  const [numOfAnswer, setNumOfAnswer] = useState();

  const windowWidth = Dimensions.get("window").width;
  const fitWidth = windowWidth / (horizontalNum * 1.1);
  const fitMargin = (windowWidth - fitWidth * horizontalNum) / horizontalNum;

  /* 이미 설정된 변수 초기화 */
  const initializationFeed = () => {
    clickNum = 0;
    firstPick = null;
    secondPick = null;
    correctItemArray = [];
    initialCount = 0;
  };

  /* 설정 초기화 */
  const initialization = () => {
    clickNum = 0;
    firstPick = null;
    secondPick = null;
    setFirstClickIndex(-1);
    setSecondClickIndex(-1);
  };

  /* 카드 두 장 비교 */
  const compareCards = async (item) => {
    if (item === "bomb") {
      await inCorrectSound.replayAsync();
    } else if (
      firstPick !== null &&
      secondPick !== null &&
      firstPick === secondPick
    ) {
      correctItemArray.push(firstPick);
      await correctSound.replayAsync();

      /* 정답을 모두 찾았는지 체크 */
      const nowNumOfCorrect = correctItemArray.length;
      if (nowNumOfCorrect === numOfAnswer) {
        /* 정답을 모두 찾았다면, Game Over */
        return onGameOver();
      }
    } else if (
      firstPick !== null &&
      secondPick !== null &&
      firstPick !== secondPick
    ) {
      await inCorrectSound.replayAsync();
    }

    initialization();
  };

  const checkClick = (item, index) => {
    if (clickNum === 0) {
      clickNum++;
      setFirstClickIndex(index);
      firstPick = item;
    } else if (clickNum === 1) {
      clickNum++;
      setSecondClickIndex(index);
      secondPick = item;
    }

    /* Check Bomb */
    if (item === "bomb") {
      setTimeout(() => compareCards("bomb"), 150);
    }

    if (clickNum === 2 && item !== "bomb") {
      setTimeout(() => compareCards(), 150);
    }
  };

  const preLoad = async () => {
    try {
      const { stageArray, answer: answerNum } = checkBonusStage(horizontalNum);

      setShuffleData(shuffle(stageArray));
      setNumOfAnswer(answerNum);

      /* Stage별 정해진 시간 동안, 처음에 정답 보여 주기 */
      setTimeout(() => {
        setShowAnswer(false);
        initialCount++;
      }, bonusCheckTime);

      initializationFeed();

      /* Set Sound */
      const { sound: bombSound } = await Audio.Sound.createAsync(
        require("../../../assets/sounds/bomb_sound.mp3")
      );
      const { sound: correctSound } = await Audio.Sound.createAsync(
        require("../../../assets/sounds/correct_sound.mp3")
      );
      const { sound: inCorrectSound } = await Audio.Sound.createAsync(
        require("../../../assets/sounds/incorrect_sound.mp3")
      );
      setBombSound(bombSound);
      setCorrectSound(correctSound);
      setInCorrectSound(inCorrectSound);
    } catch (error) {
      console.log("error @preLoad_GameFeed_Bonus: ", error.message);
    }
  };

  useEffect(() => {
    return bombSound ? () => bombSound.unloadAsync() : undefined;
  }, [bombSound]);

  useEffect(() => {
    return correctSound ? () => correctSound.unloadAsync() : undefined;
  }, [correctSound]);

  useEffect(() => {
    return inCorrectSound ? () => inCorrectSound.unloadAsync() : undefined;
  }, [inCorrectSound]);

  useEffect(() => {
    preLoad();
  }, []);

  const answer = (item) => (
    <View
      style={[
        styles.itemThumbnail,
        {
          width: fitWidth,
          height: fitWidth,
          backgroundColor: colors.lightWhiteColor,
        },
      ]}
    >
      {item}
    </View>
  );

  const selectedAnswer = (item) => (
    <>
      <View
        style={[
          styles.itemThumbnail,
          {
            width: fitWidth,
            height: fitWidth,
            backgroundColor: colors.lightWhiteColor,
          },
        ]}
      >
        {item}
      </View>
      <View
        style={[
          styles.itemThumbnailOverlay,
          {
            width: fitWidth,
            height: fitWidth,
          },
        ]}
      />
    </>
  );

  const sameAnswer = (item) => (
    <View
      style={[
        styles.itemThumbnail,
        {
          width: fitWidth,
          height: fitWidth,
          backgroundColor: "rgba(247, 229, 34, 0.7)",
        },
      ]}
    >
      {item}
    </View>
  );

  const question = (
    <View
      style={[
        styles.itemThumbnail,
        {
          width: fitWidth,
          height: fitWidth,
          backgroundColor: colors.accentColor,
        },
      ]}
    >
      <Text style={[styles.questionText, { fontSize: fitWidth * 0.5 }]}>
        {QUESTION_MARK}
      </Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={shuffleData}
        renderItem={({ item, index }) => {
          const itemName = item.key;

          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginTop: fitMargin,
              }}
            >
              <TouchableOpacity
                onPress={checkClick.bind(this, itemName, index)}
                disabled={
                  index === firstClickIndex ||
                  index === secondClickIndex ||
                  correctItemArray.includes(itemName) ||
                  showAnswer
                }
              >
                {showAnswer
                  ? firstClickIndex === index ||
                    secondClickIndex === index ||
                    correctItemArray.includes(itemName)
                    ? selectedAnswer(item)
                    : initialCount !== 0 && itemName === "bomb"
                    ? selectedAnswer(item)
                    : firstPick !== null && itemName === firstPick
                    ? sameAnswer(item)
                    : answer(item)
                  : firstClickIndex === index ||
                    secondClickIndex === index ||
                    correctItemArray.includes(itemName)
                  ? answer(item)
                  : question}
              </TouchableOpacity>
            </View>
          );
        }}
        numColumns={horizontalNum} // Setting the number of column
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false} // Scroll X
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  itemThumbnailOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: colors.blackColor,
    opacity: 0.3,
    borderRadius: 10,
    elevation: 6,
  },
  questionText: {
    fontWeight: "bold",
    color: colors.whiteColor,
  },
});
