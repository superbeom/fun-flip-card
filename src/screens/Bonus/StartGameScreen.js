import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { useGameInfo } from "../../context/GameContext";

import colors from "../../constants/colors";
import { HOME } from "../../constants/strings";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Heart from "../../components/Heart";
import Button from "../../components/Button";

const Content = ({ onPress, bonusStage }) => (
  <TouchableOpacity
    style={styles.cardContainer}
    onPress={onPress}
    activeOpacity={0.5}
  >
    <Card style={styles.card}>
      <Text style={styles.bonusText}>{bonusStage}</Text>
    </Card>
  </TouchableOpacity>
);

export default ({ onStartGame, navigation }) => {
  const { heart } = useGameInfo();

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <View style={styles.heartBox}>
          <Heart
            onPress={() => null}
            numOfHeart={heart}
            disabled={true}
            color={colors.whiteColor}
          />
        </View>

        <Content onPress={onStartGame.bind(this, "3x3")} bonusStage={"3 x 3"} />
        <Content onPress={onStartGame.bind(this, "4x4")} bonusStage={"4 x 4"} />
        <Content onPress={onStartGame.bind(this, "5x5")} bonusStage={"5 x 5"} />
        <Content onPress={onStartGame.bind(this, "6x6")} bonusStage={"6 x 6"} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate(HOME)}
          content={"home"}
          size={vw(20)}
          activeOpacity={0.9}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 11,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: vw(10),
  },
  heartBox: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: vw(3),
    marginBottom: vh(5),
  },
  cardContainer: {
    width: "60%",
    height: vh(10),
    marginBottom: vh(5),
  },
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bonusText: {
    fontSize: vw(8),
    fontWeight: "500",
    color: colors.blackColor,
  },
});
