import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { useGameInfo } from "../../context/GameContext";
import colors from "../../constants/colors";
import { FLAG } from "../../utils/FontAwesomeSource";
import { CURRENT_STAGE, BONUS } from "../../constants/strings";

import AnimalScreen from "./AnimalScreen";

import Card from "../../components/Card";
import StartButton from "../../components/StartButton";
import Heart from "../../components/Heart";
import Arrow from "../../components/Arrow";
import GetHeartText from "../../components/GetHeartText";
import Button from "../../components/Button";

export default ({ onStartGame, getHeart, navigation }) => {
  const { stage, heart, gameEnd } = useGameInfo();

  return (
    <View style={styles.screen}>
      <View style={styles.gameInfo}>
        <Card style={styles.card}>
          {gameEnd ? (
            <View style={styles.cardBox}>{FLAG}</View>
          ) : (
            <View style={styles.cardBox}>
              <Text style={styles.cardText}>{CURRENT_STAGE}</Text>
              <Text style={[styles.cardText, { marginTop: vh(1) }]}>
                {stage}
              </Text>
            </View>
          )}
        </Card>
        <View style={styles.heartBox}>
          <Heart onPress={getHeart} numOfHeart={heart} disabled={gameEnd} />
          {heart <= 1 ? (
            <>
              <View style={styles.arrowBox}>
                <Arrow enoughHeart={false} direction={"up"} />
              </View>
              <View>
                <GetHeartText enoughHeart={false} />
              </View>
            </>
          ) : null}
        </View>
      </View>

      <View style={styles.gameStartContainer}>
        <StartButton
          onPress={onStartGame}
          update={gameEnd}
          enoughHeart={heart > 0 ?? false}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate(BONUS)}
          content={"game_pad"}
          size={vw(20)}
          activeOpacity={0.9}
        />
      </View>

      {/* Animals */}
      <AnimalScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  gameInfo: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "50%",
    height: vh(13),
    justifyContent: "space-around",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 10,
    shadowColor: colors.slateGrayColor,
  },
  cardBox: {
    alignItems: "center",
  },
  cardText: {
    fontSize: vw(5.5),
    fontWeight: "700",
    color: colors.accentColor,
  },
  heartBox: {
    width: "50%",
    height: vh(13),
    alignItems: "flex-end",
  },
  arrowBox: {
    alignItems: "flex-start",
    width: "45%",
  },
  gameStartContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: vw(10),
  },
});
