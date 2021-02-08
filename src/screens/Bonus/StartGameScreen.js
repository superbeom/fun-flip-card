import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { useGameInfo } from "../../context/GameContext";

import colors from "../../constants/colors";
import { HOME, NEED_A_HEART } from "../../constants/strings";

import Card from "../../components/Card";
import Heart from "../../components/Heart";
import Arrow from "../../components/Arrow";
import GetHeartText from "../../components/GetHeartText";
import Button from "../../components/Button";
import Overlay from "../../components/Overlay";

const Content = ({ onPress, bonusStage, enoughHeart }) => (
  <TouchableOpacity
    style={styles.cardContainer}
    onPress={onPress}
    activeOpacity={0.5}
    disabled={!enoughHeart}
  >
    <Card style={styles.card}>
      <Text style={styles.bonusText}>{bonusStage}</Text>
    </Card>
    {/* Overlay */}
    {!enoughHeart ? (
      <Overlay string={NEED_A_HEART} overlayFontSize={vw(6)} />
    ) : null}
  </TouchableOpacity>
);

export default ({ onStartGame, getHeart, navigation }) => {
  const { heart } = useGameInfo();

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <View style={styles.heartBox}>
          {heart <= 1 ? (
            <>
              <View style={styles.infoBox}>
                <GetHeartText enoughHeart={false} />
                <Arrow enoughHeart={false} direction={"right"} />
              </View>
            </>
          ) : null}
          <Heart
            onPress={getHeart}
            numOfHeart={heart}
            color={colors.whiteColor}
          />
        </View>

        <Content
          onPress={onStartGame.bind(this, "3x3")}
          bonusStage={"3 x 3"}
          enoughHeart={heart > 0 ?? false}
        />
        <Content
          onPress={onStartGame.bind(this, "4x4")}
          bonusStage={"4 x 4"}
          enoughHeart={heart > 0 ?? false}
        />
        <Content
          onPress={onStartGame.bind(this, "5x5")}
          bonusStage={"5 x 5"}
          enoughHeart={heart > 0 ?? false}
        />
        <Content
          onPress={onStartGame.bind(this, "6x6")}
          bonusStage={"6 x 6"}
          enoughHeart={heart > 0 ?? false}
        />
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
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: vw(3),
    marginBottom: vh(5),
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: vw(3),
  },
  cardContainer: {
    width: "60%",
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
